import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from '../Users';
import { act } from 'react-dom/test-utils';

describe("testing Users component", () =>{
    beforeAll(() => {
        act(() =>{
            render(<Users />);
        })
    })
    test('should render component', async() => {
        const mounted = await screen.findByTitle('users')
        expect(mounted).toBeInTheDocument();
    });
})
