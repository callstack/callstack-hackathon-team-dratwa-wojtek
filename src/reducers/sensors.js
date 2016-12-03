// CONSTS
const SENSOR_CONNECT = 'SENSOR_CONNECT';
const SENSOR_CONNECT_SUCCESS = 'SENSOR_CONNECT_SUCCESS';
const SENSOR_MESSAGE = 'SENSOR_MESSAGE';
const SENSOR_ERROR = 'SENSOR_ERROR';

// ACTIONS
export const sensorConnect = () => ({ type: SENSOR_CONNECT });
export const sensorConnectSuccess = (socket) => ({
  type: SENSOR_CONNECT_SUCCESS,
  payload: socket,
});
export const sensorMessage = (response) => ({
  type: SENSOR_MESSAGE,
  payload: response,
});
export const sensorError = (error) => ({ type: SENSOR_ERROR, payload: error });

const openWebSocketConnection = (dispatch, url) => {
  return new Promise((resolve) => {
    const socket = new WebSocket('ws://192.168.1.47:1880/ws/sensors');

    socket.onopen = () => {
      // console.log('connected');
      resolve(socket);
    };

    socket.onmessage = (message) => {
      console.log(message);      
      dispatch(sensorMessage(message));
    };

    socket.onerror = (error) => {
      dispatch(sensorError(error));
    };

    socket.onclose = (event) => {
      console.log("Websocket socket closed: " + JSON.stringify(event));
    };
  });
};

const URL = 'ws://192.168.1.47:1880/ws/sensors';

export const connectWithSensors = () => async (dispatch) => {
  try {
    dispatch(sensorConnect());
    const socket = await openWebSocketConnection(dispatch, URL);
    if (socket) {
      dispatch(sensorConnectSuccess(socket));
    }
  } catch (e) {
    dispatch(sensorError(e));
  }
};

// HANDLERS
const initialState = {
  isLoading: false,
  error: undefined,
  socket: undefined,
  light: { status: undefined, changeTime: undefined },
  sonic: { status: undefined, changeTime: undefined },
};

export default function appReducer(state = initialState, action) {
  const { type } = action;

  if (type === SENSOR_CONNECT) {
    Object.assign({}, state, {
      error: undefined,
      isLoading: true,
    });
  }
  if (type === SENSOR_CONNECT_SUCCESS) {
    Object.assign({}, state, {
      socket: action.payload,
      error: undefined,
      isLoading: false,
    });
  }
  if (type === SENSOR_MESSAGE) {
    Object.assign({}, state, {
      light: action.payload.light,
      sonic: action.payload.sonic,
    });
  }
  if (type === SENSOR_ERROR) {
    Object.assign({}, state, {
      error: action.payload,
    });
  }

  return state;
}
