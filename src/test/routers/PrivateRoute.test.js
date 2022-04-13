import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"
import PrivateRoute from "../../routers/PrivateRoute"



jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    Navigate: ()=> <span>Redireccionando</span>
}))

describe('Pruebas en el <PrivateRoute />', () => { 

    Storage.prototype.setItem = jest.fn()

    test('Debe de mostrar el componente si esta autenticado y guardar en el localStorage', () => { 

        const contextValue = {
            user: {
                logged: true,
                name: 'Pepe'
            }
        }


        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(wrapper.text().trim()).toBe('Private Component')
        expect( localStorage.setItem ).toHaveBeenCalledWith('heroesreact_lastpath', '/')

     })


     test('Debe de bloquear el componente si no esta autenticado', () => { 

        const contextValue = {
            user: {
                logged: false,
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        

        expect( wrapper.find('span').text().trim() ).toBe('Redireccionando')
      })

 })