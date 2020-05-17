import React, { useMemo } from 'react'
import './MainCategory.css';
import { groupBy } from 'lodash';
export default function MainCategory({ onClick, key, parentCategory, transactions }) {





    // const mainCategoryLeftValue = useMemo(() => {
    //     const mainCategoryValue = (() => {
    //         try {
    //             return transactions
    //                 .filter(transaction => transaction.name === name)


    //         } catch (error) {
    //             return null;
    //         }

    //     })();



    //     const spentParentCategory = mainCategoryValue
    //         .reduce((acc, transaction) => acc + transaction.amount, 0)
    //     const total = spentParentCategory

    //     return total
    // }, [name, transactions])



    return (

        <div className="mainCategory-container">
            <span onClick={() => onClick(parentCategory.id)} className={parentCategory.theme}>{parentCategory.name} </span>
        </div>

    )
}
