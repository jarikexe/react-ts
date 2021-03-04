import { initialState, testAction } from '../types/default';

const initState = {
  test: '',
};

const rootReducer = (state = initState, action: testAction): initialState => {
  return state;
};

export default rootReducer;
