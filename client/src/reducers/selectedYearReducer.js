import moment from "moment";

export default (state = moment().format("YYYY"), action) => {
  switch (action.type) {
    case "SELECTED_YEAR":
      return action.payload;

    default:
      return state;
  }
};
