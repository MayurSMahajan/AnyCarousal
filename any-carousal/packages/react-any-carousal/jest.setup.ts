// jest.setup.ts
import "@testing-library/jest-dom";

// mocking scroll methods for HTMLElement
Object.defineProperty(HTMLElement.prototype, "scrollBy", {
  configurable: true,
  value: jest.fn(),
});

Object.defineProperty(HTMLElement.prototype, "scrollLeft", {
  configurable: true,
  get() {
    return this._scrollLeft || 0;
  },
  set(val) {
    this._scrollLeft = val;
  },
});
