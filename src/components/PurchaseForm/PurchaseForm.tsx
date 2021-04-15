import React, {useContext, useEffect, useState} from 'react';
import {BuyStatus, Purchase, UserInfo} from '../../data/types';
import {APIContext, CurrentUserContext} from '../Context';
import {Checkbox} from '../Common/Checkbox';
import {TextInput} from '../Common/TextInput';
import './PurchaseForm.css';

interface PurchaseFormProps {
    value: Purchase;
    onChange: (value: Purchase) => void;
    buyStatus?: BuyStatus;
}

interface UserDisclaimer {
    id: number;
    type: number;
}

enum AgeDisclaimerTypes {
    incorrectAge,
    noAge,
    ok
}

const AgeDisclaimerTexts = new Map<number, string>([
    [AgeDisclaimerTypes.incorrectAge, 'The person is not allowed to get the game due to age restriction'],
    [AgeDisclaimerTypes.noAge, 'Cannot be selected unless user\'s age is specified, because the game has age restriction']
]);

export function PurchaseForm({value, buyStatus, onChange}: PurchaseFormProps) {
    const api = useContext(APIContext);
    const currentUser = useContext(CurrentUserContext);
    const {game, emails = [], userIds = [], acknowledgeInviteAge = false, acknowledgeInvite = false} = value;

    const [users, setUsers] = useState<UserInfo[]>([]);
    const [isInviteFormShown, setInviteFormShown] = useState(false);
    const [userDisclaimer, setUserDisclaimer] = useState<UserDisclaimer>()

    useEffect( () => {
        if (currentUser !== undefined) {
            api.users.fetchFriends({userId: currentUser[`id`]}).then((users) => {
                const sortedUsers = users.sort((userA, userB) => userA.name.localeCompare(userB.name))

                setUsers([currentUser, ...sortedUsers]);
            });
        }
    }, [currentUser, api]);

    const validateUserAge = (minAge:number | undefined, userAge:number | undefined):{isValid: boolean, type: number} => {
        if (typeof minAge === `undefined`) {
            return {isValid: true, type: AgeDisclaimerTypes.ok};
        }

        if (typeof userAge === `undefined`) {
            return {isValid: false, type: AgeDisclaimerTypes.noAge};
        }

        if (userAge < minAge) {
            return {isValid: false, type: AgeDisclaimerTypes.incorrectAge};
        }

        return {isValid: true, type: AgeDisclaimerTypes.ok};
    };

    const handleUserCheckboxChange = (isChecked:boolean, user: UserInfo) => {
        const {isValid, type} = validateUserAge(game.restrictions?.minAge, user.age);

        if (!isValid) {
            setUserDisclaimer({id: user.id, type: type});
            return
        }

        const idIndex = userIds.findIndex((id) => id === user.id);

        let ids = [...userIds]

        if (isChecked) {
            ids = [...ids, user.id]
        }

        if (!isChecked && idIndex !== -1) {
            ids.splice(idIndex, 1)
        }

        onChange({...value, userIds: ids});
    };

    const handleInviteCheckboxChange = (isChecked:boolean) => {
        if (!isChecked) {
            onChange({...value, emails: [], acknowledgeInvite: false, acknowledgeInviteAge: false});
        }

        setInviteFormShown(isChecked);
    };

    const handleInviteInputChange = (email:string, id:number) => {
        const newEmails = [...emails];

        newEmails[id] = email;

        onChange({...value, emails: newEmails});
    };

    const handleAcknowledgeInviteChange = (isChecked:boolean, checkboxName:string) => {
        onChange({...value, [checkboxName]: isChecked});
    };

    return (
        <form>
            {users.map((user,index) => (
                <React.Fragment key={`fragment${user.id}`}>
                    {(userDisclaimer?.id === user.id)
                    &&
                    <span className="disclaimer"
                          key={`disclaimer${user.id}`}
                          data-testid={`user${user.id}${AgeDisclaimerTypes[userDisclaimer.type]}`}
                    >
                        {AgeDisclaimerTexts.get(userDisclaimer.type)}
                    </span>}
                    <Checkbox
                        key={user.id}
                        testId={`user${user.id}`}
                        disabled={buyStatus === BuyStatus.inProgress}
                        onChange={(isChecked) => handleUserCheckboxChange(isChecked, user)}
                        checked={userIds.includes(user.id)}
                    >
                        {(index === 0) ? `${user.name} (me)` : user.name}
                    </Checkbox>
                </React.Fragment>
            ))}
            <Checkbox
                checked={isInviteFormShown}
                onChange={handleInviteCheckboxChange}
                testId={'showInvite'}
                disabled={buyStatus === BuyStatus.inProgress}
            >
                Invite friends
            </Checkbox>
            {isInviteFormShown
            &&
            <div data-testid={`invite`}>
                {[...emails, ``].map((email,index) => (
                    <TextInput
                        key={`email${index}`}
                        value={email}
                        disabled={buyStatus === BuyStatus.inProgress}
                        testId={`email${index}`}
                        onChange={(value) => handleInviteInputChange(value, index)}
                    />
                ))}
                <Checkbox
                    onChange={(isChecked) => handleAcknowledgeInviteChange(isChecked, 'acknowledgeInvite')}
                    testId={'acknowledgeInvite'}
                    disabled={buyStatus === BuyStatus.inProgress}
                    checked={acknowledgeInvite}
                >
                    I acknowledge that Game Market invitation emails will be sent to specified emails.
                    The game will become available to the person only onсe the registration in the Game Market is completed.
                </Checkbox>
                {
                    game.restrictions?.minAge
                    &&
                    <Checkbox
                        onChange={(isChecked) => handleAcknowledgeInviteChange(isChecked, 'acknowledgeInviteAge')}
                        testId={'acknowledgeInviteAge'}
                        disabled={buyStatus === BuyStatus.inProgress}
                        checked={acknowledgeInviteAge}
                    >
                        I acknowledge that the game has age restriction and might be unavailable if a person is under required age.
                    </Checkbox>
                }
            </div>}
        </form>
    );
}
