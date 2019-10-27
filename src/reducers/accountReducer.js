const initialState = {
  AccountSelected: false
};

const accountReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ACCOUNT':
      return { ...state, AccountSelected: !payload };
    case 'CLOSE':
      return { ...state, AccountSelected: !payload };
    default:
      return state;
  }
};
export default accountReducer;
