import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos([{id: Math.random().toString(), text: text}]);
  }

  return (
    <div className="App">
      {/* A component that adds todos */}
      <NewTodo onAddTodo = {todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
