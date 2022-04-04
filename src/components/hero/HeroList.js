import { useMemo } from "react"

import { HeroCard } from "./HeroCard"
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher"



const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroByPublisher( publisher ), [publisher])

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( hero => (
                    <HeroCard key={ hero.id } hero={ hero } />
                ))
            }
    </div>
  )
}

export default HeroList