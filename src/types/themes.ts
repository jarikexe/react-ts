import { THEMES } from '../definitions/settings';
import { defaultTheme } from '../themes/default';
import { darkTheme } from '../themes/dark';

export const themesList = {
  [THEMES.DARK]: darkTheme,
  [THEMES.DEFAULT]: defaultTheme,
};
