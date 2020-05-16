import React, { useEffect } from 'react';
import Wrapper from '../Wrapper';
import './Budget.css';
import poland from '../../icons/poland.png'
import unitedKingdom from '../../icons/united-kingdom.png'
import { connect } from 'react-redux';
import { fetchBudget, fetchBudgetedCategories } from '../../data/actions/budget.actions'
import { fetchParentCategories, fetchAllCategories, addMainCategory } from '../../data/actions/common.actions';
import BudgetList from '../BudgetList/BudgetList'
import AddMainCategory from '../MainCategory/AddMainCategory';


function Budget({ fetchBudget, fetchBudgetedCategories, fetchAllCategories, fetchParentCategories, addMainCategory }) {

    useEffect(() => {
        fetchBudget(1);
        fetchBudgetedCategories(1);
        fetchAllCategories();
        fetchParentCategories();
    }, [fetchBudget, fetchBudgetedCategories, fetchAllCategories, fetchParentCategories])

    const handleAddMainCategory = (values) => {
        console.log(values)
        addMainCategory({
            data: values,
        })
    }

    return (
        <Wrapper>
            <div className="langugage-icons">
                <img src={poland} alt="poland" />
                <img src={unitedKingdom} alt="united-kingdom" className="united-kindgom" />
            </div>
            <AddMainCategory
                onSubmit={handleAddMainCategory}
            />
            <BudgetList />
        </Wrapper>
    )
}

export default connect(state => {
    return {
        // budget: state.budget.budget
    }
},
    {
        fetchBudget,
        fetchBudgetedCategories,
        fetchAllCategories,
        fetchParentCategories,
        addMainCategory
    })(Budget)
