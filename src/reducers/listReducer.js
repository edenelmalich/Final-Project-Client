const initialState = {
  ListBoxSelected: false
};

const listReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'LISTBOX':
      return { ...state, ListBoxSelected: !payload };
    default:
      return state;
  }
};

export default listReducer;
