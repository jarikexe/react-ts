import { InitialState, Action } from '../types/default';
import i18n from '../i18n';
import { themes } from '../definitions/thems';

const initState = {
  test: 'test',
  theme: themes.DEFAULT,
  lang: 'en',
};

const rootReducer = (state = initState, action: Action): InitialState => {
  switch (action.type) {
    case 'CHANGE_THEME':
      state.theme =
        state.theme === themes.DEFAULT ? themes.DARK : themes.DEFAULT;
      return state;
      break;
    case 'CHANGE_LNG':
      state.lang = action.payload;
      i18n.changeLanguage(action.payload);
      return state;
      break;
    default:
      return state;
  }
};

export default rootReducer;
