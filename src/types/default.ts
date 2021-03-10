export type InitialState = {
  test: string;
  theme: string;
  lang: string;
};

export type Action = {
  type: string;
  payload?;
};
