import {Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
// import countries from './countries.json';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import axios from "axios";
import './App.css';

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<CountriesList countries={countries}/>}/>
        <Route path="/:countryId" element={<CountryDetails countries={countries} setCountries={setCountries}/>}/>
      </Routes>
    </div>
  );
}

export default App;
