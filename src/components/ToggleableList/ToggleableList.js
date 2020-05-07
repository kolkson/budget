import React, { useState } from 'react';

const Item = ({ item, onClickHandler, isActive }) => (

    <div>
        <item.Trigger
            onClick={onClickHandler} />
        {isActive && item.children}

    </div>
)

export default function ToggleableList({ items }) {
    const [selectedItem, setSelectedItem] = useState('string')

    return (
        <>
            {items.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    onClickHandler={setSelectedItem}
                    isActive={setSelectedItem === item.id}
                />
            ))}
        </>
    )
}
