import { ChangeThemeActionType } from '../types/default';
import { themes } from '../definitions/thems';

export const selectTheme = (
  selectedTheme: number,
  action: ChangeThemeActionType
): number => {
  if (action.type === 'CHANGE_THEME') {
    return selectedTheme === themes.DEFAULT ? themes.DARK : themes.DEFAULT;
  }
  return themes.DEFAULT;
};
