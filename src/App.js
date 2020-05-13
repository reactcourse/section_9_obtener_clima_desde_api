import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  const [search, setSearch] = useState({
    city: '',
    country: ''
  });

  const [checkWeather, setCheckWeather] = useState(false);
  
  const { city, country } = search;

  useEffect(() => { 
   if(checkWeather){
      const queryApi=( ()=>{
        console.log("a consultar ",city,country);
        
      })

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
              2
          </div>
          </div>
        </div>

      </div>
    </Fragment>


  );
}

export default App;
