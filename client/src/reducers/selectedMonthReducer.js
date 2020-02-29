import moment from "moment";

export default (state = moment(), action) => {
  switch (action.type) {
    case "SELECTED_MONTH":
      return action.payload;

    default:
      return state;
  }
};
