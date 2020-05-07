import React, { useState } from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';
import ToggleableList from '../ToggleableList/ToggleableList';
import './BudgetList.css'

const MainCategory = ({ category }) => (
    <div><span>{category.name}</span></div>
)

function BudgetList({ budgetedCategories, allCategories, mainCategories }) {
    const [selectedItem, setSelectedItem] = useState('string')


    // const listItems = Object.entries(budgetedCategoriesByParent).map(([parentName, category]) => (

    // <div>{parentName}</div>

    // )
    return (
        <div className="mainCategories">

            {/* <ToggleableList
                items={[]} /> */}
            {mainCategories.map(category => {
                console.log(category)
                return <MainCategory
                    key={category.id}
                    category={category}
                />
            })}
        </div>
    )
}

export default connect(state => ({
    budgetedCategories: state.budget.budgetedCategories,
    allCategories: state.common.allCategories,
    mainCategories: state.common.mainCategories
}))(BudgetList)
