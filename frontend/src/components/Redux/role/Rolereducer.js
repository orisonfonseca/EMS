const initialState={
    role:{},
    error8:null,
    success8:null,
    datastate8:"NOT_INITIALIZED",
}

const roleReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_SUCCESS8":
            return{
                ...state,
                success8:action.payload,
            }
        case "ADD_FAILURE8":
            return{
                ...state,
                error8:action.payload,
            }
         case "ON_FETCH_SUCCESS8":
                return {
                    ...state,
                    role:action.payload,
                    datastate8:'FETCHED_SUCCESS',
                }
         case "ON_FETCH_FAILURE8":
                return {
                    ...state,
                    error8:action.payload,
                    datastate8:'FETCHED_FAILURE',
                }
         case "ON_FETCHING8":
                return {
                    ...state,
                    datastate8:"FETCHING",
                }    
         case "UPDATE_SUCCESS8":
            return {
                ...state,
                success8:action.payload
            }
         case "UPDATE_FAILURE8":
            return {
                ...state,
                error8:action.payload,
            }
            case "DISSR":
                return {
                    ...state,
                    success8:"",
                    error8:""
                }
            default:
            return {...state}
    }
}
export default roleReducer;