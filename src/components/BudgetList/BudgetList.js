import React from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';

function BudgetList({ budgetedCategories, allCategories }) {
    const budgetedCategoriesByParent = groupBy(
        budgetedCategories,
        item => allCategories.find(category => category.id === item.categoryId).mainCategory.name)
    console.log(budgetedCategories)
    console.log(budgetedCategoriesByParent)
    console.log(allCategories)
    return (
        <div>

        </div>
    )
}

export default connect(state => ({
    budgetedCategories: state.budget.budgetedCategories,
    allCategories: state.common.allCategories,
}))(BudgetList)
