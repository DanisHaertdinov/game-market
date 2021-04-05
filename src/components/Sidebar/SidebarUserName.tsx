import React, {useContext} from 'react';
import {CurrentUserContext} from '../Context';
import {Loading} from '../Common/Loading';
import './SidebarUserName.css';

export function SidebarUserName() {
    const currentUser = useContext(CurrentUserContext);
    if (!currentUser) {
        return <Loading />;
    }
    return (
        <div className="sidebar__user-name">
            {currentUser.name}
            {currentUser.age ? ` (${currentUser.age} years old)` : null}
        </div>
    );
}
