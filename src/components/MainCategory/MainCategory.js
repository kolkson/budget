import React, { useMemo } from 'react';
import './MainCategory.css';
import { BsFillTrashFill } from 'react-icons/bs';



export default function MainCategory({ onClick, parentCategory, transactions, deleteMainCategory }) {

    const mainCategoryLeftValue = useMemo(() => {

        const mainCategoryValue = (() => {
            try {
                return transactions.filter(transaction => transaction.parentCategoryId === parentCategory.id)

            } catch (error) {
                return null;
            }
        })();


        try {
            const spentParentCategory = mainCategoryValue
                .reduce((acc, transaction) => acc + transaction.amount, 0)

            const total = spentParentCategory
            return total
        } catch (error) {
            return null
        }
    }, [transactions, parentCategory.id])


    return (
        <>
            <div className="mainCategory-container">

                <span onClick={() => onClick(parentCategory.id)} className={parentCategory.theme}>
                    {parentCategory.name.length < 12 ? <p>{parentCategory.name}</p> : <p className="mainCategoryName-small">{parentCategory.name}</p>}
                    <p className="value">{mainCategoryLeftValue} zł</p></span>
                <BsFillTrashFill className="mainCategory-delete" onClick={() => deleteMainCategory(parentCategory.id)} />
            </div>
        </>
    )
}

