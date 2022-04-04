import { heroes } from "../data/heroes"


export const getHeroByPublisher = ( publisher ) => {

  console.log('getHeroByPublisher Called...');

    const validPublishers = ['DC Comics', 'Marvel Comics' ]

    if( !validPublishers.includes( publisher ) ){
        throw new Error(`${ publisher } is no a valid publisher`)
    }

  return heroes.filter( heroe => heroe.publisher === publisher )
}
