import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const GifGridItem = ( { id, title, url } ) => {
    return (
        <div className="card my-3 animate__animated animate__fadeInDownBig" style={{width: "18rem"}}>
            <img src={ url } alt={ title } className="card-img-top" />
            <div className="card-body">
            <h5 className="card-title"> { title } </h5>
            <h6 className="card-subtitle mb-2 text-muted"> id: { id } </h6>
            </div>
        </div>
    )
}
