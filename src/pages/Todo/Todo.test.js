import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Todo from "./index";


describe('Todo', () => {
    test('renders the header', () => {
        render(<Todo />);

        expect(screen.getByText('Todo list')).toBeInTheDocument();
    })
});