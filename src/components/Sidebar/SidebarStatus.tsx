import React from 'react';
import {BuyStatus} from '../../data/types';
import './SidebarStatus.css';

interface SidebarStatusProps {
    buyStatus: BuyStatus;
}

export function SidebarStatus({buyStatus}: SidebarStatusProps) {
    switch (buyStatus) {
        case BuyStatus.failed:
            return (
                <div className="sidebar__status sidebar__status--failed">
                    Purchase failed
                </div>
            );
        case BuyStatus.success:
            return (
                <div className="sidebar__status sidebar__status--success">
                    Thank you for your purchase<br />
                    Have fun!
                </div>
            );
        case BuyStatus.inProgress:
            return (
                <div className="sidebar__status sidebar__status--pending">
                    Buying...
                </div>
            );
        default:
            return null;
    }
}
