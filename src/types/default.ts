export type InitialState = {
  test: string;
  theme: number;
  lang: string;
};

export type ChangeLanguageActionType = {
  type: string;
  payload: string;
};

export type ChangeThemeActionType = {
  type: string;
};
