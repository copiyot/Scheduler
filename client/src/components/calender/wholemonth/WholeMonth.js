import React from "react";
import moment from "moment";
import { connect } from "react-redux";

import "./WholeMonth.css";
import {
  showMonths,
  showMonthPicker,
  showYears,
  changeMonth,
  changeYear
} from "../../../actions";

class WholeMonth extends React.Component {
  /**
   * Short Days Names
   */
  weekdaysShortName() {
    return moment.weekdaysShort().map(day => (
      <th key={day} className="weekDay">
        {day}
      </th>
    ));
  }

  decodeMonthNumber(monthName) {
    switch (monthName.toUpperCase()) {
      case "JANUARY":
        return 0;
      case "FEBRUARY":
        return 1;
      case "MARCH":
        return 2;
      case "APRIL":
        return 3;
      case "MAY":
        return 4;
      case "JUNE":
        return 5;
      case "JULY":
        return 6;
      case "AUGUST":
        return 7;
      case "SEPTEMBER":
        return 8;
      case "OCTOBER":
        return 9;
      case "NOVEMBER":
        return 10;
      case "DECEMBER":
        return 11;
      default:
        return new Date().getMonth();
    }
  }

  onLeftArrowClick() {
    let myMonth = this.props.selectedMonth.format("MMMM");
    let monthNumber = this.decodeMonthNumber(myMonth);
    let selected = this.props.selectedYear;

    if (myMonth === "January") {
      let newYear = selected - 1;
      selected = newYear;
      this.props.changeMonth(
        moment().set({ year: this.props.changeYear(selected), month: "11" })
      );
    }

    this.props.changeMonth(
      moment().set({ year: this.props.selectedYear, month: monthNumber - 1 })
    );
  }

  onRightArrowClick() {
    let myMonth = this.props.selectedMonth.format("MMMM");
    let monthNumber = this.decodeMonthNumber(myMonth);
    let selected = parseInt(this.props.selectedYear);

    if (myMonth === "December") {
      let newYear = selected + 1;
      selected = newYear;
      this.props.changeMonth(
        moment().set({
          year: this.props.changeYear(selected),
          monthNumber: "0"
        })
      );
    }

    this.props.changeMonth(
      moment().set({ year: this.props.selectedYear, month: monthNumber + 1 })
    );
  }
  /**
   * Current Month
   */
  currentMonth() {
    let dateObject = this.props.selectedMonth;
    return (
      <th colSpan="7" className="wholeMonth-selectedMonthYear">
        <i
          className="fas fa-angle-left"
          onClick={() => this.onLeftArrowClick()}
        ></i>

        <span
          onClick={() => {
            this.props.showMonthPicker(true);
            this.props.showYears(false);
            this.props.showMonths(false);
          }}
          className="wholeMonth-selectedMonth"
        >{`${dateObject.format("MMMM")} ${this.props.selectedYear}`}</span>

        <i
          className="fas fa-angle-right"
          onClick={() => this.onRightArrowClick()}
        ></i>
      </th>
    );
  }

  //Blank cells before the first date of the month
  monthCellsBlank() {
    let dateObject = this.props.selectedMonth;

    let firstDayOfMonth = dateObject.startOf("month").format("d");

    let blanks = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      blanks.push(
        <td key={i - 30} className="calenderDay-empty">
          {""}
        </td>
      );
    }

    return blanks;
  }

  highlightedDay(day) {
    let currentDay =
      day === parseInt(moment().format("D")) &&
      parseInt(this.props.selectedYear) === parseInt(moment().format("YYYY")) &&
      this.props.selectedMonth.format("MMMM") === moment().format("MMMM")
        ? "Today"
        : "";
    return currentDay;
  }
  //Blank cells before the first date of the month
  monthCellsValues() {
    let dateObject = this.props.selectedMonth;
    let daysInMonth = dateObject.daysInMonth();
    let daysinmonth = [];
    for (let d = 1; d <= daysInMonth; d++) {
      daysinmonth.push(
        <td key={d} className={`calenderDay${this.highlightedDay(d)}`}>
          {d}
        </td>
      );
    }

    return daysinmonth;
  }

  //total slots both empty and with values
  monthCells() {
    let totalSlots = [...this.monthCellsBlank(), ...this.monthCellsValues()];
    let rows = []; // contains </td> when going to a new row
    let cells = []; // contains each </td> to be assigned to each row

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row); // if index is not divisible by 7 we stay in the same week
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    let totalDaysInMonth = rows.slice(1).map((d, i) => {
      return <tr key={i - 40}>{d}</tr>;
    });

    return totalDaysInMonth;
  }

  render() {
    return (
      <table className="wholeMonth-table">
        <thead>
          <tr className="wholeMonth-tr">{this.currentMonth()}</tr>
          <tr className="wholeMonth-tr">{this.weekdaysShortName()}</tr>
        </thead>
        <tbody>{this.monthCells()}</tbody>
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
  showMonths,
  showMonthPicker,
  showYears,
  changeMonth,
  changeYear
})(WholeMonth);
