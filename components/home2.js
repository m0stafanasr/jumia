import { Text } from "react-native";
import {Box, HStack, Image, View, VStack, Spinner} from 'native-base';
import { styles } from "../style";
import { Icon } from "react-native-elements";
import { clearDetails, prodDetails } from "../reducer/actions/actions";
import { useContext, useEffect } from "react";
import { movContext } from "../context/context";

export const Details = ({route})=>{
  const {state,dispatch} = useContext(movContext)
  console.log(state,"24")
  useEffect(()=>{
    const resolveAction = async ()=>{
        dispatch(await prodDetails(route.params.id));
    };
    resolveAction();
    return ()=>{dispatch(clearDetails())} 
    } ,[])
   if(state.details.id)

    return <VStack>
        <View style={styles.imgView}>
          <Image source={{uri:state.details.image}} style={styles.innerImage} />
        </View>
        <Box style={styles.info}>

        
        <View>
          <Text style={styles.inrTitle}>{state.details.title}</Text>
          <Text>{`category: ${state.details.category}`}</Text>
        </View>
          <View style={styles.rates}>
            <Box style={styles.icons}>
              <Text style={styles.font} >{`Rating: ${state.details.rating.rate}`}</Text>
              <Icon name='star' type="ionicon" style={styles.font}  size={20} color={'#ffac1c'}/>
            </Box>

            <Box style={styles.icons}>
              <Icon name="ios-share" type="ionicon" style={styles.font}  size={35} color={'#ffac1c'}/>
              <Icon name="heart-outline" type="ionicon" style={styles.font}  size={35} color={'#ffac1c'}/>
            </Box>
          </View>  
         <View>
           <Text style={styles.font}> Description:</Text>
          <Text>{state.details.description}</Text>
        </View>
        <View style={styles.block}>
          <Box  style={styles.icons}>
            <Text style={styles.font}>User Reviews</Text>
            <Icon name='md-arrow-forward' type="ionicon" style={styles.font}  size={25} color={'#ffac1c'}/>
          </Box>
          <Text style={styles.review}>({state.details.rating.count} review)</Text>
        </View>
        </Box>
      </VStack>
         

      return <HStack style={styles.loading}>
        <Spinner color={'#d4d4d4'} size={100} />
        </HStack>
   
   

    
}