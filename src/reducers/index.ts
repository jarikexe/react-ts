import { combineReducers } from 'redux';
import { selectLanguage, selectTheme } from './settings';

export default combineReducers({
  language: selectLanguage,
  theme: selectTheme,
});
