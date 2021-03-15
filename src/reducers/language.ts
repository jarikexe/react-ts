import { ChangeLanguageActionType } from '../types/default';
import i18n from '../i18n';

export const selectLanguage = (
  selectedLanguage = 'en',
  action: ChangeLanguageActionType
): string => {
  if (action.type === 'CHANGE_LNG') {
    i18n.changeLanguage(action.payload);
    return action.payload;
  }
  return selectedLanguage;
};
