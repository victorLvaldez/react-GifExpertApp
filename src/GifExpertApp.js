import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  AddCategory  from './components/AddCategory';
import { GifFrid } from './components/GifFrid';

const GifExpertApp = () => {

    //const categories = ['Star Wars', 'Harry Potter', 'Lord of the rings']; //esta manera no es recomendada
    const [categories, setCategories] = useState( ['Star Wars'] );

    //const handleAdd = () =>{
      //  setCategories( antiguoEstado => [...antiguoEstado, 'Robocop']); //extraemos la información del estado anterior y le agregamos el nuevo, ver operador spread
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                {
                    categories.map( category => (
                        <GifFrid 
                            key={category}
                            category={ category }
                        />
                    ))
                }
            </ol>

            


        </>
    )
}

export default GifExpertApp;