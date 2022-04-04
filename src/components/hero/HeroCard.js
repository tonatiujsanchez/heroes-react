import { Link } from "react-router-dom"


export const HeroCard = ({ hero }) => {

    const { id, superhero, publisher, alter_ego, first_appearance, characters, } = hero

    const imgPath = `/assets/img/${ id }.jpg`
    return (
        <div className="col">
            <div className="card animate__animated animate__fadeIn">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={imgPath} alt={ superhero } className='card-img' />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                alter_ego !== characters && (
                                    <p className="text-muted">{ characters }</p>
                                )
                            }
                            <p className="card-text">{ first_appearance }</p>
                            <Link to={`/hero/${id}`} >
                                Ver más
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
