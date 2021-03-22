import {
  ChangeLanguageActionType,
  ChangeThemeActionType,
} from '../types/default';
import i18n from '../i18n';
import { themes } from '../definitions/settings';
import { CHANGE_LNG, CHANGE_THEME } from '../consts';

export const selectTheme = (currentTheme: string): ChangeThemeActionType => {
  const theme = currentTheme === themes.DEFAULT ? themes.DARK : themes.DEFAULT;
  return { type: CHANGE_THEME, payload: theme };
};

export const selectLanguage = (language: string): ChangeLanguageActionType => {
  i18n.changeLanguage(language);
  return { type: CHANGE_LNG, payload: language };
};
