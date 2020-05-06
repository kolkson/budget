import React from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';

const Item = ({ category }) => (
    <div></div>
)

function BudgetList({ budgetedCategories, allCategories }) {
    const object = Object.entries(allCategories).map(category => {
        return (
            <li>{category.name}</li>
        )
    })

    return (
        <ul>
            {object}
        </ul>
    )
}

export default connect(state => ({
    budgetedCategories: state.budget.budgetedCategories,
    allCategories: state.common.allCategories,
}))(BudgetList)
