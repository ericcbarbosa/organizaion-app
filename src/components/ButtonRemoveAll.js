import React from 'react';

const ButtonRemoveAll = (props) => (
    <button className="btn btn--danger" type="button" onClick={ props.handleRemoveAll } >
        { props.children }
    </button>
);

export default ButtonRemoveAll;