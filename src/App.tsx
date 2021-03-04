import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { InitialState } from './types/default';

const App: React.FC = function () {
  const test = useSelector((state: InitialState) => state.test);

  return (
    <div className='App'>
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
      <div>{test}</div>
    </div>
  );
};

export default App;
