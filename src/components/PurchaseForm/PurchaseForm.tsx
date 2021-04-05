import React from 'react';
import {BuyStatus, Purchase} from '../../data/types';

interface PurchaseFormProps {
    value: Purchase;
    onChange: (value: Purchase) => void;
    buyStatus?: BuyStatus;
}

export function PurchaseForm({value, buyStatus, onChange}: PurchaseFormProps) {
    return <form>

    </form>;
}
