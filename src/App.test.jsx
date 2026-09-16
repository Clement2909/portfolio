import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the French portfolio home page', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /accueil/i })).toBeInTheDocument();
});
