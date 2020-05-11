import React from 'react';
import './Category.css';

export default function Category({ name, item }) {
    return (

        <div className="category">
            <span>{name}</span>
            <p>{item.parentCategory.budget}</p>
        </div>

    )
}
