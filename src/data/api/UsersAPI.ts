import {GenericAPI} from './GenericAPI';
import {USERS} from './data';
import {UserShortInfo} from '../types';

const CURRENT_USER_ID = USERS[Math.floor(Math.random() * 5)]?.id || 0;

export class UsersAPI extends GenericAPI {
    async fetchCurrentUser(): Promise<UserShortInfo> {
        await this.pause();
        // @ts-ignores
        return USERS.find(user => user.id === CURRENT_USER_ID);
    }

    async fetchFriends({userId}: {userId: UserShortInfo['id']}): Promise<UserShortInfo[]> {
        await this.pause(this.delay * 2);
        const friendIds: UserShortInfo['id'][] = [];
        USERS.forEach(user => {
            if (!user.friendIds?.length) {
                return;
            }
            if (user.id === userId) {
                friendIds.push(...user.friendIds);
            } else if (user.friendIds.includes(userId)) {
                friendIds.push(user.id);
            }
        });
        return USERS
            .filter(user => friendIds.includes(user.id))
            .map(({id, name, email, age}) => ({id, name, email, age}));
    }
}
