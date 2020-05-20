import React, { useMemo } from 'react';
import './Transaction.css';
import formatDate from '../../themes'
// import { removeTransaction } from '../../data/actions/budget.actions';
import { connect } from 'react-redux';


function Transaction({ transaction, parentCategories, id, onClick }) {



    return (
        <div className="transactions">
            <ul>
                <li>{transaction.description} {transaction.theme ?
                    <span>({transaction.theme}) </span> : null} </li>
                <li></li>
                <li>{transaction.amount}</li>
                <li><button onClick={() => onClick(id)}>usuń </button></li>
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


    })(Transaction)