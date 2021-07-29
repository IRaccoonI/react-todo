import Todo from 'components/Todo';
import { ReactElement } from 'react';


import './App.css';

const App = (): ReactElement => {
  return (
    <div className="App">
      <Todo></Todo>
    </div>
  );
};

export default App;
