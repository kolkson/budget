import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { noop } from 'lodash';
import themes from '../../themes/themes';
import { connect } from 'react-redux';
import { addMainCategory } from '../../data/actions/common.actions'
import './AddMainCategory.css'

const required = value => (value ? undefined : 'To pole jest wymagane')


function AddMainCategory({ onSubmit = noop, values, addMainCategory }) {
    const [modal, openModal] = useState(false)

    const mainCategoryColors = themes.map(theme => (
        <option className={theme.color} key={theme.id} value={theme.color}>{theme.color}</option >
    ))

    const handleOpenModal = () => {
        openModal(true)
    }

    const handleCloseModal = () => {
        openModal(false)
    }

    const handleAddMainCategory = ((values) => {
        addMainCategory({
            data: values,
        })
        handleCloseModal()
    })


    return (
        <>
            <div className="add-MainCategory">
                <button className="addCategory" onClick={handleOpenModal}>Dodaj główną kategorię</button>
            </div>
            {modal &&
                <div className="addMainCateory-modal">
                    <div className="add-MainCategory-modal">
                        <span className="close" onClick={handleCloseModal}>zamknij</span>
                        <Form
                            onSubmit={handleAddMainCategory}
                            render={({ handleSubmit, form, submitting, pristine, values }) => (
                                <form onSubmit={handleSubmit}>
                                    <Field name="name" validate={required}>
                                        {({ input, meta }) => (
                                            <div className="mainCategory-name">

                                                <input {...input} type="text" placeholder="Nazwa" />
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>

                                    <Field name="theme" validate={required}>
                                        {({ input, meta }) => (
                                            <div className="mainCategory-theme">
                                                <select {...input} >
                                                    <optgroup label="kolor">
                                                        {mainCategoryColors}
                                                    </optgroup>
                                                </select>
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>

                                    <div>
                                        <button className="add" type="submit" disabled={submitting}>
                                            Dodaj
                                </button>
                                    </div>
                                </form>
                            )}
                        />
                    </div>
                </div>
            }
        </>
    )
}

export default connect(state => {
    return {
        // budget: state.budget.budget
    }
},
    {
        addMainCategory
    })(AddMainCategory)
