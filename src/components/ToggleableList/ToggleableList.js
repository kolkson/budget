import React, { Fragment, useState, useEffect } from 'react';

const Item = ({ item, onClickHandler, isActive, closeContainer }) => (
    <div>
        <item.Trigger onClick={onClickHandler} />
        {isActive ? (<div className="category-container">
            <span className="close" onClick={closeContainer}>zamknij</span><div className="category-container-second">{item.children}</div><button className="add-category">dodaj kategorię</button>
            <div className="note">
                <label htmlFor="note">
                    <input type="text" id="note" placeholder="notatka" className="note-input" />
                </label>
                <label htmlFor="amount">
                    <input type="number" placeholder="kwota" className="amount-input" />
                </label>
            </div> </div>) : null}

    </div >
)

function ToggleableList({ items, clickRef }) {
    const [selectedItem, setSelectedItem] = useState();
    // useEffect(
    //     () => {
    //         clickRef.current = setSelectedItem;
    //     },
    //     [clickRef, setSelectedItem])

    // clickRef.current = setSelectedItem;

    const handleCloseContainer = () => {
        setSelectedItem({
            isActive: false,
        })
    }
    return (
        <Fragment>
            {items.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    onClickHandler={setSelectedItem}
                    isActive={selectedItem === item.id}
                    closeContainer={handleCloseContainer}
                />
            ))}
        </Fragment>
    )
}

export default ToggleableList;

