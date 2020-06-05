import React from 'react';

interface HeaderProps {
    title: string;
    //? antes do : torna ela não obrigatória
}

const Header: React.FC <HeaderProps> = (props) => {
    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;