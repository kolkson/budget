import React from 'react';
import './Category.css';

export default function Category({ category }) {
    return (

        <div className="category">
            <span>{category.name}</span>
        </div>

    )
}
