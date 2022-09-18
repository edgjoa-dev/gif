import React from 'react'
import { useState } from 'react'
import {AddCategory} from '../components/AddCategory'


export const GifApp = () => {

    const [categories, setCategories] = useState(['Thorn', 'Hulk']);

    const onAddCategory = ( newCategory ) => {
        setCategories([newCategory, ...categories  ])
    }

    return (
    <div>

        <h1>Gif App</h1>
        {/* input */}
        <AddCategory
            onNewCategory={onAddCategory}
        />

        {/* listado */}

    </div>
    )
}
