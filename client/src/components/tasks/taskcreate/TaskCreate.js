import React from "react";
import { connect } from "react-redux";

import "./TaskCreate.css";
import TimeIntervals from "./TimeIntervals";
import { createTasks } from "../../../actions";

class TaskCreate extends React.Component {
  state = {
    eventName: "",
    locationName: "",
    startDate: null,
    endDate: null,
    evenDescription: ""
  };

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
        <i
          onClick={this.handleEventDetailsSubmit}
          className="save outline icon"
        >
          Save
        </i>
        <i className="sync alternate icon">Repeat</i>
        {this.renderDropDownMenu()}
      </div>
    );
  }

  renderStartDate() {
    return (
      <div className="startDateForm">
        <form action="submit">
          <label>Start: </label>
          <input type="text" placeholder="February 19, 2020" />
          <i className="calendar alternate outline icon"></i>
          <TimeIntervals handleStartDateChange={this.handleStartDateChange} />
        </form>
      </div>
    );
  }

  renderEndDate() {
    return (
      <div className="endDateForm">
        <form action="submit">
          <label>End: </label>
          <input type="text" placeholder="February 19, 2020" />
          <i className="calendar alternate outline icon"></i>
          <TimeIntervals handleStartDateChange={this.handleEndDateChange} />
        </form>
      </div>
    );
  }

  handleEventNameChange = event => {
    this.setState({ eventName: event.target.value });
  };

  handleLocationChange = event => {
    this.setState({ locationName: event.target.value });
  };

  handleStartDateChange = event => {
    this.setState({ startDate: event.target.value });
  };

  handleEndDateChange = event => {
    this.setState({ endDate: event.target.value });
  };

  handleTextAreaChnage = event => {
    this.setState({ evenDescription: event.target.value });
  };

  handleEventDetailsSubmit = event => {
    event.preventDefault();
    this.props.createTasks(this.state);
  };

  render() {
    return (
      <div className="taskCreate-container">
        {this.renderSaveDeleteIcons()}
        <div className="details">Details</div>
        <input
          type="text"
          placeholder="Event name"
          className="eventName-input"
          onChange={this.handleEventNameChange}
        />
        <input
          type="text"
          placeholder="Location"
          className="location-input"
          onChange={this.handleLocationChange}
        />
        {this.renderStartDate()}
        {this.renderEndDate()}
        <textarea
          placeholder="Event description"
          className="descriptionTextArea"
          rows="4"
          cols="50"
          onChange={this.handleTextAreaChnage}
        ></textarea>
      </div>
    );
  }
}

export default connect(null, { createTasks })(TaskCreate);
