import React from 'react';
import './Price.css';

export function Price({children}: {children?: number}) {
    if (!children) {
        return (
            <span className="price price__free">
                Free
            </span>
        );
    }
    let dollars: number | string = Math.floor(children / 100);
    let cents: number | string = children - dollars * 100;
    if (cents < 10) {
        cents = '0' + cents;
    }
    return (
        <span className="price">
            <span className="price__currency">$</span>
            <span className="price__major">{dollars}</span>
            <span className="price__minor">.{cents}</span>
        </span>
    );
}
