import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { InitialState } from './types/default';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { defaultTheme } from './themes/default';
import { darkTheme } from './themes/dark';
import TestComponent from './TestComponent';
import { themes } from './definitions/thems';

const RU = 'ru';
const EN = 'en';

const App: React.FC = function () {
  const dispatch = useDispatch();
  const test = useSelector((state: InitialState) => state.test);
  const theme = useSelector((state: InitialState) => {
    switch (state.theme) {
      case themes.DARK:
        return darkTheme;
        break;
      default:
        return defaultTheme;
    }
  });

  const createdTheme = createMuiTheme(theme);

  const { t } = useTranslation();

  return (
    <ThemeProvider theme={createdTheme}>
      <AppBar position='static'>
        <Toolbar>
          <Button
            color='inherit'
            onClick={() => dispatch({ type: 'CHANGE_LNG', payload: RU })}
          >
            RU
          </Button>
          <Button
            color='inherit'
            onClick={() => dispatch({ type: 'CHANGE_LNG', payload: EN })}
          >
            EN
          </Button>
          <Button
            color='inherit'
            onClick={() => dispatch({ type: 'CHANGE_THEME' })}
          >
            {t('changeTheme')}
          </Button>
        </Toolbar>
      </AppBar>
      <div className='App'>
        <Button variant='contained' color='primary'>
          {t('title')}
        </Button>
        <div>{t(test)}</div>
        <div>{t('title')}</div>
        <TestComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;
