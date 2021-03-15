import { combineReducers } from 'redux';
import { selectLanguage } from './language';
import { selectTheme } from './theme';

export default combineReducers({
  language: selectLanguage,
  theme: selectTheme,
});
