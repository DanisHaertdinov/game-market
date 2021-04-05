import React from 'react';
import {GameShortInfo} from '../../data/types';
import {Price} from '../Common/Price';
import './GameCard.css';

interface GameCardProps {
    game: GameShortInfo;
    info?: any;
    children?: any;
    className?: string;
}

export function GameCard({game, info, children, className}: GameCardProps) {
    return (
        <div className={`game-card ${className || ''}`}>
            <div className="game-card__title">
                <span>
                    {game.title}
                </span>
                <span className="game-card__extra">
                    {info || <Price>{game.price}</Price>}
                </span>
            </div>
            <div className="game-card__description">
                {game.developer}, {game.released}{game.restrictions?.minAge ? `, ${game.restrictions?.minAge}+` : null}
            </div>
            {children && <div className="game-card__content">{children}</div>}
        </div>
    );
}
