import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        console.log(country);
        const newVisitedCountries  = [...visitedCountries , country];
        setVisitedCountries(newVisitedCountries)
    }
    return (
        <div >
            <h1>Traveling Countries :{countries.length}</h1>
            <h2>Traveled so far : {visitedCountries.length}</h2>
            <ol>
                {
                    visitedCountries.map(country=> <li> {country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country country={country} handleVisitedCountries={handleVisitedCountries} key={country.cca3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;