const initialState = {
  NotificationsSelected: false
};

const notiReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'NOTIFICATIONS':
      return { ...state, NotificationsSelected: !payload };
    default:
      return state;
  }
};

export default notiReducer;
