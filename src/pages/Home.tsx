import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import TestComponent from '../components/TestComponent';

const Home: React.FC = function () {
  const { t } = useTranslation();
  return (
    <div className='home'>
      <Button variant='contained' color='primary'>
        {t('title')}
      </Button>
      <div>{t('title')}</div>
      <TestComponent />
    </div>
  );
};

export default Home;
