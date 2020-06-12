import React from 'react';
import './Pagination.css';
export default function Pagination({ transactionsPerPage, totalTransactions, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTransactions / transactionsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="pagination">
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}><a onClick={() => paginate(number)} href="!#">
                        {number}
                    </a></li>
                ))}
            </ul>
        </div>
    )
}
