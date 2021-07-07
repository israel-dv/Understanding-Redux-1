export default (state, action) => {
  switch (action.type) {
    case "NEW_QUANTITY":
      return {
        ...state,
        quantity: action.payload,
      };
    default:
      return { ...state };
  }
};
