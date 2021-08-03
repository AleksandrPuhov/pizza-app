import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
    test('render Logo text', () => {
        render(<Logo />);
        expect(screen.getByText(/Pizza Hot/i)).toBeInTheDocument();
    });
    test('not render Cart text', () => {
        render(<Logo logoSmall={true} />);
        expect(screen.queryByText(/Pizza Hot/i)).toBeNull();
    });
});
