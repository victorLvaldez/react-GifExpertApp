import React, { useState } from 'react'
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';


const AddCategory = ({setCategories}) => {//1 recibimos el metodo mediante los props

    const [inputValue, setInputrValue] = useState('');

    const handleInputChange = ( e ) =>{
        setInputrValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if(inputValue.trim().length > 2 ) {
            setCategories( categories => [ inputValue ]); //2 llamamos al metodo. [variable => [...variable, valorañadido]] variable es el estado anterior del componente
            setInputrValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                className="form-control" 
                type="text" 
                placeholder="Ingresa categoria" 
                value={ inputValue } 
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
export default AddCategory;