import { render as rtlRender, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import orderListReduser from '../../store/reducers/orderList';

import Cart from './Cart';

type wrapperType = {
    children: any;
};

const renderWithRedux = (
    ui: JSX.Element,
    {
        preloadedState,
        store = configureStore({
            reducer: { orderList: orderListReduser },

            preloadedState,
        }),
        ...renderOptions
    } = {}
) => {
    const Wrapper = ({ children }: wrapperType) => {
        return <Provider store={store}>{children}</Provider>;
    };

    const renderWrapper: { wrapper: JSX.Element; renderOptions: any } = {
        wrapper: Wrapper,
        ...renderOptions,
    };

    return rtlRender(ui, renderWrapper);
};

describe('Cart', () => {
    it('checks initial state', () => {
        renderWithRedux(<Cart />);
        expect(screen.getByText(/My order/i)).toBeInTheDocument();
        expect(screen.getByText('0')).toBeInTheDocument();
        expect(screen.getByText(/0.00/i)).toBeInTheDocument();
    });

    test('not render Cart text', () => {
        renderWithRedux(<Cart cartSmall={true} />);
        expect(screen.queryByText(/My order/i)).toBeNull();
    });

    it('increments the counter through redux', () => {
        renderWithRedux(<Cart />, {
            preloadedState: {
                orderList: { orders: [1, 2, 3], fullPrise: 1000 },
            },
        });
        expect(screen.getByText('3')).toBeInTheDocument();
        expect(screen.getByText(/10.00/i)).toBeInTheDocument();
    });
});
