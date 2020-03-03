import React, { useState } from 'react';
import useGlobalState from '../../globalState';
import './dataForm.css'
import { useFormInput } from '../hooks/formInput';
import {addColor,addItem } from '../../actions/actions';



function DataForm() {
    let dispatch = useGlobalState()[1];
    //reuse of custom hooks
    const [inputValue, setInputValue] = useFormInput();
    return (
        <div className="data-form">

            <input type='text' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            <button
                className="submit-btn"
                type='submit'
                onClick={() => {
                    
                    const item = inputValue;
                    dispatch(addItem(item));
                    setInputValue('');
                }} > Add Item </button>
            <button
                className="submit-btn_color"
                type='submit'
                onClick={() => {
                    const color = inputValue;
                    dispatch(addColor(color));
                    setInputValue('');
                }} > Add Color </button>
        </div>
    )
}
export default DataForm;