import React from 'react';

function Info(props) {
    const header = props.header;
    const arr = props.arr;

    return (
        <div>
        <h2> {header} </h2>
        <ul>
            {arr.map(item => (<li>{item}</li>))}
        </ul>
        </div>
    );
}

export default Info;
