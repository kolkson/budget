import React from 'react';
import './Category.css';

export default function Category({ name, key }) {
    return (

        <div key={key} className="category">
            <span>{name}</span>
        </div>

    )
}
