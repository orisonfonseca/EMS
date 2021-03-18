const initialState={
    noti:{},
    error21:null,
    success21:null,
    datastate21:"NOT_INITIALIZED",
}

const notiReducer=(state=initialState,action)=>{
    switch(action.type){
        
         case "ON_FETCH_SUCCESS21":
                return {
                    ...state,
                    noti:action.payload,
                    datastate21:'FETCHED_SUCCESS',
                }
         case "ON_FETCH_FAILURE21":
                return {
                    ...state,
                    error21:action.payload,
                    datastate21:'FETCHED_FAILURE',
                }
         case "ON_FETCHING21":
                return {
                    ...state,
                    datastate21:"FETCHING",
                }    
                case "UPDATE_SUCCESS21":
                    return {
                        ...state,
                        noti:action.payload,
                        datastate21:'FETCHED_SUCCESS'
                    }
                 case "UPDATE_FAILURE21":
                    return {
                        ...state,
                        error21:action.payload,
                    }
        
            default:
            return {...state}
    }
}
export default notiReducer;