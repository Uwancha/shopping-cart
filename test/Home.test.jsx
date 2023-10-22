import { render, screen } from '@testing-library/react';
import Home from '../src/pages/Home';

describe('Home', () => {

  test('renders welcome message', () => {
    render(<Home />);

    expect(screen.getByText('Welcome! Happy Shopping')).toBeInTheDocument();
    expect(screen.getByText('You know you can buy anything here! Well, actually No! This is a Demo!')).toBeInTheDocument(); 
    expect(screen.getByText('But you know what, You don\'t know what you don\'t know')).toBeInTheDocument();
  });

  test('renders call to action', () => {
    render(<Home />);

    expect(screen.getByText('50$ credit when you first register')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Sign Up'})).toBeInTheDocument();
  });

  test('skips rendering image slider', () => {
    render(<Home />);
  });

});