import React from 'react';
import './App.css';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import TodoCard from './components/TodoCard';

const appContainer = css`
  background-color: #2a2a2a;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <div css={appContainer} className="App">
      <TodoCard />
    </div>
  );
}

export default App;
