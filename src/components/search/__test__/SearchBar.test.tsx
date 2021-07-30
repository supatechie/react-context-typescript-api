import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';

const handleSearch = jest.fn()

describe("testing SearchBar component", () =>{
    test('renders Search by placeholder', async () => {
        render(<SearchBar handleSearch={handleSearch} />);
        const placeholderText = await screen.findByPlaceholderText(/Search by/i);
        expect(placeholderText).toBeInTheDocument();
    });
    test('should not find testid search', () => {
        render(<SearchBar handleSearch={handleSearch} />);
        const testId =  screen.queryByTestId("search");
        expect(testId).not.toBeInTheDocument();
    });
    test('should render title search user', () => {
        render(<SearchBar handleSearch={handleSearch} />);
        const inputTextBox =  screen.getByTitle("Search user");
        expect(inputTextBox).toBeInTheDocument();
    });
    test('should render the length of input element 1', () => {
        render(<SearchBar handleSearch={handleSearch} />);
        const inputTextBox =  screen.getAllByRole("searchbox");
        expect(inputTextBox.length).toBe(1);
    });
    
})
