const initialState = {};

export default function appReducer(state = initialState, action) {
  const { type } = action;

  if (type === 'MOCK_SUCCESS') {
    console.log(action.payload);
  }

  if (type === 'MOCK_ERROR') {
    console.log(action.payload);
  }

  return state;
}
