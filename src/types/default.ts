export type InitialState = {
  test: string;
  theme: number;
  lang: string;
};

export type Action = {
  type: string;
  payload?: any;
};
