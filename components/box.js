import { Text } from "native-base"

export default ProdT = ({item})=>{
    if(item.id){
        return(
            <Text>{item.title}</Text>
        )
    }
}

/**
 * ({item: prod})=>
        <TouchableHighlight onPress={()=>{
            console.log("pressed")
        }} style={styles.shade}>
           <Box style={styles.prod} >
            <View style={styles.flow}>

         <Icon name='star-outline'  type="ionicon" style={styles.font}  size={23} color={'#fcca03'}/>
         </View>   
       <Image  source={{uri:prod.image}} style={styles.img}/>
        <Text style={styles.title}>{prod.title}</Text>
        <View style={styles.rates}>
            <Text style={styles.price} >{`Price: ${prod.price} EGP`}</Text>
        </View>
       
    </Box> 
        </TouchableHighlight>
 */