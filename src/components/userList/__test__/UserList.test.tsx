import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from '../UserList';

describe("testing UserList component", () =>{
    test('should render username', () => {
        render(<UserList data={[]} />);
        const placeholderText = screen.getByText(/username/i);
        expect(placeholderText).toBeInTheDocument();
    });
    test('should not find testid list', () => {
        render(<UserList data={[]} />);
        const testId =  screen.queryByTestId("list");
        expect(testId).not.toBeInTheDocument();
    });
    test('should render the length of table element 1', () => {
        render(<UserList data={[]} />);
        const inputTextBox =  screen.getAllByRole("table");
        expect(inputTextBox.length).toBe(1);
    });
    test('should render total table th 4', () => {
        render(<UserList data={[]} />);
        const inputTextBox =  screen.getAllByRole("columnheader");
        expect(inputTextBox.length).toBe(4);
    });
})
