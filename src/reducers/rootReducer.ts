import { InitialState, Action } from '../types/default';

const initState = {
  test: 'test',
};

const rootReducer = (state = initState, action: Action): InitialState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
