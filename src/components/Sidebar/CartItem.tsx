import React, {useCallback} from 'react';
import {BuyStatus, Purchase} from '../../data/types';
import {PurchaseForm} from '../PurchaseForm/PurchaseForm';
import {GameCard} from '../GameCard/GameCard';
import {Button} from '../Common/Button';
import './CartItem.css';

interface CartItemProps {
    purchase: Purchase;
    onChange: (purchase: Purchase) => void;
    onDelete: (purchase: Purchase) => void;
    buyStatus?: BuyStatus;
}

export function CartItem({purchase, buyStatus, onChange, onDelete}: CartItemProps) {
    const deletePurchase = useCallback(() => onDelete(purchase), [onDelete, purchase])
    return (
        <GameCard game={purchase.game} className="cart-item">
            <Button className="cart-item__delete" onClick={deletePurchase}>&times;</Button>
            <PurchaseForm value={purchase} onChange={onChange} buyStatus={buyStatus} />
        </GameCard>
    );
}
