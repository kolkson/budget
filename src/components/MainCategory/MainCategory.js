import React, { useMemo } from 'react'
import './MainCategory.css';
import { groupBy } from 'lodash';
import { addCategory } from '../../data/actions/common.actions';
import { connect } from 'react-redux';

function MainCategory({ onClick, key, parentCategory, transactions, id }) {





    // const mainCategoryLeftValue = useMemo(() => {
    //     const mainCategoryValue = (() => {
    //         try {
    //             return transactions
    //                 .filter(transaction => transaction.name === name)


    //         } catch (error) {
    //             return null;
    //         }

    //     })();



    //     const spentParentCategory = mainCategoryValue
    //         .reduce((acc, transaction) => acc + transaction.amount, 0)
    //     const total = spentParentCategory

    //     return total
    // }, [name, transactions])



    return (

        <div className="mainCategory-container">
            <span onClick={() => onClick(parentCategory.id)} className={parentCategory.theme}>
                {parentCategory.name} <button >Usuń kategorię</button></span>

        </div>

    )
}

export default connect(state => {
    return {
        // budget: state.budget.budget
    }
},
    {

    })(MainCategory)