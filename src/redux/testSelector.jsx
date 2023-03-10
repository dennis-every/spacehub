const state = {
  rockets: [],
  isLoading: true,
};
export const testSelector = (f) => f(state);
