import { render, screen } from '@testing-library/react';
import App from './App';

test('<div class="expenses-filter" data-testid="1"><div class="expenses-filter__control"><label>Filter by year</label><select><option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option></select></div></div>', () => {
  render(<App />);
  const linkTag = screen.getAllByTestId("1")
  // const linkElement = screen.getByText(<Expenses items={expenses} />/i);
  expect(linkTag).toBeInTheDocument();
});
