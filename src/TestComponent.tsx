import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

const TestComponent: React.FC = function () {
  const { t } = useTranslation();
  return (
    <Button variant='contained' color='primary'>
      {t('test')}
    </Button>
  );
};

export default TestComponent;
