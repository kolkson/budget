/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from 'react';
import Wrapper from '../Wrapper';
import './Budget.css';
import { connect } from 'react-redux';
import { fetchTransactions, removeTransaction } from '../../data/actions/budget.actions'
import { fetchParentCategories, fetchAllCategories, removeMainCategory, removeCategory } from '../../data/actions/common.actions';
import AddMainCategory from '../MainCategory/AddMainCategory';
import MainCategory from '../MainCategory';
import AddTransaction from '../AddTransaction';
import Transaction from '../Transaction';
import Chart from '../Chart'
import Pagination from '../Pagination';


function Budget({
    fetchAllCategories, fetchParentCategories,
    allCategories, parentCategories, transactions, fetchTransactions, removeTransaction, removeMainCategory, removeCategory }) {

    useEffect(() => {
        fetchAllCategories();
        fetchParentCategories();
        fetchTransactions();
    }, [fetchAllCategories, fetchParentCategories, fetchTransactions])

    const [selectedItem, setSelectedItem] = useState()

    const deleteMainCategories = (id) => {
        removeMainCategory(id)
    }
    const deleteTransactions = (id) => {
        removeTransaction(id)
    }

    const deleteCategories = (id) => {
        removeCategory(id)
    }


    const [currentPage, setCurrentPage] = useState(1)
    const [transactionsPerPage] = useState(5)

    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const mainCategoriesList = useMemo(() => parentCategories.map(parentCategory => {

        return (
            <>
                <MainCategory
                    parentCategory={parentCategory}
                    transactions={transactions}
                    onClick={setSelectedItem}
                    categories={allCategories}
                    deleteMainCategory={deleteMainCategories}
                    parentCategories={parentCategories}
                />
                {selectedItem === parentCategory.id && <AddTransaction
                    closeAddTransaction={setSelectedItem}
                    categories={allCategories}
                    parentCategory={parentCategory}
                    deleteCategory={deleteCategories}
                />}
            </>)

    }), [allCategories, transactions, parentCategories, selectedItem])

    const transactionsList = useMemo(() => currentTransactions.map(transaction =>
        <Transaction
            transaction={transaction}
            deleteTransaction={deleteTransactions}
            parentCategories={parentCategories}
            parentCategoryTheme={parentCategories.map(parent => parent.theme)}
        />
    ), [transactions, deleteTransactions])


    return (
        <Wrapper>
            <AddMainCategory />
            <div className="mainCategories">
                {mainCategoriesList}
            </div>
            <div className="transactions-container">
                <h2>Historia transakcji:</h2>
                <ul>
                    <li className="transaction-name">Nazwa</li>
                    <li className="transaction-date">Data</li>
                    <li className="transaction-amount">Kwota</li>
                    <li className="transaction-mainCategory">Kategoria</li>
                </ul>
                {transactionsList}
            </div>
            <div>
                <Pagination
                    transactionsPerPage={transactionsPerPage}
                    totalTransactions={transactions.length}
                    paginate={paginate}
                />
            </div>
            <div className="chart">
                <Chart
                    parentCategories={parentCategories}
                    transactions={transactions}
                    parentCategory={parentCategories.map(parentCategory => parentCategory)}
                />
            </div>
        </Wrapper>
    )
}

export default connect(state => {
    return {
        budgetedCategories: state.budget.budgetedCategories,
        allCategories: state.common.allCategories,
        parentCategories: state.common.parentCategories,
        transactions: state.budget.transactions
    }
},
    {
        fetchAllCategories,
        fetchParentCategories,
        fetchTransactions,
        removeTransaction,
        removeMainCategory,
        removeCategory,
    })(Budget)
