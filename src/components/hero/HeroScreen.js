import { useMemo, useState } from 'react'
import { useParams, Navigate, useNavigate } from "react-router-dom"

import { getHeroById } from "../../selectors/getHeroById"



const HeroScreen = () => {

    const [counter, setCounter] = useState(0)
    const navigate = useNavigate()
    const { idHero } = useParams()

    const hero = useMemo( ()=> getHeroById(idHero), [idHero] ) 

    if (!hero) return <Navigate to='/' />

    const { id, superhero, publisher, alter_ego, first_appearance, characters, } = hero
    const imgPath = `/assets/img/${id}.jpg`

    const handleReturn = () => {
        navigate(-1)
    }

    return (
        <div className="row mt-5">
            <div className="col-4 animate__animated animate__bounceInLeft">
                <img src={imgPath} alt={superhero} className='img-thumbnail' />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <div className="mb-4 d-flex justify-content-between align-items-center">
                    <h1>{superhero}</h1>
                    <button
                        onClick={handleReturn}
                        className="btn btn-outline-danger">
                        👈 Regresar
                    </button>
                </div>
                <ul className="list-group">
                    <li className="list-group-item"> <b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"> <b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"> <b>First Appearance: </b>{first_appearance}</li>
                </ul>
                <h5 className="mt-5 fw-bold">Characters</h5>
                <p>{characters}</p>
                <button
                    onClick={()=> setCounter( counter + 1 )}
                    className="btn btn-outline-danger">
                    Power ⚡ { counter }
                </button>
            </div>
        </div>
    )
}

export default HeroScreen