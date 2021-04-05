import {GenericAPI} from './GenericAPI';
import {GAMES, USERS} from './data';
import {EMAIL_REGEX} from '../constants';
import {GameInfo, GameShortInfo, UserShortInfo} from '../types';

export class GamesAPI extends GenericAPI {
    async fetchGames(): Promise<GameShortInfo[]> {
        await this.pause();
        return GAMES
            .sort((a, b) => a.title.localeCompare(b.title))
            .map(({id, title, developer, released, restrictions, price}) => ({id, title, developer, released, restrictions, price}));
    }

    async fetchGame({gameId}: {gameId: GameShortInfo['id']}): Promise<GameInfo | null> {
        await this.pause();
        return GAMES.find((game) => game.id === gameId) || null;
    }

    async buyGames({games}: {games: {gameId: GameShortInfo['id'], userIds?: UserShortInfo['id'][]; emails?: string[]}[]}): Promise<void> {
        await this.pause((games.length + 1) * this.delay);
        if (!games.length) {
            throw new Error('Empty request');
        }
        games.forEach(({gameId, userIds, emails}) => {
            if (!gameId) {
                throw new Error('gameId is not specified');
            }
            if (!userIds?.length && !emails?.length) {
                throw new Error('userIds and emails are not specified');
            }
            const game = GAMES.find((game) => game.id === gameId);
            if (!game) {
                throw new Error('Invalid gameId');
            }
            if (userIds?.length) {
                userIds.forEach((userId) => {
                    const user = USERS.find((user) => user.id === userId);
                    if (!user) {
                        throw new Error('Invalid userIds');
                    }
                    if (game.restrictions?.minAge) {
                        if (!user.age || user.age < game.restrictions.minAge) {
                            throw new Error('Invalid user age');
                        }
                    }
                });
            }
            if (emails?.length) {
                emails.forEach((email) => {
                    if (!EMAIL_REGEX.test(email)) {
                        throw new Error('Invalid email');
                    }
                });
            }
        });
    }
}
