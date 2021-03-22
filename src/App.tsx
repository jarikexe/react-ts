import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { selectTheme, selectLanguage } from './actions/settings';
import { useTranslation } from 'react-i18next';
import { InitialState } from './types/default';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TestComponent from './TestComponent';
import { LANGUAGES } from './definitions/settings';
import { themesList } from './types/themes';
import { THEMES } from './definitions/settings';

const App: React.FC = function () {
  const dispatch = useDispatch();
  const themeState: THEMES.DARK | THEMES.DEFAULT = useSelector(
    (state: InitialState) => state.theme
  );
  const theme = themesList[themeState];
  const createdTheme = createMuiTheme(theme);
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={createdTheme}>
      <AppBar position='static'>
        <Toolbar>
          <Button
            color='inherit'
            onClick={() => dispatch(selectLanguage(LANGUAGES.RU))}
          >
            RU
          </Button>
          <Button
            color='inherit'
            onClick={() => dispatch(selectLanguage(LANGUAGES.EN))}
          >
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
