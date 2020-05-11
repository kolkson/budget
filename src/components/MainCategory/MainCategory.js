import React, { useMemo } from 'react'
import './MainCategory.css'

export default function MainCategory({ name, onClick, categories, transactions, parentCategories }) {
    console.log(categories)
    // const mainCategoryLeftValue = useMemo(() => {
    //     const mainCategoryValue = transactions
    //         .filter(transaction => {
    //             return categories.find(category => category.categoryd === transaction.categoryId)
    //         })
    //     const spentParentCategory = mainCategoryValue
    //         .reduce((acc, transaction) => acc + transaction.amount, 0)
    //     const total = spentParentCategory

    //     return total
    // }, [categories, transactions])



    return (

        <div className="mainCategory-container">
            {/* <span onClick={onClick} className={name}> {name}<br />{mainCategoryLeftValue}</span> */}

        </div>
    )
}
