import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';
import ToggleableList from '../ToggleableList/ToggleableList';

import MainCategory from '../MainCategory';
import Category from '../Category';





function BudgetList({ budgetedCategories, allCategories, parentCategories, budget }) {


    const budgetedCategoriesByParent = useMemo(() => groupBy(allCategories, item =>
        allCategories.find(category => category.parentCategoryId === item.parentCategory.id).parentCategory.name), [allCategories])


    // const categoriesByParent = allCategories
    //     .filter(category => parentCategories.find(parentCategory => parentCategory.id === category.parentCategoryId))














    // const [selectedItem, setSelectedItem] = useState()





    const listItems = parentCategories.map(parentCategory => (

        <MainCategory
            parentCategory={parentCategory}
            transactions={budget.transactions}
            // onClick={setSelectedItem}
            // isActive={selectedItem === parentCategory.id}
            categories={allCategories}
        />

    ))





    // const listItems = useMemo(() => Object.entries(budgetedCategoriesByParent).map(([parentName, categories]) => ({
    //     id: parentName,
    //     Trigger: ({ onClick }) => (
    //         <MainCategory
    //             name={parentName}
    //             categories={categories}
    //             transactions={budget.transactions}
    //             parentCategories={parentCategories}
    //             onClick={() => {
    //                 onClick(parentName)
    //             }}
    //         />
    //     ),
    //     children:
    //         categories.map(category => {
    //             const name = category.name
    //             return (
    //                 <>
    //                     <Category
    //                         key={category.id}
    //                         name={name}
    //                         item={category}
    //                     />
    //                 </>
    //             )
    //         })


    // })), [budget.transactions, budgetedCategoriesByParent, parentCategories])



    return (
        <>

            <div className="mainCategories">
                {/* <ToggleableList
                    items={listItems} /> */}
                {listItems}
            </div>
        </>
    )
}

export default connect(state => ({
    budgetedCategories: state.budget.budgetedCategories,
    allCategories: state.common.allCategories,
    parentCategories: state.common.parentCategories,
    budget: state.budget.budget
}))(BudgetList)
