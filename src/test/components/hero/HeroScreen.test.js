import { MemoryRouter, Routes, Route } from "react-router-dom"
import { mount } from "enzyme"
import HeroScreen from "../../../components/hero/HeroScreen"





const mockNavigate = jest.fn()

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockNavigate

}))


describe('Pruebas en <HeroScreen />', () => { 


    test('No debe  de mostrar el HeroScreen si no hay un heroe en el url', () => { 

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path="/hero" element={ <HeroScreen /> } />
                    <Route path="/" element={ <h1>No Hero page</h1> } />
                </Routes>
            </MemoryRouter>
         )


        expect( wrapper.find('h1').text().trim() ).toBe('No Hero page')

     })



    test('Debe de mostrar un heroe si el parametro existe y se encuentra', () => { 

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="hero/:idHero" element={ <HeroScreen /> } />
                    <Route path="/" element={ <h1>No Hero page</h1> } />
                </Routes>
            </MemoryRouter>
         )


        expect( wrapper.find('.row').exists() ).toBe(true)

     })


    test('No debe mostrar un heroe si el parametro existe y no se encuentra el heroe', () => { 

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider156213546']}>
                <Routes>
                    <Route path="hero/:idHero" element={ <HeroScreen /> } />
                    <Route path="/" element={ <h1>No Hero page</h1> } />
                </Routes>
            </MemoryRouter>
         )


         expect( wrapper.find('h1').text().trim() ).toBe('No Hero page')


     })


     test('Debe de regresar a la pantalla anterior', () => { 

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:idHero" element={ <HeroScreen /> } />
                </Routes>
            </MemoryRouter>
         )

        wrapper.find('.btn-back').prop('onClick')()

        expect( mockNavigate ).toHaveBeenCalledWith(-1)

      })


 })