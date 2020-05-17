import React from 'react';
import './Transaction.css';
import formatDate from '../../themes'

export default function Transaction({ transaction }) {
    return (
        <div className="transactions">
            <ul>
                <li>{transaction.description}</li>
                <li>{formatDate(transaction.date)}</li>
                <li>{transaction.amount}</li>
                <li>{transaction.categoryId}</li>
            </ul>
        </div>
    )
}
