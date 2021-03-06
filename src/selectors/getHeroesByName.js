import { heroes } from "../data/heroes"



export const getHeroesByName = (nameHero = '') => {


    if( nameHero === '' ) return []

    nameHero = nameHero.toLowerCase()
    return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(nameHero))
}

