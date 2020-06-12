import React, { useState } from 'react';
import './AddTransaction.css';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import AddCategory from '../AddCategory';
import { addCategory } from '../../data/actions/common.actions';
import { addTransaction } from '../../data/actions/budget.actions';
import { BsFillTrashFill } from 'react-icons/bs';


const required = value => (value ? undefined : 'To pole jest wymagane')


function AddTransaction({ closeAddTransaction, categories, parentCategory, addCategory, key, addTransaction, id, deleteCategory }) {
    const [modal, setModal] = useState(false)


    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    const handleAddCategory = (values) => {
        addCategory({
            parentCategoryId: parentCategory.id,
            data: values,
        })
        closeModal()
    }



    const handleAddTransaction = (values) => {
        addTransaction({
            parentCategoryId: parentCategory.id,
            data: values,
            color: parentCategory.theme
        })
        closeModal()
        closeAddTransaction()
    }



    return (
        <>
            <div key={id} className="addTransaction-modal">
                <div className="addTransaction-container">
                    <span onClick={() => closeAddTransaction()} className="close" >zamknij</span>
                    <button onClick={openModal} className="add-category addCategory">Dodaj kategorię</button>

                    <Form
                        onSubmit={handleAddTransaction}
                        render={({ handleSubmit, form, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit}>
                                <Field name="description" validate={required}>
                                    {({ input, meta }) => (
                                        <div className="note">

                                            <input {...input} type="text" placeholder="nazwa" className="note-input" />
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>

                                <Field name="amount" validate={required} parse={value => parseFloat(value, 10)}>
                                    {({ input, meta }) => (
                                        <div className="amount">

                                            <input {...input} type="number" placeholder="kwota" className="amount-input" />
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>

                                <Field name="category" >
                                    {({ input, meta }) => (
                                        <div className="categoryList">
                                            {categories.map(category => (
                                                category.parentCategoryId === parentCategory.id &&
                                                <div key={category.id} className="categoryName" >
                                                    <input {...input} type="radio" id={category.id} name="hello" value={category.name} />
                                                    <label className={parentCategory.theme} htmlFor={category.id}> {category.name}</label>
                                                    <BsFillTrashFill className="category-delete" onClick={() => deleteCategory(category.id)} />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </Field>

                                <Field name="date" validate={required}>
                                    {({ input, meta }) => (
                                        <div className="date">

                                            <input {...input} type="date" placeholder="date" className="date-input" />
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>

                                <div className="addTransaction">
                                    <button type="submit" className="addTransaction-btn add" disabled={submitting}>
                                        Dodaj
                                </button>
                                </div>
                            </form>
                        )}
                    />
                    {
                        modal && <AddCategory
                            closeModal={closeModal}
                            onSubmit={handleAddCategory}
                        />
                    }
                </div>
            </div>
        </>
    )
}

export default connect(state => {
    return {
    }
},
    {
        addCategory,
        addTransaction,
    })(AddTransaction)
