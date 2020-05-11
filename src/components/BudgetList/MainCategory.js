import React from 'react'
import './BudgetList.css'

export default function MainCategory({ name, onClick }) {
    return (

        <div className="mainCategory-container">
            <span onClick={onClick} className={name}> {name}</span>
        </div>

    )
}
