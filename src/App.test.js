import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("todo list header is rendered", () => {
  render(<App />)
  let element = screen.getByText(/todo list/)
  expect(element).toBeInTheDocument()
})


test("delete button rendered twice", () => {
  render(<App />)
  let element = screen.getAllByText('delete')
  expect(element.length).toBe(2)
})


test("todo list header is rendered", () => {
  render(<App />)
  let element = screen.getAllByText('delete')
  expect(element).toBeInTheDocument()
})

test('input element is displayed ', () => {
  render(<App />)
  let element = screen.getByPlaceholderText('add new task')
  expect(element).toBeInTheDocument()
})
