import { ChangeLanguageActionType } from '../types/default';

export const selectLanguage = (language: string): ChangeLanguageActionType => {
  return { type: 'CHANGE_LNG', payload: language };
};
