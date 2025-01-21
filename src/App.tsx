import React from 'react';
import TodoList from './components/TodoList';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1 className="header">todos</h1>
      <TodoList />
    </div>
  );
};

export default App;
