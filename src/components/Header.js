import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            { props.title && <p>{ props.subtitle }</p> }
        </header>
    )
}

Header.defaultProps = {
    title: 'Organizer App',
    subtitle: 'Now you know what to do!'
}

export default Header;