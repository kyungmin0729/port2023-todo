import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/member/TodoTemplate';
import TodoHead from './components/member/TodoHead';
import TodoList from './components/member/TodoList';
import TodoCreate from './components/member/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;
function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
