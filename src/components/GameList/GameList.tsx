import React, {useMemo} from 'react';
import {GameShortInfo, Purchase} from '../../data/types';
import {GameListItem} from './GameListItem';
import {Loading} from '../Common/Loading';
import './GameList.css';

interface GameListProps {
    games?: GameShortInfo[];
    onAddToCart: (game: GameShortInfo) => void;
    purchases: Purchase[];
    className?: string;
}

export function GameList({games, onAddToCart, purchases, className}: GameListProps) {
    const disabled = useMemo(() => {
        const result: Record<GameShortInfo['id'], boolean> = {};
        purchases.forEach((purchase) => {
            result[purchase.game.id] = true;
        })
        return result;
    }, [purchases]);
    return (
        <div className={`game-list ${className || ''}`}>
            {games?.map(game => (
                <GameListItem
                    className="game-list__item"
                    disabled={disabled[game.id]}
                    game={game}
                    onAddToCart={onAddToCart}
                    key={game.id}
                />
            ))}
            {!games && <Loading />}
        </div>
    );
}
