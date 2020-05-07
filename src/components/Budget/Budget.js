import React, { useEffect } from 'react';
import Wrapper from '../Wrapper';
import './Budget.css';
import poland from '../../icons/poland.png'
import unitedKingdom from '../../icons/united-kingdom.png'
import { connect } from 'react-redux';
import { fetchBudget, fetchBudgetedCategories } from '../../data/actions/budget.actions'
import { fetchMainCategories, fetchAllCategories } from '../../data/actions/common.actions';
import BudgetList from '../BudgetList'


function Budget({ fetchBudget, fetchBudgetedCategories, fetchAllCategories, fetchMainCategories }) {
    useEffect(() => {
        fetchBudget(1);
        fetchBudgetedCategories(1);
        fetchAllCategories();
        fetchMainCategories();
    }, [fetchBudget, fetchBudgetedCategories, fetchAllCategories, fetchMainCategories])
    return (
        <Wrapper>
            <div className="langugage-icons">
                <img src={poland} alt="poland" />
                <img src={unitedKingdom} alt="united-kingdom" className="united-kindgom" />
            </div>
            <BudgetList />
        </Wrapper>
    )
}

export default connect(state => {
    return {
        budget: state.budget.budget
    }
},
    {
        fetchBudget,
        fetchBudgetedCategories,
        fetchAllCategories,
        fetchMainCategories
    })(Budget)
