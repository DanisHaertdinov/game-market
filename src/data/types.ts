export interface GameShortInfo {
    id: number;
    title: string;
    developer?: string;
    released?: string;
    price?: number;
    restrictions?: {
        minAge?: number;
    };
}

export interface GameInfo extends GameShortInfo {
    description?: string;
}

export interface UserShortInfo {
    id: number;
    name: string;
    email: string;
    age?: number;
}

export interface UserInfo extends UserShortInfo {
    friendIds?: UserShortInfo['id'][];
}

export interface Purchase {
    game: GameShortInfo;
    userIds?: UserShortInfo['id'][];
    emails?: string[];
    acknowledgeInvite?: boolean;
    acknowledgeInviteAge?: boolean;
}

export enum BuyStatus {
    none,
    inProgress,
    success,
    failed,
}
