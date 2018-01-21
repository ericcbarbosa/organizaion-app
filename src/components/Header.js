import React from 'react';

const Header = (props) => {
    return (
        <header className="header">
            <div>
                <h1 className="header__title">{ props.title }</h1>
                { props.title && <p className="header__subtitle">{ props.subtitle }</p> }
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Organizer App',
    subtitle: 'Now you know what to do!'
}

export default Header;