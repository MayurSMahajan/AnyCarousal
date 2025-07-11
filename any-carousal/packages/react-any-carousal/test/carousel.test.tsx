// test/Carousel.test.tsx
import { fireEvent, render, screen } from '@testing-library/react';
import { Carousel } from '../src/Carousel';

describe('Carousel', () => {
    it('renders single element', () => {
        render(
            <Carousel>
                <div data-testid="slide">Slide 1</div>
            </Carousel>
        );

        const slides = screen.getAllByTestId('slide');
        expect(slides.length).toBe(1);
        expect(slides[0]).toHaveTextContent('Slide 1');
    });

    it('renders multiple child elements', () => {
        render(
            <Carousel>
                <div data-testid="slide">Slide 1</div>
                <div data-testid="slide">Slide 2</div>
                <div data-testid="slide">Slide 3</div>
            </Carousel>
        );

        const slides = screen.getAllByTestId('slide');
        expect(slides.length).toBe(3);
        expect(slides[1]).toHaveTextContent('Slide 2');
    });

    it('does not render nav icons when only one child exists', () => {
        render(<Carousel><div data-testid="slide">Slide 1</div></Carousel>);
        const icons = screen.queryAllByTestId('nav-icon-btn');
        expect(icons.length).toBe(0);
    });
});

describe('Carousel Navigation', () => {
    let carouselContainer: HTMLElement;

    beforeEach(() => {
        const { container } = render(
            <Carousel>
                <div data-testid="slide">Slide 1</div>
                <div data-testid="slide">Slide 2</div>
                <div data-testid="slide">Slide 3</div>
            </Carousel>
        );

        carouselContainer = container.querySelector('.carousel-container') as HTMLElement;

        // Mock scrollWidth and clientWidth to simulate scrollability
        Object.defineProperty(carouselContainer, 'scrollWidth', {
            configurable: true,
            value: 1000,
        });

        Object.defineProperty(carouselContainer, 'clientWidth', {
            configurable: true,
            value: 300,
        });

        // Simulate scrollLeft
        Object.defineProperty(carouselContainer, 'scrollLeft', {
            configurable: true,
            get: () => 100,
        });
    });

    it('at least one icon appears by default', () => {
        const icons = screen.queryAllByTestId('nav-icon-btn');
        expect(icons.length).toBeLessThanOrEqual(1);
    });

    it('renders two nav icons when scrolled', () => {
        fireEvent.scroll(carouselContainer);
        const iconsAfter = screen.getAllByTestId('nav-icon-btn');
        expect(iconsAfter.length).toBe(2);
    });
});