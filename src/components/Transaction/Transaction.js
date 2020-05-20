import React, { useMemo } from 'react';
import './Transaction.css';
import formatDate from '../../themes'
import { removeTransaction } from '../../data/actions/budget.actions';
import { connect } from 'react-redux';


function Transaction({ transaction, parentCategories, removeTransaction, id }) {

    const handleRemoveMainCategory = (id) => {
        removeTransaction({
            id: id,
        })
        console.log(id)
    }

    return (
        <div className="transactions">
            <ul>
                <li>{transaction.description} {transaction.theme ?
                    <span>({transaction.theme}) </span> : null} </li>
                <li></li>
                <li>{transaction.amount}</li>
                <li><button onClick={() => handleRemoveMainCategory(transaction.id)}>usuń </button></li>
            </ul>
        </div>
    )
}

export default connect(state => {
    return {
        // budget: state.budget.budget
    }
},
    {

        removeTransaction
    })(Transaction)