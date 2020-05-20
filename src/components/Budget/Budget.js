/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from 'react';
import Wrapper from '../Wrapper';
import './Budget.css';
import poland from '../../icons/poland.png'
import unitedKingdom from '../../icons/united-kingdom.png'
import { connect } from 'react-redux';
import { fetchBudget, fetchBudgetedCategories, fetchTransactions, removeTransaction } from '../../data/actions/budget.actions'
import { fetchParentCategories, fetchAllCategories, addMainCategory } from '../../data/actions/common.actions';
import AddMainCategory from '../MainCategory/AddMainCategory';
import MainCategory from '../MainCategory';
import AddTransaction from '../AddTransaction';
import Transaction from '../Transaction'


function Budget({
    fetchBudget, fetchBudgetedCategories, fetchAllCategories, fetchParentCategories, addMainCategory,
    budgetedCategories, allCategories, parentCategories, budget, transactions, fetchTransactions, removeTransaction }) {

    useEffect(() => {
        fetchBudget(1);
        fetchBudgetedCategories(1);
        fetchAllCategories();
        fetchParentCategories();
        fetchTransactions();
    }, [fetchBudget, fetchBudgetedCategories, fetchAllCategories, fetchParentCategories, fetchTransactions])

    const [selectedItem, setSelectedItem] = useState()

    const handleAddMainCategory = (values) => {
        addMainCategory({
            data: values,
        })
    }

    const deleteTransactions = (id) => {
        removeTransaction(id)
        transactions.filter(transaction => transaction.id !== id)
    }





    const mainCategoriesList = useMemo(() => parentCategories.map(parentCategory =>
        <>
            <MainCategory
                parentCategory={parentCategory}
                transactions={budget.transactions}
                onClick={setSelectedItem}
                categories={allCategories}
                id={parentCategory.id}
            />
            {selectedItem === parentCategory.id && <AddTransaction
                onClick={setSelectedItem}
                categories={allCategories}
                parentCategory={parentCategory}
                id={parentCategory.id}
            />}
        </>
    ), [allCategories, budget.transactions, parentCategories, selectedItem])



    const transactionsList = useMemo(() => transactions.map(transaction =>
        <Transaction
            transaction={transaction}
            id={transaction.id}
            onClick={deleteTransactions}
        />
    ), [transactions, deleteTransactions])


    return (
        <Wrapper>
            <div className="langugage-icons">
                <img src={poland} alt="poland" />
                <img src={unitedKingdom} alt="united-kingdom" className="united-kindgom" />
            </div>
            <AddMainCategory
                onSubmit={handleAddMainCategory}
            />
            <div className="mainCategories">
                {mainCategoriesList}
            </div>
            <div className="transactions-container">
                <h2>Historia transakcji:</h2>
                <ul>
                    <li>Nazwa</li>
                    <li>Data</li>
                    <li>Kwota</li>
                    <li>Kategoria</li>
                </ul>
                {transactionsList}
            </div>
        </Wrapper>
    )
}

export default connect(state => {
    return {
        budgetedCategories: state.budget.budgetedCategories,
        allCategories: state.common.allCategories,
        parentCategories: state.common.parentCategories,
        budget: state.budget.budget,
        transactions: state.budget.transactions
    }
},
    {
        fetchBudget,
        fetchBudgetedCategories,
        fetchAllCategories,
        fetchParentCategories,
        fetchTransactions,
        addMainCategory,
        removeTransaction
    })(Budget)
