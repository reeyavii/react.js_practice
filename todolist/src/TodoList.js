import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", text: "todo-1", checked: false },
    { id: "2", text: "todo-2", checked: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleCheck = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, { id: Date.now(), text: inputValue, checked: false }]);
    setInputValue("");
  };

  const handleTodoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.checked && "line-through",
              textAlign: "left",
            }}
          >
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => handleCheck(todo.id)}
            />
            {todo.text}
            <button
              onClick={() => handleTodoDelete(todo.id)}
              style={{ marginLeft: "60px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;