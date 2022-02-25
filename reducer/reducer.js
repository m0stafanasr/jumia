

export const reducer = (state={},action)=>{
    console.log(action, "Sdf")
  switch(action.type){
        case 'prod_List':  {
            return{...state,list: action.payload}
        } 
        case 'prod_detail':{
            return {...state,details: action.payload}
        }
        case 'clear_details':{
            return {...state,details:{}}
            
        }
       default: return state
    }

}
