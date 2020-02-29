import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import {
  changeMonth,
  showMonths,
  showYears,
  showMonthPicker,
  changeYear
} from "../../../actions";
import "./MonthPicker.css";

class MonthPicker extends React.Component {
  highlightedMonth(month) {
    let selectedYear = parseInt(this.props.selectedYear);
    let currentYear = parseInt(moment().format("YYYY"));
    let currentMonth1 = parseInt(moment().format("M")) - 1;
    let currentMonth =
      month === currentMonth1 && selectedYear === currentYear ? "Month" : "";

    return currentMonth;
  }

  monthPicker() {
    let months = []; //Months betweeen jan - Dec
    let cells = [];
    let rows = [];

    this.props.data.forEach((data, i) => {
      months.push(
        <td
          key={data}
          onClick={() => {
            this.props.changeMonth(
              moment().set({ year: this.props.selectedYear, month: i })
            );
            this.props.showMonths(true);
            this.props.showMonthPicker(false);
            this.props.showYears(false);
          }}
          className={`current${this.highlightedMonth(i)}`}
        >
          <span>{data}</span>
        </td>
      );
    });

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i === 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });

    rows.push(cells);

    // Mapping over the rows and wrapping them in </tr>
    //this.props.changeMonth(moment().set("month", i))
    let monthList = rows.map((d, i) => <tr key={i}>{d}</tr>);

    return monthList;
  }

  onLeftArrowClick() {
    let selected = this.props.selectedYear;
    let newYear = selected - 1;
    selected = newYear;
    this.props.changeYear(selected);
  }

  onRightArrowClick() {
    let selected = parseInt(this.props.selectedYear);
    let newYear = selected + 1;
    selected = newYear;
    this.props.changeYear(selected);
  }

  render() {
    return (
      <table className="monthPicker-table">
        <thead>
          <tr className="monthPicker-selectedYearTr">
            <th colSpan="4">
              <i
                className="fas fa-angle-left"
                onClick={() => this.onLeftArrowClick()}
              ></i>
              <span
                onClick={() => {
                  this.props.showYears(true);
                  this.props.showMonths(false);
                  this.props.showMonthPicker(false);
                }}
                className="monthPicker-selectedYear"
              >
                {this.props.selectedYear}
              </span>
              <i
                className="fas fa-angle-right"
                onClick={() => this.onRightArrowClick()}
              ></i>
            </th>
          </tr>
        </thead>
        <tbody>{this.monthPicker()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedMonth: state.selectedMonth,
    selectedYear: state.selectedYear
  };
};

export default connect(mapStateToProps, {
  changeMonth,
  showMonths,
  showYears,
  showMonthPicker,
  changeYear
})(MonthPicker);
