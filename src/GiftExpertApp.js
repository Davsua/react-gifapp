import React, { useState } from 'react';
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

const GiftExpertApp = () => {
    
    const [categories, setCategories] = useState(["Pokemon"])

    /*const handleAdd = () => {
        let newShow = "Super Campeones"

        setCategories( [...categories, newShow] )
    }*/

    return (
        <div>
            <h2>GiftExpertApp</h2>
            <AddCategory 
                setCategories={setCategories}
            />
            <hr />

            <ol>
                {
                categories.map(category =>( 
                    < GifGrid 
                        key={category}
                        category={category} 
                    
                    />
                ))
                }
            </ol>
        </div>
    );
};

export default GiftExpertApp;