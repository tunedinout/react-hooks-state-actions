import React from 'react';
import Color from './color';
import './color.css'
import useGlobalState from '../../globalState';

function ColorList(props) {
    const [state] = useGlobalState();

    return (
        <div className="color-list">
            {
                state.colors.map((color) => <Color value={color} />)
            }
        </div>

    );
}
export default ColorList;