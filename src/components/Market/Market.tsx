import React, {useCallback, useContext, useEffect, useState} from 'react';
import {BuyStatus, GameShortInfo, Purchase} from '../../data/types';
import {GameList} from '../GameList/GameList';
import {Sidebar} from '../Sidebar/Sidebar';
import {APIContext} from '../Context';
import {Header} from './Header';
import './Market.css';

const SHOW_BUY_STATUS_TIMOUT = 3000;

export function Market() {
    const api = useContext(APIContext);

    const [games, setGames] = useState<GameShortInfo[]>();
    useEffect( () => {
        api.games.fetchGames().then(setGames);
    }, [api]);

    const [buyStatus, setBuyStatus] = useState<BuyStatus>(BuyStatus.none);
    const [buyResultTimer, setBuyResultTimer] = useState<any>();
    const showBuyResult = buyStatus === BuyStatus.success || buyStatus === BuyStatus.failed;
    useEffect(() => {
        if (showBuyResult && !buyResultTimer) {
            setBuyResultTimer(setTimeout(() => {
                setBuyResultTimer(null);
                if (showBuyResult) {
                    setBuyStatus(BuyStatus.none);
                }
            }, SHOW_BUY_STATUS_TIMOUT));
        } else if (!showBuyResult && buyResultTimer) {
            clearTimeout(buyResultTimer);
            setBuyResultTimer(null);
        }
    }, [buyResultTimer, showBuyResult]);

    const [purchases, setPurchases] = useState<Purchase[]>([]);
    const addToCart = useCallback((game: GameShortInfo) => {
        const cartItem: Purchase = {game};
        setPurchases([...purchases, cartItem]);
        setBuyStatus(BuyStatus.none);
    }, [purchases]);
    const updatePurchase = useCallback((purchase: Purchase) => {
        const index = purchases.findIndex(({game}) => game.id === purchase.game.id);
        if (index !== -1 && purchases[index] !== purchase) {
            const newPurchases = [...purchases];
            newPurchases.splice(index, 1, purchase);
            setPurchases(newPurchases);
            setBuyStatus(BuyStatus.none);
        }
    }, [purchases]);
    const deletePurchase = useCallback((purchase: Purchase) => {
        const index = purchases.findIndex(({game}) => game.id === purchase.game.id);
        if (index !== -1) {
            const newPurchases = [...purchases];
            newPurchases.splice(index, 1);
            setPurchases(newPurchases);
            setBuyStatus(BuyStatus.none);
        }
    }, [purchases]);
    const buyGames = useCallback(async () => {
        setBuyStatus(BuyStatus.inProgress);
        try {
            const games = purchases.map(({game, userIds, emails, acknowledgeInvite, acknowledgeInviteAge}) => {
                const _emails = emails?.filter(Boolean);
                if (_emails?.length) {
                    if (!acknowledgeInvite) {
                        throw new Error('Agreement not accepted');
                    }
                    if (game.restrictions?.minAge && !acknowledgeInviteAge) {
                        throw new Error('Agreement not accepted');
                    }
                }
                return {
                    gameId: game.id,
                    userIds,
                    emails: _emails,
                };
            });

            console.log('Send request');
            console.log(JSON.parse(JSON.stringify(games)));
            await api.games.buyGames({games});
            setBuyStatus(BuyStatus.success);
            setPurchases([]);
        } catch (error) {
            setBuyStatus(BuyStatus.failed);
            console.error(error.stack);
        }
    }, [api, purchases]);

    return (
        <div className="market">
            <Header>Game Market</Header>
            <GameList games={games} onAddToCart={addToCart} purchases={purchases} />
            <Sidebar
                purchases={purchases}
                buyStatus={buyStatus}
                onPurchaseChange={updatePurchase}
                onPurchaseDelete={deletePurchase}
                onBuy={buyGames}
            />
        </div>
    );
}
