import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

interface HeaderProps {
    children: any;
    className?: string;
}

export function Header({children, className}: HeaderProps) {
    return (
        <div className={`header ${className || ''}`}>
            <h1 className="header__content">
                <img src={logo} alt="Game Market" className="header__logo" />
                {children}
            </h1>
        </div>
    );
}
