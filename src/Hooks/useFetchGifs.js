import {useEffect, useState} from 'react';
import {getGif} from '../Helpers/getGifs'

const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        
        getGif(category)
            .then(img => {
                
                setTimeout(() => {
                    setState({
                        data: img,
                        loading: false
                    })
                })
            })

    }, [category])

    
    return state
};

export default useFetchGifs;