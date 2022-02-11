import { AUTH,LOGOUT } from "../constants/actionTypes";
import { signOut } from "../auth/helpers";

export const authReducer=(state={authData:null},action) => {
    switch(action.type){
        case AUTH:
            console.log(action.payload)
            return {...state,authData:action?.payload}
        case LOGOUT:
            signOut()
            return {...state,authData:null}
        default:
            return state
    }
}