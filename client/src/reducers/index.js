import { combineReducers } from "redux";

import selectedMonthReducer from "./selectedMonthReducer";
import selectedYearReducer from "./selectedYearReducer";
import firstYearReducer from "./firstYearReducer";
import twelfthYearReducer from "./twelfthYearReducer";
import showMonths from "./showMonths";
import showYears from "./showYears";
import showMonthPicker from "./showMonthPicker";
import authReducer from "./authReducer";

export default combineReducers({
  selectedMonth: selectedMonthReducer,
  selectedYear: selectedYearReducer,
  showMonthInTable: showMonths,
  showYearsInTable: showYears,
  showMonthPickerInTable: showMonthPicker,
  firstYear: firstYearReducer,
  twelfthYear: twelfthYearReducer,
  auth: authReducer
});
