import { ReactElement } from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import personReduser from '../../store/reducers/personReduser';

import Person from './Person';

const renderWithRedux = (
    ui: ReactElement,
    {
        preloadedState,
        store = configureStore({
            reducer: { personReduser: personReduser },
            preloadedState,
        }),
        ...renderOptions
    }: any = {}
) => {
    const Wrapper: React.FC = ({ children }) => {
        return <Provider store={store}>{children}</Provider>;
    };
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

describe('Person', () => {
    test('checks initial state', () => {
        const {container} = renderWithRedux(<Person />);

        expect(container.querySelector('.Person-bell')).toBeInTheDocument();
        expect(container.querySelector('.Person-avatar__img')).toBeInTheDocument();
        expect(container.querySelector('.Person-avatar__character')).not.toBeInTheDocument();
        expect(container.querySelector('.Person-info')).toBeInTheDocument();
    });
    test('render Person small', () => {
        const {container} = renderWithRedux(<Person  personSmall = {true} />);
        expect(container.querySelector('.Person-bell')).not.toBeInTheDocument();
        expect(container.querySelector('.Person-avatar__img')).not.toBeInTheDocument();
        expect(container.querySelector('.Person-avatar__character')).toBeInTheDocument();
        expect(container.querySelector('.Person-info')).not.toBeInTheDocument();

    });

    test('Person normal check store state work', () => {
        const {container} = renderWithRedux(<Person />, {
            preloadedState: {
                personReduser: {
                    name: 'RandomName',
                    status: 'User123',
                    notificationsNum: 7,
                    avatarBGColor: '#dddfff',
                    avatarTextColor: '#999000',
                },
            },
        });

        expect(screen.getByText('RandomName')).toBeInTheDocument();
        expect(screen.getByText('User123')).toBeInTheDocument();
        expect(screen.getByText('7')).toBeInTheDocument();
        expect(container.querySelector('.Person-avatar')).toHaveStyle(`background-color: #dddfff`)
    });

    test('Person normal check notification = 0', () => {
        const {container} = renderWithRedux(<Person />, {
            preloadedState: {
                personReduser: {
                    name: 'RandomName',
                    status: 'User123',
                    notificationsNum: 0,
                    avatarBGColor: '#dddfff',
                    avatarTextColor: '#999000',
                },
            },
        });

        expect(screen.getByText('RandomName')).toBeInTheDocument();
        expect(screen.getByText('User123')).toBeInTheDocument();
        expect(container.querySelector('.Notif')).not.toBeInTheDocument();
        expect(container.querySelector('.Person-avatar')).toHaveStyle(`background-color: #dddfff`)
    });


    test('Person small check store state work', () => {
        const {container} = renderWithRedux(<Person  personSmall = {true} />, {
            preloadedState: {
                personReduser: {
                    name: 'RandomName',
                    status: 'User123',
                    notificationsNum: 7,
                    avatarBGColor: '#dddfff',
                    avatarTextColor: '#999000',
                },
            },
        });
        expect(screen.queryByText('RandomName')).not.toBeInTheDocument();
        expect(screen.getByText('R')).toBeInTheDocument();
        expect(screen.queryByText('User123')).not.toBeInTheDocument();
        expect(screen.queryByText('7')).not.toBeInTheDocument();
        expect(container.querySelector('.Person-avatar__character')).toHaveStyle(`color: #999000`)
    });
});
