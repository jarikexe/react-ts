import { combineReducers } from 'redux';
import { selectLanguage, selectTheme } from './settings';
import { setUser } from './user';

export default combineReducers({
  language: selectLanguage,
  theme: selectTheme,
  user: setUser,
});
