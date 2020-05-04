import React from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';

function BudgetList({ budgetedCategories, allCategories }) {
    // const budgetedCategoriesByParent = groupBy(budgetedCategories, item =>);
    console.log(budgetedCategories)
    // console.log(budgetedCategoriesByParent)
    return (
        <div>

        </div>
    )
}

export default connect(state => ({
    budgetedCategories: state.budget.budgetedCategories,
    allCategories: state.common.allCategories,
}))(BudgetList)
