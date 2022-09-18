import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim() <= 1) return;
        onNewCategory(setInputValue.trim())
    }



    return (
        <form  onSubmit={handleSubmit}>
            <input
                autoComplete='true'
                type="text"
                placeholder='Buscar gif'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
