import { ChangeThemeActionType } from '../types/default';

export const selectTheme = (): ChangeThemeActionType => {
  return { type: 'CHANGE_THEME' };
};
