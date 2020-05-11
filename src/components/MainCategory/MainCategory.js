import React, { useMemo } from 'react'
import './MainCategory.css'

export default function MainCategory({ name, onClick, categories }) {
    const mainCategoryValue = useMemo(() => {
        const budgeted = (() => {
            try {
                return categories.reduce((acc, category) => acc + category.amount, 0)
            } catch (error) {
                return null
            }
        })
    }, [])
    return (

        <div className="mainCategory-container">
            <span onClick={onClick} className={name}> {name}</span>
        </div>
    )
}
