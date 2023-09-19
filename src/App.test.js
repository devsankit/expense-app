import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from "react-test-renderer"

test('Expense Tracker App', () => {
  render(<App />);
  const [linkTag] = screen.getAllByTestId("App")
  expect(linkTag).toBeInTheDocument();
});
