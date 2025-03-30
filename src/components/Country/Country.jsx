import { useState } from 'react';
import './Country.css'

const Country = ({ country,handleVisitedCountries }) => {
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        /*
            if(visited === true){
              setVisited(false)
            }
            else{
              setVisited(true)
             }
        */
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${visited && 'countryVisited'}`}>
            <img className='img' src={country.flags.png} alt="" />
            <h3>Name : {country.name.common}</h3>
            <button className={visited ? 'btn-visited' : 'btn-not-visited'}  onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;