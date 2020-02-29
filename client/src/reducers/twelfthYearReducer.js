import moment from "moment";

export default (
  state = moment()
    .set("year", 2020)
    .add(11, "year")
    .format("YYYY"),
  action
) => {
  switch (action.type) {
    case "TWELFTH_YEAR":
      return action.payload;
    default:
      return state;
  }
};
