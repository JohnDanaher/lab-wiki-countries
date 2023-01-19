import {useParams, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from "axios";



function CountryDetails(props){
    const {countries, setCountries} = props;
    const {countryId} = useParams();
    const [foundCountry, setFoundCountry] = useState("")

    useEffect(() => {
        axios
          .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
          .then((response) => {
            setFoundCountry(response.data);
          });
      }, [countryId]);


    return(
        <div>
        {!foundCountry && <h1>You need a map, kiddo</h1>}
        {foundCountry && <h1>{foundCountry.name.official}</h1>}
        <Link to={'/'}>Back</Link>
        </div>
    )
};

export default CountryDetails;