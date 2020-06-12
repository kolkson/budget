import React, { useMemo } from 'react';
import './Transaction.css';
import formatDate from '../../themes'
import { connect } from 'react-redux';
import { BsFillTrashFill } from 'react-icons/bs';



function Transaction({ transaction, parentCategories, id, deleteTransaction }) {
    const transactionTheme = useMemo(() => {
        try {
            return parentCategories.find(parent => parent.id === transaction.parentCategoryId).theme

        } catch (error) {
            return null

        }
    }, [parentCategories, transaction])
    const transactionParentCategoryName = useMemo(() => {
        try {
            return parentCategories.find(parent => parent.id === transaction.parentCategoryId).name
        } catch (error) {
            return null
        }
    }, [parentCategories, transaction])
    return (
        <div className="transactions">
            <ul>
                <li className="transaction-name-second">{transaction.description} {transaction.category && <span className="transaction-categoryName">({transaction.category})</span>}</li>
                <li className="transaction-date">{formatDate(transaction.date)}</li>
                <li className="transaction-amount-digits">{transaction.amount} zł</li>
                <li className={`${transactionTheme} transaction-mainCategory-name`} >
                    {transactionParentCategoryName}</li>
                <BsFillTrashFill className="transaction-delete" onClick={() => deleteTransaction(transaction.id)} />
            </ul>
        </div>
    )
}

export default connect(state => {
    return {
    }
},
    {


    })(Transaction)