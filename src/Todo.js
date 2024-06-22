import React, { useState } from 'react';

function Todo() {
  // State for managing todo items  
  const [todos, setTodos] = useState([]);
  // State for managing input value
  const [inputValue, setInputValue] = useState('');
  // State for managing index of todo to update
  const [updateIndex, setUpdateIndex] = useState(-1);

  // Function to handle adding todo items
  const addTodo = () => {
    if (inputValue !== '') {
      if (updateIndex !== -1) {
        const updatedTodos = [...todos];
        updatedTodos[updateIndex] = inputValue;
        setTodos(updatedTodos);
        setInputValue('');
        setUpdateIndex(-1); // Reset updateIndex
      } else {
        setTodos([...todos, inputValue]);   
        setInputValue('');
      }
    } else {
      alert('Please enter a value');
    }
  };

  // Function to handle removing todo items
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Function to set updateIndex when update button is clicked
  const setUpdate = (index) => {
    setInputValue(todos[index]);
    setUpdateIndex(index);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>
        {updateIndex !== -1 ? 'Update Todo' : 'Add Todo'}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
            <button onClick={() => setUpdate(index)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
