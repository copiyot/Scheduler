import React from "react";

import "./TaskRepeat.css";
import RepeatTimeIntervals from "./RepeatTimeIntervals";

class TaskRepeat extends React.Component {
  renderDropDownMenu() {
    return (
      <form action="submit" className="reminderDropDownMenu">
        <label>Reminder:</label>
        <select name="option">
          <option value="None">None</option>
          <option value="0 minutes">0 minutes</option>
          <option value="5 minutes">5 minutes</option>
          <option value="15 minutes">15 minutes</option>
          <option value="30 minutes">30 minutes</option>
          <option value="1 hour">1 hour</option>
          <option value="12 hours">12 hours</option>
          <option value="1 day">1 day</option>
          <option value="1 week">1 week</option>
        </select>
      </form>
    );
  }

  renderSaveDeleteIcons() {
    return (
      <div className="saveDeleteIcon">
        <i className="trash alternate outline icon">Delete</i>
        <i className="save outline icon">Save</i>
        <i className="sync alternate icon">Repeat</i>
        {this.renderDropDownMenu()}
      </div>
    );
  }

  renderStartDate() {
    return (
      <div className="repeatStartDateForm">
        <form action="submit">
          <RepeatTimeIntervals />
        </form>
      </div>
    );
  }

  renderEndDate() {
    return (
      <div className="repeatEndDateForm">
        <form action="submit">
          <RepeatTimeIntervals />
        </form>
      </div>
    );
  }

  renderRepeatStartDate() {
    return (
      <div className="repeatStartDate-form">
        <form action="submit">
          <label>Start: </label>
          <input type="text" placeholder="February 19, 2020" />
          <i className="calendar alternate outline icon"></i>
        </form>
      </div>
    );
  }

  renderRepeatPeriodDropDownMenu() {
    return (
      <select className="periodDropDownMenu" name="option">
        <option value="Weekly">Weekly</option>
        <option value="Daily">Daily</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
    );
  }

  renderCheckbox() {
    return (
      <div className="repeatWeekCheckBoxes">
        <div className="monToThurs">
          <input type="checkbox" id="daysCheckBox" />
          <label htmlFor="daysCheckBox">Mon</label>
          <input type="checkbox" id="daysCheckBox" />
          <label htmlFor="daysCheckBox">Tue</label>
          <input type="checkbox" id="daysCheckBox" />
          <label htmlFor="daysCheckBox">Wed</label>
          <input type="checkbox" id="daysCheckBox" />
          <label htmlFor="daysCheckBox">Thu</label>
        </div>
        <div className="friToSun">
          <input type="checkbox" id="daysCheckBox" />
          <label htmlFor="daysCheckBox">Fri</label>
          <input type="checkbox" id="daysCheckBox" />
          <label htmlFor="daysCheckBox">Sat</label>
          <input type="checkbox" id="daysCheckBox" />
          <label htmlFor="daysCheckBox">Sun</label>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="taskCreate-container">
        {this.renderSaveDeleteIcons()}
        <div className="taskRepeat-container">
          <div className="details">Details</div>
          <input
            type="text"
            placeholder="Event name"
            className="repeatEventName-input"
          />
          <input
            type="text"
            placeholder="Location"
            className="repeatLocation-input"
          />
          <div className="endStartTimeIntervals">
            {this.renderStartDate()}
            {this.renderEndDate()}
          </div>
          <div>
            <textarea
              placeholder="Event description"
              className="repeatDescriptionTextArea"
              rows="4"
              cols="50"
            ></textarea>
          </div>
        </div>
        <div className="taskWeeklyRepeat">
          <div className="details">Repeat</div>
          {this.renderRepeatStartDate()}
          {this.renderRepeatPeriodDropDownMenu()}
          {this.renderCheckbox()}
        </div>
      </div>
    );
  }
}

export default TaskRepeat;
