import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

import 'bootstrap/dist/css/bootstrap.min.css';


export const GifFrid = ({category}) => {

    //peticiones http
    const { data:images, loading } = useFetchGifs( category );

    //getGif();

    return (
        <>
        <h3>{category}</h3>        
        { 
        /* Elemento loading */
            loading //si está cargando
            && //haz
            //esto
            <div className="d-flex justify-content-center animate__animated animate__flash">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>         
            </div>
        }    
        <div className="card-columns">
            {
                images.map(gif =>(
                    <GifGridItem
                        key={ gif.id } 
                        {...gif}
                    />
                ))
            }
        </div>
        </>
    )
}
