import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkTag = screen.getAllByTestId("new-expense")
  // const linkElement = screen.getByText(<Expenses items={expenses} />/i);
  expect(linkTag).toBeInTheDocument();
});
