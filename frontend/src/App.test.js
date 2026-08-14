import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "@/App";
import { scrollToId } from "@/lib/scroll";

// Mock matchMedia for tests
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver for tests
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: MockIntersectionObserver,
});

describe("Kodeveil Frontend App", () => {
  test("renders main navbar logo and hero headline", () => {
    render(<App />);
    const logoElement = screen.getByTestId("nav-logo");
    expect(logoElement).toBeInTheDocument();

    const headline = screen.getByTestId("hero-headline");
    expect(headline).toBeInTheDocument();
  });

  test("renders mobile menu toggle and opens drawer", () => {
    render(<App />);
    const toggleButton = screen.getByTestId("mobile-menu-toggle");
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);
    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(mobileMenu).toBeInTheDocument();
  });

  test("scrollToId helper executes without crashing", () => {
    window.scrollTo = jest.fn();
    expect(() => scrollToId("home")).not.toThrow();
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });
});
