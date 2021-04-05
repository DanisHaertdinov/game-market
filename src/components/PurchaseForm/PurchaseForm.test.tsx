import React, {ComponentProps, useCallback, useState} from 'react';
import '@testing-library/jest-dom';
import {act, fireEvent, render, within} from '@testing-library/react';
import {PurchaseForm} from './PurchaseForm';
import {APIContext, CurrentUserContext} from '../Context';
import {GAMES, USERS} from '../../data/api/data';
import {Purchase} from '../../data/types';
import {API} from '../../data/api/API';

const api = new API(0);

const USER = USERS[0];
const NO_AGE_USER_ID = 6;   // None
const MIN_AGE_USER_ID = 8;  // 10 years
const MID_AGE_USER_ID = 2;  // 14 years
const MAX_AGE_USER_ID = 18; // 22 years
const FRIEND_IDS = [NO_AGE_USER_ID, MIN_AGE_USER_ID, MID_AGE_USER_ID, MAX_AGE_USER_ID];
const GAME_WITH_AGE_RESTRICTION = GAMES[6];
const GAME_WITHOUT_AGE_RESTRICTION = GAMES[0];
const EMAIL0 = 'e0@mail.com';
const EMAIL1 = 'e1@mail.com';

const PurchaseFormContainer = ({value: initialValue, onChange, ...props}: Partial<ComponentProps<typeof PurchaseForm>> = {}) => {
    const [value, setValue] = useState<Purchase>(initialValue as Purchase);
    const handleChange = useCallback((value) => {
        setValue(value);
        if (onChange) {
            onChange(value);
        }
    }, [onChange]);
    return (
        <APIContext.Provider value={api}>
            <CurrentUserContext.Provider value={USER}>
                <PurchaseForm {...props} value={value} onChange={handleChange} />
            </CurrentUserContext.Provider>
        </APIContext.Provider>
    )
};

const renderPurchaseForm = (props: Partial<ComponentProps<typeof PurchaseForm>> = {}) => {
    if (!props.value) {
        throw new Error('"value" is required');
    }
    return render(<PurchaseFormContainer {...props} />);
};

