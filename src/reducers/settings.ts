import { ChangeLanguageActionType } from '../types/default';
import { ChangeThemeActionType } from '../types/default';
import { LANGUAGES, THEMES } from '../definitions/settings';
import { CHANGE_LNG, CHANGE_THEME } from '../consts';

export const selectLanguage = (
  selectedLanguage = LANGUAGES.EN,
  action: ChangeLanguageActionType
): string => {
  if (action.type === CHANGE_LNG) {
    return action.payload;
  }
  return selectedLanguage;
};

export const selectTheme = (
  selectedTheme = THEMES.DARK,
  action: ChangeThemeActionType
): string => {
  if (action.type === CHANGE_THEME) {
    return action.payload;
  }
  return selectedTheme;
};
