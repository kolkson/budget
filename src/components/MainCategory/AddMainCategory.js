import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { noop } from 'lodash'
import themes from './themes'

const required = value => (value ? undefined : 'To pole jest wymagane')


export default function AddMainCategory({ onSubmit = noop, values }) {
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



    return (
        <>
            <div className="add-MainCategory">
                <button onClick={handleOpenModal}>Dodaj kategorię</button>
            </div>
            {modal && <div className="add-MainCategory-modal">
                <span className="close" onClick={handleCloseModal}>zamknij</span>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="name" validate={required}>
                                {({ input, meta }) => (
                                    <div className="category-name">

                                        <input {...input} type="text" placeholder="Description" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>

                            <Field name="theme" validate={required}>
                                {({ input, meta }) => (
                                    <div className="mainCategory-theme">
                                        <select {...input}>
                                            {mainCategoryColors}
                                        </select>
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>

                            <div>
                                <button type="submit" disabled={submitting}>
                                    Dodaj
                                </button>

                            </div>
                        </form>
                    )}
                />
            </div>

            }
        </>
    )
}
