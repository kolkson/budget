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



function BudgetList({ budgetedCategories, allCategories, mainCategories }) {
    const budgetedCategoriesByParent = useMemo(() =>
        groupBy(
            mainCategories,
            item => allCategories.find(category => category.mainCategoryId === item.id).parentCategory.name)
        , [allCategories, mainCategories])

    const listItems = Object.entries(budgetedCategoriesByParent).map(([mainCategoryName, categories]) => ({
        id: mainCategoryName,
        Trigger: ({ onClick }) => (
            <MainCategory
                name={mainCategoryName}
            />
        )
    }))
    // const listItems = useMemo(
    //     () =>
    //         Object.entries(budgetedCategoriesByParent).map(([parentName, categories]) => ({
    //             id: parentName,
    //             Trigger: ({ onClick }) => (
    //                 <MainCategory
    //                     name={parentName}
    //                     onClick={() => {
    //                         onClick(parentName);
    //                     }}
    //                     categories={categories}
    //                 />
    //             ),
    //             children: categories.map(budgetedCategory => {
    //                 const { name } = allCategories.find(category => category.id === budgetedCategory.categoryId)
    //                 return (
    //                     <Category
    //                         key={budgetedCategory.id}
    //                         name={name}
    //                         item={budgetedCategory}

    //                     />
    //                 )
    //             })
    //         })), [allCategories, budgetedCategoriesByParent])

    return (
        <div className="mainCategories">
            <ToggleableList
                items={listItems} />
            {/* {mainCategories.map(category => {
                return <MainCategory
                    key={category.id}
                    id={category.id}
                    category={category}
                    handlerClick={handlerClick}
                />
            })} */}


        </div>
    )
}

export default connect(state => ({
    budgetedCategories: state.budget.budgetedCategories,
    allCategories: state.common.allCategories,
    mainCategories: state.common.mainCategories
}))(BudgetList)
