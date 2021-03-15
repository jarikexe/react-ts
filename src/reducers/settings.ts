import { ChangeLanguageActionType } from '../types/default';
import { ChangeThemeActionType } from '../types/default';
import { themes } from '../definitions/thems';

export const selectLanguage = (
  selectedLanguage = 'en',
  action: ChangeLanguageActionType
): string => {
  if (action.type === 'CHANGE_LNG') {
    return action.payload;
  }
  return selectedLanguage;
};

export const selectTheme = (
  selectedTheme = themes.DEFAULT,
  action: ChangeThemeActionType
): number => {
  if (action.type === 'CHANGE_THEME') return action.payload;
  return selectedTheme;
};
