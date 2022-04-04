import { heroes } from "../data/heroes"


export const getHeroById = ( idHero ) => {
  return heroes.find( hero => hero.id === idHero )
}
