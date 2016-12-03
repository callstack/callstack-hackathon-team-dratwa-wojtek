import { fetch } from '../fetch';

export const mockSuccess = (response) => ({ type: 'MOCK_SUCCESS', payload: response });
export const mockError = (error) => ({ type: 'MOCK_FAILURE', payload: error });

export const mockHTTPRequest = () => async (dispatch) => {
  try {
    const response = await fetch('https://httpbin.org/get', {
      method: 'GET',
    });
    dispatch(mockSuccess(response));
  } catch (e) {
    dispatch(mockError(e));
  }
};
