import React, { useState } from 'react';
import './AddTransaction.css';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { noop } from 'lodash';
import AddCategory from '../AddCategory';
import { addCategory } from '../../data/actions/common.actions';
import { addTransaction } from '../../data/actions/budget.actions';

const required = value => (value ? undefined : 'To pole jest wymagane')


function AddTransaction({ onClick, categories, parentCategory, addCategory, key, addTransaction, id }) {
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



    const handleAddTranasction = (values) => {
        addTransaction({
            parentCategoryId: parentCategory.id,
            data: values,
            color: parentCategory.theme
        })
        closeModal()
    }



    return (
        <>
            <div className="category-container">
                <span onClick={() => onClick()} className="close" >zamknij</span>
                <button onClick={openModal} className="add-category">dodaj kategorię</button>

                <Form
                    onSubmit={handleAddTranasction}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="description" validate={required}>
                                {({ input, meta }) => (
                                    <div className="note">

                                        <input {...input} type="text" placeholder="notatka" className="note-input" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>

                            <Field name="amount" validate={required}>
                                {({ input, meta }) => (
                                    <div className="amount">

                                        <input {...input} type="number" placeholder="kwota" className="amount-input" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>

                            <Field name="theme" >
                                {({ input, meta }) => (
                                    <div className="category-container-second">
                                        {categories.map(category => (
                                            category.parentCategoryId === parentCategory.id &&
                                            <div key={category.id} className="category" >
                                                <input {...input} type="radio" id={category.id} name="hello" value={category.name} />
                                                <label className={parentCategory.theme} htmlFor={category.id}> {category.name}</label>

                                            </div>
                                        ))}
                                    </div>
                                )}
                            </Field>

                            <Field name="date" validate={required}>
                                {({ input, meta }) => (
                                    <div className="date">

                                        <input {...input} type="date" placeholder="date" className="note-input" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>

                            <div>
                                <button type="submit" className="addTransaction-btn" disabled={submitting}>
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
        </>
    )
}

export default connect(state => {
    return {
        // budget: state.budget.budget
    }
},
    {
        addCategory,
        addTransaction,
    })(AddTransaction)
