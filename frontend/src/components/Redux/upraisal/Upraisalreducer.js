const initialState={
    upraisal:{},
    error3:null,
    success3:null,
    datastate3:"NOT_INITIALIZED",
}

const upraisalReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_SUCCESS3":
            return{
                ...state,
                success3:action.payload,
            }
        case "ADD_FAILURE3":
            return{
                ...state,
                error3:action.payload,
            }
         case "ON_FETCH_SUCCESS3":
                return {
                    ...state,
                    upraisal:action.payload,
                    datastate3:'FETCHED_SUCCESS',
                }
         case "ON_FETCH_FAILURE3":
                return {
                    ...state,
                    error3:action.payload,
                    datastate3:'FETCHED_FAILURE',
                }
         case "ON_FETCHING3":
                return {
                    ...state,
                    datastate3:"FETCHING",
                }    
         case "UPDATE_SUCCESS3":
            return {
                ...state,
                success3:action.payload
            }
         case "UPDATE_FAILURE3":
            return {
                ...state,
                error3:action.payload,
            }
            case "DISSU":
                return {
                    ...state,
                    success3:"",
                    error3:""
                }
            default:
            return {...state}
    }
}
export default upraisalReducer;