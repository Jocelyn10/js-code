import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('should start in red state', () => {
  render(<App />);
  //find an element with a role of button and text
  const button = screen.getByRole('button', {name: 'Change to blue'})
  //expect the background color to be red
  expect(button).toHaveStyle({backgroundColor: 'red'})
});

test('should change color to blue on click', () => {
  render(<App />);
  //find an element with a role of button and text
  const button = screen.getByRole('button', {name: 'Change to blue'})
  //click button
  fireEvent.click(button);
  //expect the background color to be blue after click
  expect(button).toHaveStyle({backgroundColor: 'blue'})
  //
  expect(button.textContent).toBe('Change to red')
})