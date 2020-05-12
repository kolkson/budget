import React, { Fragment, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';
import ToggleableList from '../ToggleableList/ToggleableList';

import MainCategory from '../MainCategory';
import Category from '../Category';





function BudgetList({ budgetedCategories, allCategories, parentCategories, transactions }) {
    console.log(transactions);

    const [seletectItem, setSelectedItem] = useState();

    // const budgetedCategoriesByParent = useMemo(() => groupBy(allCategories, item =>
    //     allCategories.find(category => category.parentCategoryId === item.parentCategory.id).parentCategory.name), [allCategories])


    const categoriesByParent = allCategories
        .filter(category => parentCategories.find(parentCategory => parentCategory.id === category.parentCategoryId))


    // console.log(categoriesByParent);
    // console.log(budgetedCategoriesByParent);

    // const categories = categoriesByParent.map(category => {
    //     console.log(category)
    // })

    const mainCategoryLeftValue = useMemo(() => {
        // console.log(transactions)
        console.log(parentCategories)
        // const mainCategoryValue = transactions
        //     .filter(transaction => parentCategories.find(parentCategory => parentCategory.id === transaction.categoryId))


        // const spentParentCategory = mainCategoryValue
        //     .reduce((acc, transaction) => acc + transaction.amount, 0)
        // const total = spentParentCategory

        // return total
    }, [transactions, parentCategories])


    const listItems = parentCategories.map(parentCategory => (

        <MainCategory
            key={parentCategory.id}
            parentCategory={parentCategory}
            transactions={transactions}
            onClick={setSelectedItem}
            isActive={seletectItem === parentCategory.id}
            value={mainCategoryLeftValue}
        />

    ))





    // const listItems = useMemo(() => Object.entries(budgetedCategoriesByParent).map(([parentName, categories]) => ({
    //     id: parentName,
    //     Trigger: ({ onClick }) => (
    //         <MainCategory
    //             name={parentName}
    //             categories={allCategories}
    //             transactions={budget.transactions}
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


    // })), [budget.transactions, budgetedCategoriesByParent])



    return (
        <div className="mainCategories">
            {/* <ToggleableList
                items={listItems} /> */}
            {listItems}
        </div>
    )
}

export default connect(state => ({
    budgetedCategories: state.budget.budgetedCategories,
    allCategories: state.common.allCategories,
    parentCategories: state.common.parentCategories,
    transactions: state.budget.budget.transactions
}))(BudgetList)
