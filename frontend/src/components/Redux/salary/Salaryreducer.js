const initialState={
    salary:{},
    error5:null,
    success5:null,
    datastate5:"NOT_INITIALIZED",
    update:""
}

const salaryReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_SUCCESS5":
            return{
                ...state,
                success5:action.payload,
            }
        case "ADD_FAILURE5":
            return{
                ...state,
                error5:action.payload,
            }
         case "ON_FETCH_SUCCESS5":
                return {
                    ...state,
                    salary:action.payload,
                    datastate5:'FETCHED_SUCCESS',
                }
         case "ON_FETCH_FAILURE5":
                return {
                    ...state,
                    error5:action.payload,
                    datastate5:'FETCHED_FAILURE',
                }
         case "ON_FETCHING5":
                return {
                    ...state,
                    datastate5:"FETCHING",
                }    
         case "UPDATE_SUCCESS5":
            return {
                ...state,
                success5:action.payload,
                update:"updated"
            }
         case "UPDATE_FAILURE5":
            return {
                ...state,
                error5:action.payload,
            }
            case "DISSS":
                return {
                    ...state,
                    success5:"",
                    error5:""
                }
            default:
            return {...state}
    }
}
export default salaryReducer;