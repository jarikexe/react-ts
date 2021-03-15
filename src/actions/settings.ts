import {
  ChangeLanguageActionType,
  ChangeThemeActionType,
} from '../types/default';
import i18n from '../i18n';
import { themes } from '../definitions/thems';

export const selectTheme = (currentTheme: number): ChangeThemeActionType => {
  const theme = currentTheme === themes.DEFAULT ? themes.DARK : themes.DEFAULT;
  return { type: 'CHANGE_THEME', payload: theme };
};

export const selectLanguage = (language: string): ChangeLanguageActionType => {
  i18n.changeLanguage(language);
  return { type: 'CHANGE_LNG', payload: language };
};
