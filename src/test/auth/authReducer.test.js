import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"




describe('Pruebas en authReducer', () => {


    test('Debe de retornar el estado por defecto', () => {

        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false })

    })



    test('Debe de autenticar y colocar el name del usuario', () => {

        const action = {
            type: types.login,
            paylod: {
                name: 'Brandon'
            }
        }
        const state = authReducer({ logged: false }, action)

        expect(state).toEqual({
            logged: true,
            name: 'Brandon'
        })

    })


    test('Debe re borrar el nombre y el logged en false', () => {
        const action = {
            type: types.logout
        }

        const state = authReducer({ logged: true, name: 'Brandon' }, action)

        expect( state ).toEqual({ logged: false })
    })
})