import { ReactElement } from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import orderListReduser from '../../store/reducers/orderList';

import Cart from './Cart';

const renderWithRedux = (
    ui: ReactElement,
    {
        preloadedState,
        store = configureStore({
            reducer: { orderList: orderListReduser },
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

describe('Cart', () => {
    test('checks initial state', () => {
        renderWithRedux(<Cart />);
        expect(screen.getByText(/My order/i)).toBeInTheDocument();
        expect(screen.getByText('0')).toBeInTheDocument();
        expect(screen.getByText(/0.00/i)).toBeInTheDocument();
    });

    test('not render Cart text', () => {
        renderWithRedux(<Cart cartSmall={true} />);
        expect(screen.queryByText(/My order/i)).toBeNull();
    });

    test('check store state work', () => {
        renderWithRedux(<Cart />, {
            preloadedState: {
                orderList: { orders: [1, 2, 3], fullPrise: 1000 },
            },
        });
        expect(screen.getByText('3')).toBeInTheDocument();
        expect(screen.getByText(/10.00/i)).toBeInTheDocument();
    });
});
