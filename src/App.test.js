import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h2', () => {
  render(<ToDoList />);
  const linkElement = screen.getByText(/Add Your to-do's to the list./);
  expect(linkElement).toBeInTheDocument();
});

test("todo list header is rendered", () => {
  render(<App />)
  let element = screen.getByText(/To-Do list/)
  expect(element).toBeInTheDocument()
})


// test("delete button rendered", () => {
//   render(<App />)
//   let element = screen.getAllByText('delete')
//   expect(element.length).toBe(2)
// })


test("todo list header is rendered", () => {
  render(<App />)
  let element = screen.getAllByText('To-Do list')
  expect(element).toBeInTheDocument()
})

test('input element is displayed ', () => {
  render(<ToDoForm />)
  let element = screen.getByPlaceholderText('Add a to-do')
  expect(element).toBeInTheDocument()
})

test('input element is displayed ', () => {
  render(<ToDoForm />)
  let element = screen.getByPlaceholderText('Update Your to-do')
  expect(element).toBeInTheDocument()
})
