import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {

  const [search, setSearch] = useState({
    city: '',
    country: ''
  });
  const [result, setResult] = useState({});

  const [checkWeather, setCheckWeather] = useState(false);
  
  const { city, country } = search;

  useEffect(() => { 

    const queryApi= async ()=>{
      const appId = '9dcdb0717e9bebe70327e4d92dd599e7';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
      const result= await fetch(url);
      const data = await result.json();
      setResult(data);      

    }

   if(checkWeather){ 
      console.log('A consultar');
      queryApi();

   }

  }, [checkWeather,city,country]);


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
              <Weather 
                resultado={result}
              />
          </div>
          </div>
        </div>

      </div>
    </Fragment>


  );
}

export default App;
