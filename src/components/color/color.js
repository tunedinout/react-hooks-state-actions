import React from 'react';

function Color(props) {

    return (
        <div className="color-item" style={{ backgroundColor: props.value }}>
            {(props.value + '').toUpperCase()}
        </div>
    )
}
export default Color;