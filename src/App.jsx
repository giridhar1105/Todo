import { useState } from "react";
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Try Yourself",
      description: "..",
      completed: false
    }
  ]);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  const handleAddTodo = () => {
    if (newTodo.title && newTodo.description) {
      setTodos([...todos, { ...newTodo, completed: false }]);
      setNewTodo({ title: "", description: "" }); // Clear the input fields
    }
  };

  const handleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1 className="title">To-Do List</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Title"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          className="input"
        />
        <input
          type="text"
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({ ...newTodo, description: e.target.value })
          }
          className="input"
        />
        <button
          onClick={handleAddTodo}
          className="add-button"
        >
          Add To-Do
        </button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onComplete={() => handleComplete(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}

function Todo({ todo, onComplete, onDelete }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
      <div className="todo-buttons">
        <button
          onClick={onComplete}
          className={`complete-button ${todo.completed ? "completed" : ""}`}
        >
          {todo.completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button
          onClick={onDelete}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default App;
