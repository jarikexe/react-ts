import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { InitialState } from './types/default';

const App: React.FC = function () {
  const test = useSelector((state: InitialState) => state.test);
  const { t } = useTranslation();

  return (
    <div className='App'>
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
      <div>{test}</div>
      <div>{t('title')}</div>
    </div>
  );
};

export default App;
