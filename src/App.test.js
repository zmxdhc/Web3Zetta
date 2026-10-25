// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3Zetta title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3Zetta/i);
    expect(titleElement).toBeInTheDocument();
});
