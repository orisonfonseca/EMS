const initialState={
    project:{},
    error7:null,
    success7:null,
    datastate7:"NOT_INITIALIZED",
}

const projectReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_SUCCESS7":
            return{
                ...state,
                success7:action.payload,
            }
        case "ADD_FAILURE7":
            return{
                ...state,
                error7:action.payload,
            }
         case "ON_FETCH_SUCCESS7":
                return {
                    ...state,
                    project:action.payload,
                    datastate7:'FETCHED_SUCCESS',
                }
         case "ON_FETCH_FAILURE7":
                return {
                    ...state,
                    error7:action.payload,
                    datastate7:'FETCHED_FAILURE',
                }
         case "ON_FETCHING7":
                return {
                    ...state,
                    datastate7:"FETCHING",
                }    
         case "UPDATE_SUCCESS7":
            return {
                ...state,
                success7:action.payload
            }
         case "UPDATE_FAILURE7":
            return {
                ...state,
                error7:action.payload,
            }
            case "DISSPP":
                return {
                    ...state,
                    success7:"",
                    error7:""
                }
            default:
            return {...state}
    }
}
export default projectReducer;