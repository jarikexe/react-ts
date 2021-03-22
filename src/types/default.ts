import { THEMES } from '../definitions/settings';

export type InitialState = {
  theme: THEMES.DARK | THEMES.DEFAULT;
  lang: string;
};

export type ChangeLanguageActionType = {
  type: string;
  payload: string;
};

export type ChangeThemeActionType = {
  type: string;
  payload: any;
};
