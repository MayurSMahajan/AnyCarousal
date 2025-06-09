// test/Carousel.test.tsx
import { render, screen } from '@testing-library/react';
import { Carousel } from '../src/Carousel';

describe('Carousel', () => {
    it('renders child elements', () => {
        render(
            <Carousel>
                <div data-testid="slide">Slide 1</div>
                <div data-testid="slide">Slide 2</div>
            </Carousel>
        );

        const slides = screen.getAllByTestId('slide');
        expect(slides.length).toBe(2);
        expect(slides[0]).toHaveTextContent('Slide 1');
    });
});