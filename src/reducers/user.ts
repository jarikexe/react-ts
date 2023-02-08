import { SET_USER } from '../consts';

export const setUser = (
  user = null,
  action: any
): { email: string; id: string } | null => {
  if (action.type === SET_USER) {
    return action.payload;
  }
  return user;
};
