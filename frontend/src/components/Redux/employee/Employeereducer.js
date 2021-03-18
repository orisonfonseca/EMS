const initialState={
    employees:{},
    error:null,
    success:null,
    datastate:"NOT_INITIALIZED",
}

const employeeReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_SUCCESS":
            return{
                ...state,
                success:action.payload,
            }
        case "ADD_FAILURE":
            return{
                ...state,
                error:action.payload,
            }
         case "ON_FETCH_SUCCESS1":
                return {
                    ...state,
                    employees:action.payload,
                    datastate:'FETCHED_SUCCESS',
                }
         case "ON_FETCH_FAILURE":
                return {
                    ...state,
                    error:action.payload,
                    datastate:'FETCHED_FAILURE',
                }
         case "ON_FETCHING1":
                return {
                    ...state,
                    datastate:"FETCHING",
                }    
         case "UPDATE_SUCCESS":
            return {
                ...state,
                success:action.payload
            }
         case "UPDATE_FAILURE":
            return {
                ...state,
                error:action.payload,
            }
            case "DISSE":
                return {
                    ...state,
                    success:"",
                    error:""
                }
        
            default:
            return {...state}
    }
}
export default employeeReducer;