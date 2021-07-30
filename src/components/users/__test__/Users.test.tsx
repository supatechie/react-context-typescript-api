import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from '../Users';

describe("testing Users component", () =>{
    beforeAll(() => {
        render(<Users />);
    })
    test('should render component', () => {
        const mounted = screen.getByText(/Oops/i);
        expect(mounted).toBeInTheDocument();
    });
})
