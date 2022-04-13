import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import SearchScreen from "../../../components/search/SearchScreen"


const mockNavigate = jest.fn()

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockNavigate,
}))


describe('Pruebas a <SearchScreen />', () => {

    test('Debe mostrarse correctamente con valores por defecto', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>
        )

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.alert-info').text().trim()).toBe('Busca un héroe')

    })


    test('Debe de mostrar a Batman y el input cib ek valir del query String', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen />
            </MemoryRouter>
        )

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('input').prop('value') ).toBe('batman')


    })


    test('Debe de mostrar en mensaje de Sin resultados', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=123456']}>
                <SearchScreen />
            </MemoryRouter>
        )

        expect( wrapper ).toMatchSnapshot()
        
        const msjSinResultados = wrapper.find('.alert-info').text().trim()
        expect( msjSinResultados ).toBe('No se encontraron resultados de 123456')

    })

    test('Debe de llamar el navigate a la nueva pantalla', () => { 

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>
        )

        wrapper.find('input').simulate('change', { 
            target:{ name: 'searchText', value: 'batman' } 
        })

        wrapper.find('form').prop('onSubmit')({
            preventDefault: ()=>{}
        })

        expect( mockNavigate ).toHaveBeenCalledWith('?q=batman')

     })


    
})