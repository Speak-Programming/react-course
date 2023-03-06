import { render, screen } from '@testing-library/react';
import App from './App';
import { isPalindrom } from './functions/functions';


test('Speak programming react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Speak programming/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check if word si polindrom',()=>{
const result1 = isPalindrom('cata');
const result12 = isPalindrom('ata');
expect(result1).toEqual(false)
expect(result12).toEqual(true)
})