export default (state = false, action) => {
  switch (action.type) {
    case "SHOW_MONTHPICKER":
      return action.payload;

    default:
      return state;
  }
};
