import { SET_USER } from '../consts';

export const setUser = (user: { email: string; id: string } | null) => {
  return { type: SET_USER, payload: user };
};