describe('PurchaseForm', () => {
    const value = {game: GAME_WITH_AGE_RESTRICTION};

    describe('General', () => {
        it('render current user checkbox', async () => {
            const {findByTestId} = renderPurchaseForm({value});

            expect(await findByTestId(`user${USER.id}`)).toBeInTheDocument();
        });

        it('render "(me)" nearby current user', async () => {
            const {findByTestId} = renderPurchaseForm({value});

            expect(await findByTestId(`user${USER.id}Label`)).toHaveTextContent('(me)');
        });

        it('render friend checkboxes', async () => {
            const {findByTestId} = renderPurchaseForm({value});

            for (const id of FRIEND_IDS) {
                expect(await findByTestId(`user${id}`)).toBeInTheDocument();
            }
        });

        it('render invite checkbox without form', async () => {
            const {findByTestId, queryByTestId} = renderPurchaseForm({value});

            expect(await findByTestId(`showInvite`)).toBeInTheDocument();
            expect(queryByTestId(`invite`)).not.toBeInTheDocument();
        });

        it('render single email input (by default)', async () => {
            const {getByTestId} = renderPurchaseForm({value});

            await act(async () => {
                fireEvent.click(getByTestId(`showInvite`));
            });

            expect(within(getByTestId('invite')).getByTestId(`email0`)).toBeInTheDocument();
            expect(within(getByTestId('invite')).queryByTestId(`email1`)).not.toBeInTheDocument();
        });

        it('render second email input after the first is specified', async () => {
            const {getByTestId, findByTestId} = renderPurchaseForm({value});

            await act(async () => {
                fireEvent.click(getByTestId(`showInvite`));
                fireEvent.change(await findByTestId(`email0`), {target: {value: '1'}});
            });

            expect(within(getByTestId('invite')).getByTestId(`email1`)).toBeInTheDocument();
        });

        it('render "acknowledge" checkbox', async () => {
            const {getByTestId} = renderPurchaseForm({value});

            await act(async () => {
                fireEvent.click(getByTestId(`showInvite`));
            });

            expect(within(getByTestId('invite')).getByTestId(`acknowledgeInvite`)).toBeInTheDocument();
        });

        it('allows to enter the first email address', async () => {
            const {findByTestId, getByTestId} = renderPurchaseForm({value});

            await act(async () => {
                fireEvent.click(await findByTestId(`showInvite`));
                fireEvent.change(await findByTestId(`email0`), {target: {value: EMAIL0}});
            });

            expect((getByTestId(`email0`) as HTMLInputElement).value).toEqual(EMAIL0);
        });

        it('allows to enter two email addresses', async () => {
            const {findByTestId, getByTestId} = renderPurchaseForm({value});

            await act(async () => {
                fireEvent.click(await findByTestId(`showInvite`));
                fireEvent.change(await findByTestId(`email0`), {target: {value: EMAIL0}});
                fireEvent.change(await findByTestId(`email1`), {target: {value: EMAIL1}});
            });

            expect((getByTestId(`email0`) as HTMLInputElement).value).toEqual(EMAIL0);
            expect((getByTestId(`email1`) as HTMLInputElement).value).toEqual(EMAIL1);
        });

        it('returns emails', async () => {
            const onChange = jest.fn();
            const {findByTestId} = renderPurchaseForm({value, onChange});

            await act(async () => {
                fireEvent.click(await findByTestId(`showInvite`));
                fireEvent.change(await findByTestId(`email0`), {target: {value: EMAIL0}});
            });

            expect(onChange).toBeCalledWith({...value, emails: [EMAIL0]});

            await act(async () => {
                fireEvent.change(await findByTestId(`email1`), {target: {value: EMAIL1}});
            });

            expect(onChange).toBeCalledWith({...value, emails: [EMAIL0, EMAIL1]});
        });

        it('returns "acknowledge" value', async () => {
            const onChange = jest.fn();
            const {findByTestId} = renderPurchaseForm({value, onChange});

            await act(async () => {
                fireEvent.click(await findByTestId(`showInvite`));
                fireEvent.click(await findByTestId(`acknowledgeInvite`));
            });

            expect(onChange).toBeCalledWith({...value, acknowledgeInvite: true});

            await act(async () => {
                fireEvent.click(await findByTestId(`acknowledgeInvite`));
            });

            expect(onChange).toBeCalledWith({...value, acknowledgeInvite: false});
        });

        it('resets invite on unselect "invite friends"', async () => {
            const onChange = jest.fn();
            const {findByTestId} = renderPurchaseForm({value, onChange});

            await act(async () => {
                fireEvent.click(await findByTestId(`showInvite`));
                fireEvent.click(await findByTestId(`user${MAX_AGE_USER_ID}`));
                fireEvent.change(await findByTestId(`email0`), {target: {value: EMAIL0}});
                fireEvent.click(await findByTestId(`acknowledgeInvite`));
                fireEvent.click(await findByTestId(`acknowledgeInviteAge`));
            });

            expect(onChange).toBeCalledWith({
                ...value,
                userIds: [MAX_AGE_USER_ID],
                emails: [EMAIL0],
                acknowledgeInvite: true,
                acknowledgeInviteAge: true,
            });

            await act(async () => {
                fireEvent.click(await findByTestId(`showInvite`));
            });

            expect(onChange).toBeCalledWith({
                ...value,
                userIds: [MAX_AGE_USER_ID],
                emails: [],
                acknowledgeInvite: false,
                acknowledgeInviteAge: false,
            });
        });
    });

    describe('Game with age restriction', () => {
        const value = {game: GAME_WITH_AGE_RESTRICTION};

        it('does not allow to select the current user if his age does not match game restrictions', async () => {
            const USER_ID = USER.id;
            const {findByTestId} = renderPurchaseForm({value});

            await act(async () => {
                fireEvent.click(await findByTestId(`user${USER_ID}`));
            });

            expect(await findByTestId(`user${USER_ID}`)).not.toBeChecked();
        });

        it('does not allow to select a friend if his age does not specified', async () => {
            const USER_ID = NO_AGE_USER_ID;
            const {findByTestId} = renderPurchaseForm({value});

            await act(async () => {
                fireEvent.click(await findByTestId(`user${USER_ID}`));
            });

            expect(await findByTestId(`user${USER_ID}`)).not.toBeChecked();
        });

        it('does not allow to select a friend if his age does not match game restrictions', async () => {
            const USER_ID = MIN_AGE_USER_ID;
            const {findByTestId} = renderPurchaseForm({value});

            await act(async () => {
                fireEvent.click(await findByTestId(`user${USER_ID}`));
            });

            expect(await findByTestId(`user${USER_ID}`)).not.toBeChecked();
        });

        it('allow to select a friend if his age match game restrictions', async () => {
            const USER_ID = MAX_AGE_USER_ID;
            const {findByTestId} = renderPurchaseForm({value});

            await act(async () => {
                fireEvent.click(await findByTestId(`user${USER_ID}`));
            });

            expect(await findByTestId(`user${USER_ID}`)).toBeChecked();
        });

        it('render "incorrect age" disclaimer nearby current user if his age does not match game restrictions', async () => {
            const USER_ID = USER.id;
            const {findByTestId} = renderPurchaseForm({value});

            await act(async () => {
                fireEvent.click(await findByTestId(`user${USER_ID}`));
            });

            expect(await findByTestId(`user${USER_ID}incorrectAge`)).toBeInTheDocument();
        });

        it('render "incorrect age" disclaimer nearby friend if his age does not match game restrictions', async () => {
            const USER_ID = MIN_AGE_USER_ID;
            const {findByTestId} = renderPurchaseForm({value});

            await act(async () => {
                fireEvent.click(await findByTestId(`user${USER_ID}`));
            });

            expect(await findByTestId(`user${USER_ID}incorrectAge`)).toBeInTheDocument();
        });

        it('render "age not specified" disclaimer nearby friend if his age does not specified', async () => {
            const USER_ID = NO_AGE_USER_ID;
            const {findByTestId} = renderPurchaseForm({value});

            await act(async () => {
                fireEvent.click(await findByTestId(`user${USER_ID}`));
            });

            expect(await findByTestId(`user${USER_ID}noAge`)).toBeInTheDocument();
        });

        it('do not render any disclaimers nearby current user if his age is match game restrictions (by default)', async () => {
            const USER_ID = USER.id;
            const {getByTestId, queryByTestId} = renderPurchaseForm({value});

            await act(async () => {});

            expect(getByTestId(`user${USER_ID}`)).toBeInTheDocument();
            expect(queryByTestId(`user${USER_ID}noAge`)).not.toBeInTheDocument();
            expect(queryByTestId(`user${USER_ID}incorrectAge`)).not.toBeInTheDocument();
        });

        it('do not render any disclaimers nearby friend if his age is match game restrictions (by default)', async () => {
            const USER_ID = MAX_AGE_USER_ID;
            const {findByTestId, queryByTestId} = renderPurchaseForm({value});

            await act(async () => {
                fireEvent.click(await findByTestId(`user${USER_ID}`));
            });

            expect(queryByTestId(`user${USER_ID}noAge`)).not.toBeInTheDocument();
            expect(queryByTestId(`user${USER_ID}incorrectAge`)).not.toBeInTheDocument();
        });

        it('render "acknowledge age" checkbox', async () => {
            const {getByTestId} = renderPurchaseForm({value});

            await act(async () => {
                fireEvent.click(getByTestId(`showInvite`));
            });

            expect(within(getByTestId('invite')).getByTestId(`acknowledgeInviteAge`)).toBeInTheDocument();
        });

        it('returns selectable users', async () => {
            const onChange = jest.fn();
            const {findByTestId} = renderPurchaseForm({value, onChange});

            await act(async () => {
                fireEvent.click(await findByTestId(`user${USER.id}`));
            });

            expect(onChange).not.toBeCalled();

            await act(async () => {
                fireEvent.click(await findByTestId(`user${NO_AGE_USER_ID}`));
            });

            expect(onChange).not.toBeCalled();

            await act(async () => {
                fireEvent.click(await findByTestId(`user${MIN_AGE_USER_ID}`));
            });

            expect(onChange).not.toBeCalled();

            await act(async () => {
                fireEvent.click(await findByTestId(`user${MID_AGE_USER_ID}`));
            });

            expect(onChange).toBeCalledWith({...value, userIds: [MID_AGE_USER_ID]});

            await act(async () => {
                fireEvent.click(await findByTestId(`user${MAX_AGE_USER_ID}`));
            });

            expect(onChange).toBeCalledWith({...value, userIds: [MID_AGE_USER_ID, MAX_AGE_USER_ID]});
        });

        it('returns selectable users and emails', async () => {
            const USER_IDS = [USER.id, ...FRIEND_IDS];
            const onChange = jest.fn();
            const {findByTestId} = renderPurchaseForm({value, onChange});

            await act(async () => {
                for (let USER_ID of USER_IDS) {
                    fireEvent.click(await findByTestId(`user${USER_ID}`));
                }
                fireEvent.click(await findByTestId(`showInvite`));
                fireEvent.change(await findByTestId(`email0`), {target: {value: EMAIL0}});
                fireEvent.change(await findByTestId(`email1`), {target: {value: EMAIL1}});
            });

            expect(onChange).toBeCalledWith({
                ...value,
                userIds: [MID_AGE_USER_ID, MAX_AGE_USER_ID],
                emails: [EMAIL0, EMAIL1],
            });
        });

        it('returns "acknowledge age" value', async () => {
            const onChange = jest.fn();
            const {findByTestId} = renderPurchaseForm({value, onChange});

            await act(async () => {
                fireEvent.click(await findByTestId(`showInvite`));
                fireEvent.click(await findByTestId(`acknowledgeInviteAge`));
            });

            expect(onChange).toBeCalledWith({...value, acknowledgeInviteAge: true});

            await act(async () => {
                fireEvent.click(await findByTestId(`acknowledgeInviteAge`));
            });

            expect(onChange).toBeCalledWith({...value, acknowledgeInviteAge: false});
        });
    });

    describe('Game without age restriction', () => {
        const value = {game: GAME_WITHOUT_AGE_RESTRICTION};

        it('allow to select all users', async () => {
            const USER_IDS = [USER.id, ...FRIEND_IDS];
            const onChange = jest.fn();
            const {findByTestId} = renderPurchaseForm({value, onChange});

            await act(async () => {
                for (let USER_ID of USER_IDS) {
                    fireEvent.click(await findByTestId(`user${USER_ID}`));
                }
            });

            expect(onChange).toBeCalledWith({...value, userIds: USER_IDS});
        });

        it('do not render any disclaimers nearby users', async () => {
            const USER_IDS = [USER.id, ...FRIEND_IDS];
            const {findByTestId, queryByTestId} = renderPurchaseForm({value});

            await act(async () => {
                for (let USER_ID of USER_IDS) {
                    fireEvent.click(await findByTestId(`user${USER_ID}`));
                }
            });

            USER_IDS.forEach((USER_ID) => {
                expect(queryByTestId(`user${USER_ID}noAge`)).not.toBeInTheDocument();
                expect(queryByTestId(`user${USER_ID}incorrectAge`)).not.toBeInTheDocument();
            });
        });

        it('do not render "acknowledge age" checkbox', async () => {
            const {getByTestId} = renderPurchaseForm({value});

            await act(async () => {
                fireEvent.click(getByTestId(`showInvite`));
            });

            expect(within(getByTestId('invite')).getByTestId(`acknowledgeInvite`)).toBeInTheDocument();
            expect(within(getByTestId('invite')).queryByTestId(`acknowledgeInviteAge`)).not.toBeInTheDocument();
        });
    });
});
