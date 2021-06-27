import React, { Component } from "react";
import { withRouter } from "react-router";
import "./mailfeature.css";

class MailFeature extends Component {
  state = {};
  render() {
    return (
      <div className="mail-box-container">
        <form>
          <div className="row">
            <div className="col-25">
              <label for="toAddress">To:</label>
            </div>
            <div className="col-75">
              <input
                className="input-field-mail"
                type="text"
                placeholder="example@example.com"
                id="toAddress"
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="carbonCopy">CC:</label>
            </div>
            <div className="col-75">
              <input
                className="input-field-mail"
                type="text"
                placeholder="example@example.com"
                id="carbonCopy"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="subject">Subject:</label>
            </div>
            <div className="col-75">
              <input className="input-field-mail" type="text" placeholder="Subject" id="subject" required/>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="scheduleSelector">Schedule Selector</label>
            </div>
              <div className = "col-75">
              <select className="input-field-mail" id="scheduleSelector" name="scheduleSelector" required>
              <option value="" selected disabled>- Select a Schedule -</option>
                <option value="rucurring">Recurring Schedule</option>
                <option value="weekly">Weekly Schedule</option>
                <option value="monthly">Monthly Schedule</option>
                <option value="yearly">Yearly Schedule</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="mailBody">Mail Body:</label>
            </div>
            <div className="col-75">
              <textarea className="input-field-mail" rows="20" cols="60" name="mailBody" placeholder="Write Something..." required/>
            </div>
          </div>

          <div className="row"> <p></p>
            <button className="btnbtn" type="submit" value="Submit">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(MailFeature);
