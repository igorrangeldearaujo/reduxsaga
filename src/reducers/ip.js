const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

const ip = (state = INITIAL_STATE, action) => {
   console.log(action)//Show error in browser
   if(action.type==='LOAD_DATA_REQUEST'){
       return{
          isFetching: true,
          data: [],
          error: false  
       }
   } 
   if(action.type==='LOAD_DATA_SUCCESS'){
        return{
            isFetching: false,
            data: action.data,
            error: false  
        }
    } 
    if(action.type==='LOAD_DATA_FAILURE'){
        return{
            isFetching: false,
            data: [],//Verificar se é action.data
            error: true  
        }
    } 
   return state
}

export default ip
