import React, {useContext, useEffect, useState} from 'react';
import {BuyStatus, Purchase, UserInfo} from '../../data/types';
import {APIContext, CurrentUserContext} from "../Context";

interface PurchaseFormProps {
    value: Purchase;
    onChange: (value: Purchase) => void;
    buyStatus?: BuyStatus;
}

export function PurchaseForm({value, buyStatus, onChange}: PurchaseFormProps) {
    const api = useContext(APIContext);
    const currentUser = useContext(CurrentUserContext);
    const {game, emails=[], userIds=[]} = value

    const [users, setUsers] = useState<UserInfo[]>([]);
    const [isInviteFormShown, setInviteFormShown] = useState(false);

    useEffect( () => {
        if (currentUser !== undefined) {
            api.users.fetchFriends({userId: currentUser[`id`]}).then((users) => {
                setUsers([currentUser, ...users]);
            });
        }
    }, [currentUser]);

    const handleUserCheckboxChange = (evt: React.ChangeEvent<HTMLInputElement>, user: UserInfo) => {
        const isChecked = evt.target.checked;
        let ids = [...userIds]
        if (isChecked) {
            ids.push(user.id)
        }
        else {
            const idIndex = ids.findIndex((id) => id === user.id)
            ids.splice(idIndex, 1);
        }

        onChange({...value, userIds: ids})
    }

    const handleInviteCheckboxChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = evt.target.checked;

        if (!isChecked) {
            onChange({...value, emails: [], acknowledgeInvite: false, acknowledgeInviteAge: false})
        }

        setInviteFormShown(isChecked);
    };

    const handleInviteInputChange = (evt: React.ChangeEvent<HTMLInputElement>, id:number) => {
        const email = evt.target.value;
        const newEmails = [...emails];

        newEmails[id] = email;

        onChange({...value, emails: newEmails})
    };

    const handleAcknowledgeInviteChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = evt.target.checked;
        const checkboxName = evt.target.name;

        onChange({...value, [checkboxName]: isChecked});
    };

    return (
        <form>
            {users.map((user,index) => (
                <label key={user.id} data-testid={`user${user.id}Label`}>
                    <input onChange={(evt) => handleUserCheckboxChange(evt, user)} type="checkbox" data-testid={`user${user.id}`}/>
                    {user.name}{index === 0 && (` (me)`)}
                </label>
            ))}
            <label>
                <input type="checkbox" checked={isInviteFormShown} onChange={handleInviteCheckboxChange} data-testid={`showInvite`}/>
                Invite friends
            </label>
            {isInviteFormShown
            &&
            <div data-testid={`invite`}>
                {[...emails, ``].map((email,index) => (
                    <label key={`email${index}`}>
                        <input type="email" value={email} data-testid={`email${index}`} onChange={(evt) => handleInviteInputChange(evt, index)}/>
                    </label>
                ))}
                <label>
                    <input type="checkbox" name="acknowledgeInvite" data-testid="acknowledgeInvite" required onChange={handleAcknowledgeInviteChange}/>
                    I acknowledge that Game Market invitation emails will be sent to specified emails.
                    The game will become available to the person only onсe the registration in the Game Market is completed.
                </label>
                {game.restrictions
                    &&
                    <label>
                        <input type="checkbox" name="acknowledgeInviteAge" data-testid="acknowledgeInviteAge" required onChange={handleAcknowledgeInviteChange}/>
                        I acknowledge that the game has age restriction and might be unavailable if a person is under required age.
                    </label>}
            </div>}
        </form>
    );
}
