import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';
function App() {

  const [search, setSearch] = useState({
    city: '',
    country: ''
  });
  const [result, setResult] = useState({});
  const [checkWeather, setCheckWeather] = useState(false);
  const [error,setError] = useState(false);
  
  const { city, country } = search;

  useEffect(() => { 

    const queryApi= async ()=>{
      const appId = '9dcdb0717e9bebe70327e4d92dd599e7';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
      const resultFromApi= await fetch(url);
      const data = await resultFromApi.json();
      setResult(data);      
      setCheckWeather(false);
      //Detecta si hubo errores en la consulta
      if (result.cod === "404") {
        setError(true);
      } else {
        setError(false);
      }

    }

   if(checkWeather){       
      queryApi();
   }
   //eslint-disable-next-line
  }, [checkWeather,city,country]);

  let componente;

  if(error){
    componente = <Error mensaje='No hay resultado' />
  }else{
    componente= <Weather
      resultado={result}
    />
  }

  return (
    <Fragment>
      <Header
        title='Weather React App'
      />

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form
                search={search}
                setSearch={setSearch}
                setCheckWeather={setCheckWeather}
              />
            </div>
            <div className='col m6 s12'>
              {componente}
          </div>
          </div>
        </div>

      </div>
    </Fragment>


  );
}

export default App;
