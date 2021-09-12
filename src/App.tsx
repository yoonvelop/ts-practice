import React from 'react';
import { Route } from 'react-router-dom';
import Join from './pages/Join';

function App() {
  return (
    <div className="App">
     <Route path="/" component={Join} />
    </div>
  );
}

export default App;
