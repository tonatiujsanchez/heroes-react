import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"
import DashboardRoute from "../../routers/DashboardRoute"




describe('Pruebas en DashboardRoute', () => { 

    test('Debe de mostrarse correctamente - Marvel ', () => { 


        const contextValue = {
            user: {
                logged: true,
                name: 'Brandon',
            }
        }

        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter  initialEntries={['/']}>
                    <DashboardRoute /> 
                </MemoryRouter>
            </AuthContext.Provider>
        ) 
        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('.text-info').text().trim() ).toBe( contextValue.user.name )
        expect( wrapper.find('h1').text().trim() ).toBe('MarvelScreen')
        
     })



    test('Debe de mostrarse correctamente - DC ', () => { 


        const contextValue = {
            user: {
                logged: true,
                name: 'Brandon',
            }
        }

        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter  initialEntries={['/dc']}>
                    <DashboardRoute /> 
                </MemoryRouter>
            </AuthContext.Provider>
        ) 
        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('.text-info').text().trim() ).toBe( contextValue.user.name )
        expect( wrapper.find('h1').text().trim() ).toBe('DcScreen')
        
     })





 })