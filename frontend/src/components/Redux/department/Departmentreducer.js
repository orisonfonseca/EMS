const initialState={
    department:{},
    error9:null,
    success9:null,
    datastate9:"NOT_INITIALIZED",
}

const departmentReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_SUCCESS9":
            return{
                ...state,
                success9:action.payload,
            }
        case "ADD_FAILURE9":
            return{
                ...state,
                error9:action.payload,
            }
         case "ON_FETCH_SUCCESS9":
                return {
                    ...state,
                    department:action.payload,
                    datastate9:'FETCHED_SUCCESS',
                }
         case "ON_FETCH_FAILURE9":
                return {
                    ...state,
                    error9:action.payload,
                    datastate9:'FETCHED_FAILURE',
                }
         case "ON_FETCHING9":
                return {
                    ...state,
                    datastate9:"FETCHING",
                }    
         case "UPDATE_SUCCESS9":
            return {
                ...state,
                success9:action.payload
            }
         case "UPDATE_FAILURE9":
            return {
                ...state,
                error9:action.payload,
            }
            case "DISSD":
                return {
                    ...state,
                    success9:"",
                    error9:""
                }
            default:
            return {...state}
    }
}
export default departmentReducer;