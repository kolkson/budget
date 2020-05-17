import React from 'react';
import { Form, Field } from 'react-final-form';
import { noop } from 'lodash';
import './AddCategory.css'

const required = value => (value ? undefined : 'To pole jest wymagane')

export default function AddCategory({ closeModal, onSubmit = noop }) {
    return (
        <>
            <div className="add-category-modal">
                <span onClick={closeModal} className="close" >zamknij</span>

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

                            <div>
                                <button type="submit" disabled={submitting}>
                                    Dodaj
                                </button>

                            </div>
                        </form>
                    )}
                />

            </div>
        </>

    )
}
