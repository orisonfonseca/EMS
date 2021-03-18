const initialState={
    emp:{},
    error_msg:null,
    success_msg:null,
    isLoggedIn:false,
}

const eauthReducer=(state=initialState, action)=>{
    switch(action.type){
        case "ON_REGISTER_SUCCESS2":
            return {
                ...state,
                success_msg:action.payload,
                error_msg:null,
            }
        case "ON_REGISTER_FAILURE2":
            return {
                ...state,
                error_msg:action.payload,
                success_msg:null,
            }
            case "ON_LOGIN_SUCCESS2":
            return{
                ...state,
                emp:action.payload,
                isLoggedIn:true,
                error_msg:""
            }
        case "ON_LOGIN_FAILURE2":
            return{
                ...state,
                error_msg:action.payload,
            }
            case "ON_LOGOUT_SUCCESS2":
            return {
                ...state,
                emp:{},
                isLoggedIn:false,
            }
            case "ON_CHANGE_SUCCESS2":
            return {
                ...state,
                success_msg:action.payload
            }
            case "ON_CHANGE_FAILURE2":
            return {
                ...state,
                error_msg:action.payload,
            }
        default:
            return {...state}
    }
}

export default eauthReducer;
