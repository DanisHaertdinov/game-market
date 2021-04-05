import {UsersAPI} from './UsersAPI';
import {GamesAPI} from './GamesAPI';

export class API {
    users: UsersAPI;
    games: GamesAPI;

    constructor(delay = 500) {
        this.users = new UsersAPI(delay);
        this.games = new GamesAPI(delay);
    }
}
