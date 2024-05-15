import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';





describe('Login test display Email and Password', () => {
  it('Email and Password', () => {
    render(<Login />);
    const myPassword = screen.getByText(/Welcome/);
    expect(myPassword).toBeInTheDocument();
 
  });
});

describe('Login test debug', () => {
  it('renders a heading', () => {
    render(<Login />);
    screen.debug();
  });
});

describe('value for Email and Password by ID', () => {
  it('Email and Password', () => {
    render(<Login />);
    screen.debug();
    screen.getByPlaceholderText("email");
    screen.getByPlaceholderText("Password");
  });
});

describe('test inserts Email', () => {
  it('Email', () => {
    render(<Login />);
    fireEvent.change(screen.getByTestId("email"), { target: { value: 'naer@gmail.com' } });
    expect(screen.getByTestId("email")).toBeInTheDocument ('value', 'naer@gmail.com');
  });
});

describe('test inserts Password', () => {
  it('Password', () => {
    render(<Login />);
    fireEvent.change(screen.getByTestId("Password"), { target: { value: 'klasd5666' } });
    expect(screen.getByTestId("Password")).toBeInTheDocument ('value', 'klasd5666');
  });
});
