import { render, screen } from '@testing-library/react';
import App from './App';

test('renders movie search app', () => {
  render(<App />);
  const headingElement = screen.getByText(/MovieTime/i);
  expect(headingElement).toBeInTheDocument();
});
