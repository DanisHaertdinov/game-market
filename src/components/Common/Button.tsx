import React from 'react';
import './Button.css';

interface ButtonProps {
    children: any;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

export function Button({children, onClick, disabled, className}: ButtonProps) {
    return (
        <button className={`button ${className || ''}`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}
