import React, { Fragment, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';
import ToggleableList from '../ToggleableList/ToggleableList';
import './BudgetList.css'

import MainCategory from './MainCategory';
import Category from './Category';

// const MainCategory = ({ category, handlerClick, id }) => (
//     <div>
//         <span onClick={() => handlerClick(id)} className={category.name}>{category.name}</span>
//     </div>
// )



function BudgetList({ budgetedCategories, allCategories, parentCategories }) {
    const budgetedCategoriesByParent = groupBy(allCategories, item =>
        allCategories.find(category => category.parentCategoryId === item.parentCategory.id).parentCategory.name)





    const listItems = Object.entries(budgetedCategoriesByParent).map(([parentName, categories]) => ({
        id: parentName,
        Trigger: ({ onClick }) => (
            <MainCategory
                name={parentName}
                onClick={() => {
                    onClick(parentName)
                }}
            />
        ),
        children:

            categories.map(category => {
                const name = category.name
                return (
                    <>
                        <Category
                            key={category.id}
                            name={name}
                            item={category}
                        />
                    </>
                )
            })


    }))



    return (
        <div className="mainCategories">
            <ToggleableList
                items={listItems} />
        </div>
    )
}

export default connect(state => ({
    budgetedCategories: state.budget.budgetedCategories,
    allCategories: state.common.allCategories,
    parentCategories: state.common.parentCategories
}))(BudgetList)
