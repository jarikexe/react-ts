import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = function () {
  const { t } = useTranslation();
  return <div className='registration'>Registration</div>;
};

export default Home;
