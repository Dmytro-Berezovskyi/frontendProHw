import {render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import { configureStore} from "@reduxjs/toolkit";
import todoReducer from '../../store/slices/todoSlice';
import {Provider} from "react-redux";
import { ThemeContext } from '../../context/ThemeContext';

import Todo from "./index";

const mockStore = configureStore({ reducer: { todos: todoReducer } });

describe('Todo', () => {
    test('renders the header', () => {
        render
        (
            <Provider store={mockStore}>
                <ThemeContext.Provider value={{ theme: 'light' }}>
                    (<Todo />)
                </ThemeContext.Provider>
            </Provider>
        )

        expect(screen.getByText('Todo list')).toBeInTheDocument();
    });

    test('adds new todo item', async () => {
        const user = userEvent.setup();

        render
        (
            <Provider store={mockStore}>
                <ThemeContext.Provider value={{ theme: 'light' }}>
                    (<Todo />)
                </ThemeContext.Provider>
            </Provider>
        )

        const inputElement = screen.getByTestId('first-input-todo');
        const buttonElement = screen.getByTestId('first-btn-todo');

        await user.type(inputElement, 'Test Task');
        await user.click(buttonElement);

        expect(screen.getByText('Test Task')).toBeInTheDocument();
    });

    test('Enters the number and letters in input', async () => {
        const user = userEvent.setup();

        render
        (
            <Provider store={mockStore}>
                <ThemeContext.Provider value={{ theme: 'light' }}>
                    (<Todo />)
                </ThemeContext.Provider>
            </Provider>
        )

        const inputElement = screen.getByTestId('first-input-todo');
        const buttonElement = screen.getByTestId('first-btn-todo');

        await user.type(inputElement, 'Test Task 123');
        await user.click(buttonElement);

        expect(screen.getByText('Test Task 123')).toBeInTheDocument();
    });

    test('Enters empty values in input', async () => {
        render
        (
            <Provider store={mockStore}>
                <ThemeContext.Provider value={{ theme: 'light' }}>
                    (<Todo />)
                </ThemeContext.Provider>
            </Provider>
        )

        const inputElement = screen.getByTestId('first-input-todo');
        const buttonElement = screen.getByTestId('first-btn-todo');

        fireEvent.change(inputElement, { target: { value: '' } });
        fireEvent.click(buttonElement);

        await waitFor(() =>
            expect(screen.getByTestId('first-error-msg')).toHaveTextContent('Task must be at least 5 characters!')
        );
    });

    test('toggle todo item', async () => {
        const user = userEvent.setup();

        render
        (
            <Provider store={mockStore}>
                <ThemeContext.Provider value={{ theme: 'light' }}>
                    (<Todo />)
                </ThemeContext.Provider>
            </Provider>
        )

        const inputElement = screen.getByTestId('first-input-todo');
        const buttonElement = screen.getByTestId('first-btn-todo');

        await user.type(inputElement, 'Test Task');
        await user.click(buttonElement);

        const taskElement = screen.getByText('Test Task');
        await user.click(taskElement);

        await waitFor(() =>
            expect(taskElement).toHaveStyle('textDecoration: line-through')
        );
    });
});