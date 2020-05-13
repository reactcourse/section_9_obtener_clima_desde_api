import React,{useState} from 'react';

const Form = ({search,setSearch,setCheckWeather}) => {

    const [error,setError] =useState(false);

    const {city,country}=search;

    // Evento al ingresar datos
    const handleChange=e=>{
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        }            
        );
        if(city.trim()!==''&&country.trim()!==''){
            setError(false);        
        }
    };

    // Submit del form
    const handleSubmit=e=>{
        e.preventDefault();

        //validar datos
        if(city.trim()===''||country.trim()===''){
            setError(true);
            return;
        }
        setError(false);   

        //Se cambia checkWeather en el principal para que esueEffect se ejecute
        setCheckWeather(true);
           
    };

    return (
        <form 
            onSubmit={handleSubmit}
        >
            {error ?
                <p className='red dark-4 error'>Todos los campos son obligatorios</p>
                :
                null}
            <div className='input-field col s12'>
                <input 
                    type='text'
                    name='city'
                    id='city'
                    onChange={handleChange}
                    value={city}
                />    
                <label htmlFor='city'>City</label>                
            </div>
            <div className='input-field col s12'>            
                <select
                    name='country'
                    id='country'
                    onChange={handleChange}
                    value={country}
                >
                    <option value=''>-- Select Country --</option>   
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor='country'>Country: </label>
            </div>
            <div className='input-field col s12'>
            <input 
                className='waves-effect waves-light btn-large btn-block yellow accent-4'
                type='submit'
                value='Get Weather'
            />

            </div>
            
        </form>
      );
}
 
export default Form;