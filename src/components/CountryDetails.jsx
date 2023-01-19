import {useParams, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from "axios";



function CountryDetails(props){
    const {countryId} = useParams();
    const [foundCountry, setFoundCountry] = useState("")

    useEffect(() => {
        axios
          .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
          .then((response) => {
            setFoundCountry(response.data);
          });
      }, []);

      console.log(foundCountry.alpha3Code)

    return(
       
        <div>
        {!foundCountry && <h1>loading...</h1>}

        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Country Name</th>
      <th scope="col">Capital</th>
      <th scope="col">Area</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {foundCountry && <th scope="row">{foundCountry.name.official}</th>}
      <td>{foundCountry.capital}</td>
      <td>{foundCountry.area}km<sup>2</sup></td>
    </tr>
  </tbody>
</table>
        <Link to={'/'}>Back</Link>
        </div>
    )

    
};

export default CountryDetails;