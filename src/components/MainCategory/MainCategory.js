import React, { useMemo } from 'react'
import './MainCategory.css'

export default function MainCategory({ onClick, parentCategory, categories, transactions, parentCategories, children, isActive, value }) {





    return (

        <div className="mainCategory-container">
            <span onClick={() => onClick(parentCategory.id)} className={parentCategory.name}> {parentCategory.name}<br />{value}{isActive && <span>{children}</span>}</span>

        </div>
    )
}
