import React, { useEffect, useLayoutEffect } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme, selectLanguage } from './actions/settings';
import { useTranslation } from 'react-i18next';
import { InitialState, User } from './types/default';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { LANGUAGES } from './definitions/settings';
import { themesList } from './types/themes';
import { THEMES } from './definitions/settings';
import Home from './pages/Home';
import Login from './pages/Login';
import axios from 'axios';
import Registration from './pages/Registration';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { host, port, apiPrefix, entities } from './config/development.json';
import { setUser } from './actions/user';

const App: React.FC = function () {
  const dispatch = useDispatch();
  const themeState: THEMES.DARK | THEMES.DEFAULT = useSelector(
    (state: InitialState) => state.theme
  );
  const user = useSelector((state: any) => state?.user);
  const theme = themesList[themeState];
  const createdTheme = createMuiTheme(theme);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    async function getMe() {
      const resp = await axios
        .get(
          host + port + apiPrefix + entities.user.selfName + entities.user.me,
          { headers: { Authorization: localStorage.getItem('authToken') } }
        )
        .then((resp) => {
          dispatch(setUser({ email: resp.data.email, id: resp.data._id }));
        })
        .catch((err) => {
          if (err) {
            localStorage.removeItem('authToken');
            dispatch(setUser(null));
          }
          console.log(err);
        });
    }
    getMe();
  });

  return (
    <ThemeProvider theme={createdTheme}>
      <Router>
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
            {!user?.id ? (
              <>
                <Link to='/login'>
                  <Button>{t('login')}</Button>
                </Link>
                <Link to='/registration'>
                  <Button>{t('registration')}</Button>
                </Link>
              </>
            ) : (
              <>
                {user?.email}
                <Button onClick={() => localStorage.removeItem('authToken')}>
                  {t('logout')}
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
        <div className='App'>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/registration'>
              <Registration />
            </Route>
            <Route path='/' exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
