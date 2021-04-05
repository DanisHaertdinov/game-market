import React, {useCallback} from 'react';
import {GameShortInfo} from '../../data/types';
import {GameCard} from '../GameCard/GameCard';
import {Button} from '../Common/Button';
import './GameListItem.css';

interface GameListItemProps {
    game: GameShortInfo;
    onAddToCart: (game: GameShortInfo) => void;
    className?: string;
    disabled?: boolean;
}

export function GameListItem({game, onAddToCart, className, disabled}: GameListItemProps) {
    const addToCart = useCallback(() => onAddToCart(game), [game, onAddToCart]);
    return (
        <GameCard game={game} className={`game-list-item ${className || ''} ${disabled ? 'game-list-item--disabled' : ''}`}>
            <div className="game-list-item__actions">
                <Button className="game-list0item__action" onClick={addToCart} disabled={disabled}>
                    Add to Cart
                </Button>
            </div>
        </GameCard>
    );
}
