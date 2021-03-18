const initialState={
    leave:{},
    error6:null,
    success6:null,
    datastate6:"NOT_INITIALIZED",
}

const leaveReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_SUCCESS6":
            return{
                ...state,
                success6:action.payload,
            }
        case "ADD_FAILURE6":
            return{
                ...state,
                error6:action.payload,
            }
         case "ON_FETCH_SUCCESS6":
                return {
                    ...state,
                    leave:action.payload,
                    datastate6:'FETCHED_SUCCESS',
                }
         case "ON_FETCH_FAILURE6":
                return {
                    ...state,
                    error6:action.payload,
                    datastate6:'FETCHED_FAILURE',
                }
         case "ON_FETCHING6":
                return {
                    ...state,
                    datastate6:"FETCHING",
                }    
         case "UPDATE_SUCCESS6":
            return {
                ...state,
                success6:action.payload
            }
         case "UPDATE_FAILURE6":
            return {
                ...state,
                error6:action.payload,
            }
            case "DISS":
                return {
                    ...state,
                    success6:"",
                    error6:""
                }
            default:
            return {...state}
    }
}
export default leaveReducer;