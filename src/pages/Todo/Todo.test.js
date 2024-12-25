import {render, screen, fireEvent, getByPlaceholderText, getByText} from '@testing-library/react';
import '@testing-library/jest-dom';
import Todo from "./index";
import { configureStore} from "@reduxjs/toolkit";
import todoReducer from '../../store/slices/todoSlice';
import { ThemeContext } from '../../context/ThemeContext';
import {Provider} from "react-redux";
import React from "react";

const mockStore = configureStore({ reducer: { todos: todoReducer } });

describe('Todo', () => {
    test('renders the header', () => {
        render
        (
            <Provider store={mockStore}>
                <ThemeContext.Provider value={{ theme: 'light' }}>
                    render(<Todo />)
                </ThemeContext.Provider>
            </Provider>
        )

        expect(screen.getByText('Todo list')).toBeInTheDocument();
    });

    test('adds new todo item', () => {
        render
        (
            <Provider store={mockStore}>
                <ThemeContext.Provider value={{ theme: 'light' }}>
                    render(<Todo />)
                </ThemeContext.Provider>
            </Provider>
        )

        const inputElement = screen.getAllByPlaceholderText('Enter new task');
        const buttonElement = screen.getAllByText('Add Task');

        fireEvent.change(inputElement, {target: {value: 'Test Task'}});
        fireEvent.click(buttonElement);

        expect(screen.getByText('Test Task')).toBeInTheDocument();
    });
});