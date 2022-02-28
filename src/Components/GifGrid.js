import React from 'react';
import useFetchGifs from '../Hooks/useFetchGifs';
import GifGridItem from './GifGridItem';


const GifGrid = ({category}) => {

    const {loading, data: images} = useFetchGifs(category)


    
    return (
        
        <>
            <h3>{category}</h3>
        
            {loading && <h2 className="animate__flash">Loading...</h2>}

            <div className='card-grid'>
            
            {
                images.map(img => (
                    <GifGridItem
                        key={img.id} 
                        {...img}
                    />
                ))
            }
            
            </div>
        </>
    );
};

export default GifGrid;