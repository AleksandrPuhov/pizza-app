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
        renderWithRedux(<Person />);

        // expect(screen.getByText(/My order/i)).toBeInTheDocument();
        // expect(screen.getByText('0')).toBeInTheDocument();
        // expect(screen.getByText(/0.00/i)).toBeInTheDocument();
    });
    test('render Person small', () => {
        renderWithRedux(<Person personSmall={true} />);
        // expect(screen.queryByText(/My order/i)).toBeNull();
    });
    test('check store state work', () => {
        renderWithRedux(<Person />, {
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
        // expect(screen.getByText('3')).toBeInTheDocument();
        // expect(screen.getByText(/10.00/i)).toBeInTheDocument();
    });
});
