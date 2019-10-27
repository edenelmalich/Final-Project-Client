const initialState = {
  token: localStorage.getItem('token')
};

const DisconnectReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case 'Disconnect':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null
      };

    default:
      return state;
  }
};
export default DisconnectReducer;
