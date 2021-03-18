const initialState={
    user:{},
    error_msg:null,
    success_msg:null,
    isLoggedIn:false,
}

const authReducer=(state=initialState, action)=>{
    switch(action.type){
        case "ON_REGISTER_SUCCESS":
            return {
                ...state,
                success_msg:action.payload,
                error_msg:null,
            }
        case "ON_REGISTER_FAILURE":
            return {
                ...state,
                error_msg:action.payload,
                success_msg:null,
            }
            case "ON_LOGIN_SUCCESS":
            return{
                ...state,
                user:action.payload,
                isLoggedIn:true,
                error_msg:""
            }
        case "ON_LOGIN_FAILURE":
            return{
                ...state,
                error_msg:action.payload,
            }
            case "ON_LOGOUT_SUCCESS":
            return {
                ...state,
                user:{},
                isLoggedIn:false,
            }
            case "ON_CHANGE_SUCCESS":
            return {
                ...state,
                success_msg:action.payload,
                error_msg:""
            }
            case "ON_CHANGE_FAILURE":
            return {
                ...state,
                error_msg:action.payload,
                success_msg:""
            }
            case "DISSP":
                return {
                    ...state,
                    success_msg:"",
                    error_msg:""
                }
        default:
            return {...state}
    }
}

export default authReducer;
