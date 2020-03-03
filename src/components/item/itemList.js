import React from 'react';
import Item from './item';
import useGlobalState from '../../globalState';
import './item.css'


function ItemList(props) {
    const [state] = useGlobalState();
    
    return (
        <div className="item-list">
            <ul >
                {state.items.map((item) => {
                    return <Item value={item} />
                })}
            </ul>
        </div>

    )
}

export default ItemList;