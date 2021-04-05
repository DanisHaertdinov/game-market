import React, {useEffect, useMemo, useState} from 'react';
import {UserShortInfo} from '../../data/types';
import {API} from '../../data/api/API';
import {APIContext, CurrentUserContext} from '../Context';
import {Market} from '../Market/Market';
import './Application.css';


export function Application() {
    const api = useMemo(() => new API(), []);

    const [currentUser, setCurrentUser] = useState<UserShortInfo>();
    useEffect( () => {
        api.users.fetchCurrentUser().then(setCurrentUser);
    }, [api]);

    return (
        <APIContext.Provider value={api}>
            <CurrentUserContext.Provider value={currentUser}>
                <Market />
            </CurrentUserContext.Provider>
        </APIContext.Provider>
    );
}
