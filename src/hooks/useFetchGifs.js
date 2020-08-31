import { useState, useEffect } from "react"
import { getGif } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGif(category)
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                });
            });
    }, [category])//el segundo parametro nos ayuda a que el contenido dentro useEffect solo se ejecute la primera vez que es renderizado

    return state;
}