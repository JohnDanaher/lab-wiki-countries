import {Link} from 'react-router-dom';

function CountriesList(props){
    const {countries} = props;

    return(
        <div>

        {countries && countries.map(country => {
            return(
                <div key={country.alpha3Code}>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="ugh"/>
                <h3><Link to={`/${country.alpha3Code}`}>{country.name.common}</Link></h3>
                </div>
            )
        })}
        </div>
    )
};

export default CountriesList;