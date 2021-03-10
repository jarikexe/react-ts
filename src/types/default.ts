import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export type InitialState = {
  test: string;
  theme: string;
  lang: string;
};

export type Action = {
  type: string;
  payload?: any; 
};
