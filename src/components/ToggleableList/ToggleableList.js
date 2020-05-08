import React, { Fragment, useState, useEffect } from 'react';

const Item = ({ item, onClickHandler, isActive }) => (
    <div>
        <item.Trigger onClick={onClickHandler} />
        {isActive && item.children}
    </div>
)

function ToggleableList({ items, clickRef }) {
    const [selectedItem, setSelectedItem] = useState('string');

    // useEffect(
    //     () => {
    //         clickRef.current = setSelectedItem;
    //     },
    //     [clickRef, setSelectedItem])

    // clickRef.current = setSelectedItem;
    return (
        <Fragment>
            {items.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    onClickHandler={setSelectedItem}
                    isActive={selectedItem === item.id} />
            ))}
        </Fragment>
    )
}

export default ToggleableList;

