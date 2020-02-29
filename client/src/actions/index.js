import tasks from "../api/tasks";

export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const changeMonth = month => {
  return {
    type: "SELECTED_MONTH",
    payload: month
  };
};

export const changeYear = year => {
  return {
    type: "SELECTED_YEAR",
    payload: year
  };
};

export const firstYear = year => {
  return {
    type: "FIRST_YEAR",
    payload: year
  };
};

export const twelfthYear = year => {
  return {
    type: "TWELFTH_YEAR",
    payload: year
  };
};

export const showMonths = show => {
  return {
    type: "SHOW_MONTHS",
    payload: show
  };
};

export const showMonthPicker = show => {
  return {
    type: "SHOW_MONTHPICKER",
    payload: show
  };
};

export const showYears = show => {
  return {
    type: "SHOW_YEARS",
    payload: show
  };
};

export const createTasks = formValues => async dispatch => {
  const response = await tasks.post("/tasks", formValues);

  dispatch({ type: "CREATE_TASK", payload: response.data });
};
