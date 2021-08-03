import { render, screen } from '@testing-library/react';
import Cart from './Cart';

describe('Cart', () => {
    test('render Cart text', () => {
        render(<Cart cartSmall={false} />);
        expect(screen.getByText(/My order/i)).toBeInTheDocument();
    });

    test('not render Cart text', () => {
        render(<Cart cartSmall={true} />);
        expect(screen.queryByText(/My order/i)).toBeNull();
    });
});
