import { Box, Button, FlatList, Image, HStack, View, Spinner } from "native-base";
import { Text, TouchableHighlight } from "react-native";
import { useContext, useEffect } from "react";
import { prodName } from "./reducer/actions/actions";
import { NavigationContainer } from "@react-navigation/native";
import { movContext } from "./context/context";
import { prodT } from "./components/box";
import { styles } from "./style";
import { Icon } from "react-native-elements";
export const HomeComponent = ({  navigation }) => {
  const { state, dispatch } = useContext(movContext);
  console.log(state);
  useEffect(() => {
    const resolveAction = async () => {
      dispatch(await prodName());
    };
    resolveAction();
  }, []);
  
  return (
    <FlatList
      numColumns={2}
      data={state.list}
      style={styles.main}
      renderItem={({ item: prod }) => (
        <TouchableHighlight
        onPress={()=>{
          navigation.navigate({name:'details',params:{
              id:prod.id
          }})
      }}>
        
          <Box style={styles.prod}>
            <View style={styles.flow}>
              <Icon
                name="star-outline"
                type="ionicon"
                style={styles.font}
                size={23}
                color={"#fcca03"}
              />
            </View>
            <Image source={{ uri: prod.image }} style={styles.img} />
            <Text style={styles.title}>{prod.title}</Text>
            <View style={styles.rates}>
              <Text style={styles.price}>{`Price: ${prod.price} EGP`}</Text>
            </View>
          </Box>
        </TouchableHighlight>
      )}
    />
 
  )
};

