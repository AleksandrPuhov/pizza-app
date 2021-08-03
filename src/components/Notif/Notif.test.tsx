import { render, screen } from '@testing-library/react';
import Notif from './Notif';

describe('Notif', () => {
    test('render Notif number', () => {
        render(<Notif num={3} />);
        expect(screen.getByText(/3/i)).toBeInTheDocument();
    });

    test('not render Notif if num = 0', () => {
        render(<Notif num={0} />);
        expect(screen.queryByText(/0/i)).toBeNull();
    });

    test('not render Notif if num = -2', () => {
        render(<Notif num={-2} />);
        expect(screen.queryByText(/-2/i)).toBeNull();
    });
});
