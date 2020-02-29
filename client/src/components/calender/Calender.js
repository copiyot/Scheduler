import React from "react";
import moment from "moment";
import { connect } from "react-redux";

import WholeMonth from "./wholemonth/WholeMonth";
import MonthPicker from "./monthpicker/MonthPicker";
import YearPicker from "./yearpicker/YearPicker";
import "./Calender.css";

class Calender extends React.Component {
  render() {
    return (
      <div className="calender">
        {this.props.showMonthPicker && <MonthPicker data={moment.months()} />}
        {this.props.showMonth && <WholeMonth />}
        {this.props.showYears && <YearPicker />}
        <div className="createTaskIcon"><i className="plus icon"></i></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showMonth: state.showMonthInTable,
    showYears: state.showYearsInTable,
    showMonthPicker: state.showMonthPickerInTable
  };
};

export default connect(mapStateToProps)(Calender);
