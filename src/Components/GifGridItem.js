import React from 'react';

const GifGridItem = ( {id, title, url} ) => { //desestructuracion de props en datos para facilidad de lectura (vienen de gifgrid)
    

    return (
        <div className="animate__animated animate__bounce">
            <div className="Card">
                <img src={url} alt={title} className="img-card"/>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default GifGridItem;