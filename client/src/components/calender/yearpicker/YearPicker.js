import React from "react";
import moment from "moment";
import { connect } from "react-redux";

import {
  showMonths,
  changeYear,
  showYears,
  showMonthPicker,
  firstYear,
  twelfthYear
} from "../../../actions";
import "./YearPicker.css";

class YearPicker extends React.Component {
  getYears(startYear, endYear) {
    let yearArray = [];

    while (startYear <= endYear) {
      yearArray.push(startYear);
      startYear++;
    }

    return yearArray;
  }

  highlightedYear(year) {
    let thisYear = parseInt(moment().format("YYYY"));
    let currentYear = year === thisYear ? "Year" : "";
    return currentYear;
  }

  yearPicker() {
    let twelveYears = this.getYears(
      this.props.currentYear,
      this.props.twelveYear
    );

    let years = [];
    let rows = [];
    let cells = [];

    twelveYears.forEach(year => {
      years.push(
        <td
          key={year}
          onClick={() => {
            this.props.showMonths(false);
            this.props.showMonthPicker(true);
            this.props.showYears(false);
            this.props.changeYear(parseInt(year));
          }}
        >
          <span className={`current${this.highlightedYear(year)}`}>{year}</span>
        </td>
      );
    });

    years.forEach((row, i) => {
      if (i % 3 !== 0 || i === 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });

    rows.push(cells);

    let yearlist = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>;
    });

    return yearlist;
  }

  onLeftArrowClick() {
    let currentYear = this.props.currentYear;
    let twelfthYear = parseInt(this.props.twelveYear);
    let newcurrentYear = currentYear - 12;
    let newtwelfthYear = twelfthYear - 12;
    this.props.firstYear(newcurrentYear);
    this.props.twelfthYear(newtwelfthYear);
  }

  onRightArrowClick() {
    let currentYear = this.props.currentYear;
    let twelfthYear = parseInt(this.props.twelveYear);
    let newcurrentYear = currentYear + 12;
    let newtwelfthYear = twelfthYear + 12;
    this.props.firstYear(newcurrentYear);
    this.props.twelfthYear(newtwelfthYear);
  }

  render() {
    return (
      <table className="yearPicker-table">
        <thead>
          <tr className="yearPicker-selectedYearsTr">
            <th colSpan="4">
              <i
                className="fas fa-angle-left"
                onClick={() => this.onLeftArrowClick()}
              ></i>
              <span className="yearPicker-selectedYears">{`${this.props.currentYear} - ${this.props.twelveYear}`}</span>
              <i
                className="fas fa-angle-right"
                onClick={() => this.onRightArrowClick()}
              ></i>
            </th>
          </tr>
        </thead>
        <tbody>{this.yearPicker()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentYear: state.firstYear,
    twelveYear: state.twelfthYear
  };
};

export default connect(mapStateToProps, {
  showMonths,
  showYears,
  showMonthPicker,
  changeYear,
  firstYear,
  twelfthYear
})(YearPicker);
