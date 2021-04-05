import React, {useCallback} from 'react';
import './Checkbox.css';

interface CheckboxProps {
    children: any;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    className?: string;
    testId?: string;
}

export function Checkbox({children, checked, disabled, onChange, className, testId}: CheckboxProps) {
    const handleChange = useCallback(() => onChange && onChange(!checked), [checked, onChange]);
    return (
        <div className={`checkbox ${disabled ? 'checkbox--disabled' : ''} ${className || ''}`}>
            <label className="checkbox__label">
                <input
                    className="checkbox__input"
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                    disabled={disabled}
                    data-testid={testId}
                />
                <span className="checkbox__label-content" data-testid={`${testId}Label`}>
                    {children}
                </span>
            </label>
        </div>
    );
}
