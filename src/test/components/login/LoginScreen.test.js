import { mount } from "enzyme"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import { AuthContext } from "../../../auth/authContext"
import LoginScreen from "../../../components/login/LoginScreen"
import { types } from "../../../types/types"



const mockNavigate = jest.fn()

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockNavigate

}))


describe('Pruebas en <LoginScreen />', () => { 

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    )
    test('Debe de hacer march con el snapshot', () => { 

        expect( wrapper ).toMatchSnapshot()


     })



     test('Debe de realizar el dispatch y la navegación', () => { 

        const handleClick = wrapper.find('button').prop('onClick')
        handleClick()

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            paylod: {
                name: "B. Santiago"
            }, 
        })


        expect( mockNavigate ).toBeCalledWith("/marvel", {replace: true})


        localStorage.setItem('heroesreact_lastpath', '/dc')

        handleClick()

        expect( mockNavigate ).toBeCalledWith("/dc", {replace: true})


      })
 })