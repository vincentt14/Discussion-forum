/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

import '@testing-library/jest-dom';

describe('RegisterInput component', () => {
  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText('Name');

    // Action
    await userEvent.type(usernameInput, 'usernametest');

    // Assert
    expect(usernameInput).toHaveValue('usernametest');
  });

  it('should handle username typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(usernameInput, 'usernametest@gmail.com');

    // Assert
    expect(usernameInput).toHaveValue('usernametest@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    await userEvent.type(passwordInput, 'passwordtest');

    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    // arrange
    const mockRegis = jest.fn();
    render(<RegisterInput register={mockRegis} />);
    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'usernametest');
    const usernameInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(usernameInput, 'usernametest@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const loginButton = await screen.getByRole('button', { name: 'Register' });

    // action
    await userEvent.click(loginButton);

    // assert
    expect(mockRegis).toBeCalledWith({
      name: 'usernametest',
      email: 'usernametest@gmail.com',
      password: 'passwordtest',
    });
  });
});
