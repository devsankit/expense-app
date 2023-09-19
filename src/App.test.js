import { render, screen } from '@testing-library/react';
import App from './App';

test('', () => {
  render(<App />);
  const linkTag = screen.getAllByTestId("1")
  // const linkElement = screen.getByText(<Expenses items={expenses} />/i);
  expect(linkTag).toBeInTheDocument();
});
