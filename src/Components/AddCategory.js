import React, { useState } from 'react';
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('')
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(inputValue) {
            setCategories( categorie => [inputValue, ...categorie])
            setInputValue('')
        }
            
        
    }   

    return (
        <>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}           
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>

        </>
    );
};

AddCategory.prototype = { //obliga a usar el argumento que se le pase
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;