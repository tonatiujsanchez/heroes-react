import { types } from "../types/types";

// const state = {
//     name: 'Brandon',
//     logged: true
// }


// const loginAction = {
//     type: types.login,
//     paylod: {
//         name: 'Brandon',
//         email: 'brandon@gmail.com'
//     }
// }


export const authReducer = ( state = {}, action ) => {


    switch (action.type) {

        case types.login:
            return{
                ...action.paylod,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
    
        default:
            return state
    }

    
}
