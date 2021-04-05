import React from 'react';
import {BuyStatus, Purchase} from '../../data/types';
import {Button} from '../Common/Button';
import {Price} from '../Common/Price';
import './SidebarActions.css';

interface SidebarActionsProps {
    purchases: Purchase[];
    buyStatus: BuyStatus;
    onPurchaseChange?: (purchase: Purchase) => void,
    onPurchaseDelete?: (purchase: Purchase) => void,
    onBuy?: () => void,
    className?: string;
}

export function SidebarActions({purchases, buyStatus, onBuy}: SidebarActionsProps) {
    if (!purchases.length) {
        return null;
    }
    const price = purchases.reduce((sum, {game: {price = 0}, userIds, emails}) => {
        if (price > 0) {
            const amount = (userIds?.length || 0) + (emails?.filter(Boolean)?.length || 0);
            return sum + price * amount;
        }
        return sum;
    }, 0);
    return (
        <div className="sidebar__actions">
            <Button onClick={onBuy} disabled={buyStatus === BuyStatus.inProgress}>
                Buy game{purchases.length > 1 ? `s` : null}
                {price > 0 ? <span> for <Price>{price}</Price></span> : null}
            </Button>
        </div>
    );
}
