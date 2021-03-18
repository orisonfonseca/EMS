const initialState={
    timesheet:{},
    error4:null,
    success4:null,
    datastate4:"NOT_INITIALIZED",
}

const timesheetReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_SUCCESS4":
            return{
                ...state,
                success4:action.payload,
            }
        case "ADD_FAILURE4":
            return{
                ...state,
                error4:action.payload,
            }
         case "ON_FETCH_SUCCESS4":
                return {
                    ...state,
                    timesheet:action.payload,
                    datastate4:'FETCHED_SUCCESS',
                }
         case "ON_FETCH_FAILURE4":
                return {
                    ...state,
                    error4:action.payload,
                    datastate4:'FETCHED_FAILURE',
                }
         case "ON_FETCHING4":
                return {
                    ...state,
                    datastate4:"FETCHING",
                }    
         case "UPDATE_SUCCESS4":
            return {
                ...state,
                success4:action.payload
            }
         case "UPDATE_FAILURE4":
            return {
                ...state,
                error4:action.payload,
            }
            case "DISST":
                return {
                    ...state,
                    success4:"",
                    error4:""
                }
            default:
            return {...state}
    }
}
export default timesheetReducer;