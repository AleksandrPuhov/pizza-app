import { render, screen } from '@testing-library/react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import App from './App';

describe('App', () => {
    test('renders App component', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(screen.getByText(/Pizza Hot/i)).toBeInTheDocument();
    });
});
