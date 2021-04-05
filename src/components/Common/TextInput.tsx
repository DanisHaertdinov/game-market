import React, {useCallback, useMemo} from 'react';
import './TextInput.css';

let INDEX = 0;

interface TextInputProps {
    children?: any;
    value?: string;
    disabled?: boolean;
    placeholder?: string;
    onChange?: (value: string) => void;
    className?: string;
    testId?: string;
}

export function TextInput({children, value, disabled, placeholder, onChange, className, testId}: TextInputProps) {
    const handleChange = useCallback((e) => onChange && onChange(e.target.value), [onChange]);
    const id = useMemo(() => `text-input_${Date.now()}_${INDEX}`, []);
    return (
        <div className={`text-input ${disabled ? 'text-input--disabled' : ''} ${className || ''}`}>
            {children ? <label htmlFor={id} className="text-input__label">{children}</label> : null}
            <input
                className="text-input__input"
                id={id}
                type="text"
                value={value}
                onChange={handleChange}
                disabled={disabled}
                placeholder={placeholder}
                data-testid={testId}
            />
        </div>
    );
}
