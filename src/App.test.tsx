import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("testing App component", () =>{
    test('should render component', async () => {
        render(<App />);
        const mounted = await screen.findByText(/React/i);
        expect(mounted).toBeInTheDocument();
    });
    test('should render find element by test id', async () => {
        render(<App />);
        const divElement = await screen.findByTestId("app");
        expect(divElement).toBeInTheDocument();
    });
})
