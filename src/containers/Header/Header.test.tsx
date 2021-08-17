import { ReactElement } from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import personReduser from '../../store/reducers/personReduser';
import orderListReduser from '../../store/reducers/orderList';


import Header from './Header';

const renderWithRedux = (
    ui: ReactElement,
    {
        preloadedState,
        store = configureStore({
            reducer: { orderList: orderListReduser,personReduser: personReduser },
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


describe('Header', () => {

    test('render Logo text', () => {
        renderWithRedux(<Header />);
        expect(screen.getByText(/Pizza Hot/i)).toBeInTheDocument();
    });
});


