import { render, fireEvent } from '@testing-library/react';
import { CircularButton } from '../src/CircularButton';

describe('CircularButton', () => {
    it('renders with default props', () => {
        const { getByTestId } = render(
            <CircularButton icon={<span>Icon</span>} onClick={() => { }} />
        );
        const button = getByTestId('nav-icon-btn');

        // exists upon rendering
        expect(button).toBeInTheDocument();

        // has default styles applied
        expect(button).toHaveStyle('border-radius: 50%');
        expect(button).toHaveStyle('cursor: pointer');
        expect(button).toHaveStyle('background-color: rgb(255, 255, 255);');
        expect(button).toHaveStyle('color: rgb(0,0,0);');
    });

    it('applies custom className and style', () => {
        const { getByTestId } = render(
            <CircularButton
                icon={<span>Icon</span>}
                onClick={() => { }}
                className="custom-class"
                style={{ backgroundColor: 'red' }}
            />
        );
        const button = getByTestId('nav-icon-btn');
        expect(button.className).toContain('custom-class');
        expect(button).toHaveStyle('background-color: rgb(255, 0, 0);');
    });

    it('applies dark theme styles', () => {
        const { getByTestId } = render(
            <CircularButton icon={<span>Icon</span>} onClick={() => { }} theme="dark" />
        );
        const button = getByTestId('nav-icon-btn');
        expect(button).toHaveStyle('background-color: rgb(0, 0, 0);');
        expect(button).toHaveStyle('color: rgb(255, 255, 255);');
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(
            <CircularButton icon={<span>Icon</span>} onClick={handleClick} />
        );
        const button = getByTestId('nav-icon-btn');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders the provided icon', () => {
        const { getByTestId } = render(
            <CircularButton icon={<span data-testid="icon-span">Icon</span>} onClick={() => { }} />
        );
        const icon = getByTestId('icon-span');
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveTextContent('Icon');
    });
});