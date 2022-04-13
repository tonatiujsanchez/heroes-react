import { mount } from "enzyme"
import { AuthContext } from "../../auth/authContext"
import AppRouter from "../../routers/AppRouter"




describe('Pruebas en AppRouter', () => {


    test('Debe de mostrar el Login si no está autenticado', () => {
        const contextValue = {
            user: {
                logged: false
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('button').text().trim()).toBe('Login')
    })

    test('Debe de mostrar el componente de MArvel si esta autenticado', () => {
        const contextValue = {
            user: {
                logged: true,
                name: 'Brandon'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot()
        expect( wrapper.find('.navbar').exists() ).toBe( true )


    })
})