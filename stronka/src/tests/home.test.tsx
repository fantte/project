import { render, screen } from '@testing-library/react';
import { Home } from '../pages/home/home.tsx';

describe('home page', () => {
  test('renderuje nagłówek', () => {
    render(<Home />);

    expect(
      screen.getByText('Strona główna')
    ).toBeInTheDocument();
  });

  test('renderuje opis', () => {
    render(<Home />);

    expect(
      screen.getByText('Witaj w aplikacji')
    ).toBeInTheDocument();
  });
});
