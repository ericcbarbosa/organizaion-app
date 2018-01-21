import React from 'react';

const ErrorList = (props) => (
    <ul className="erro-list">
        {
            ( props.errors.length )
            ? props.errors.map(
                (error, index) => (
                    <li key="index" className="message message--warning">
                        { error }
                    </li>
                )
            )
            : ''
        }
    </ul>
);

export default ErrorList;