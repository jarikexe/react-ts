import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme, selectLanguage } from './actions/settings';
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
  const themeState = useSelector((state: InitialState) => state.theme);
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
          <Button color='inherit' onClick={() => dispatch(selectLanguage(RU))}>
            RU
          </Button>
          <Button color='inherit' onClick={() => dispatch(selectLanguage(EN))}>
            EN
          </Button>
          <Button
            color='inherit'
            onClick={() => dispatch(selectTheme(themeState))}
          >
            {t('changeTheme')}
          </Button>
        </Toolbar>
      </AppBar>
      <div className='App'>
        <Button variant='contained' color='primary'>
          {t('title')}
        </Button>
        <div>{t('title')}</div>
        <TestComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;
