import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string'

import { useForm } from "../../hooks/useForm";

import { HeroCard } from "../hero/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";


const SearchScreen = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { q = '' } = queryString.parse(location.search)
    
    const [heroesSearch, setHeroesSearch] = useState([])
    


    const [ { searchText }, handleInputChange ] = useForm({
        searchText: q
    })
    
    useEffect(()=>{
        const heroesFilter = getHeroesByName( searchText.trim() )
        setHeroesSearch(heroesFilter)
    },[])
    


    const handleSubmit = ( e )=>{
        e.preventDefault()
        
        if( searchText.trim() === '' ){
            console.log('Se necesita una temino para realizar la busqueda');
            return
        }
        if( searchText.trim() === q ){
            return
        }        

        navigate(`?q=${ searchText.trim() }`)

        const heroesFilter = getHeroesByName( searchText.trim() )
        setHeroesSearch( heroesFilter );
    }

    return (
        <>
            <h1>Buscar Heroes</h1>
            <hr />
            <div className="row mb-5">
                <div className="col-5">
                    <form onSubmit={ handleSubmit }>
                        <input
                            type="text"
                            placeholder="Batman, Wonder Woman, Spider Man, Captain America, etc."
                            className="form-control mb-3"
                            name="searchText"
                            value={ searchText }
                            onChange={ handleInputChange }
                            autoComplete="off" />
                        <div className="d-grid gap-2">
                            <button 
                                type="submit" 
                                className="btn btn-success w-block">
                                    Buscar Heroe
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>
                    { heroesSearch.length > 0 && (
                        
                        heroesSearch.map( hero => (
                            <div key={ hero.id } className="mb-3">
                                <HeroCard hero={ hero } />
                            </div>
                            ))
                      )
                    }
                    { q === '' 
                        ? ( <div className="alert alert-info text-center">Busca un héroe</div> )
                        : q !== '' && (heroesSearch.length === 0) && (
                            <div className="alert alert-info text-center">
                                No se encontraron resultados de <span className="fw-bold">{ q }</span>
                            </div>
                        )  
                    }
  
                </div>
            </div>
        </>
    )
}

export default SearchScreen