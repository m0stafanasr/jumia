const prodsURL = 'https://fakestoreapi.com/products'
import axios from "axios";

export const prodName =  async()=>{
   let prods=[];
   try{
      const response =  await axios.get(prodsURL)
      prods = response.data;
   }catch(error){
    console.log(error)
   } return{
        type:'prod_List',
        payload:prods
    }
}

export const prodDetails = async(id)=>{
   let prod = {}
   try{
      const response = await axios.get(`${prodsURL}/${id}`)
      prod = response.data
      
   }catch(err){
      console.log(err)
   }
   return{
    type:'prod_detail',
    payload: prod
   }
}

export const clearDetails = ()=>{
   return{
      type: 'clear_details'
   }
}