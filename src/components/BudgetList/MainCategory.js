import React from 'react'
import './BudgetList.css'

export default function MainCategory({ name, onClick }) {
    return (

        <div>
            <span onClick={onClick} className={name}> {name}</span>
        </div>

    )
}
