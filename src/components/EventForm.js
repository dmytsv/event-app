import React, { Component } from "react";
import { connect } from "react-redux";

import {
  SHOW_EDIT_FORM,
  postNewEvent,
  patchUpdateEvent,
  hideForm
} from "../actions";

class EventForm extends Component {
  constructor(props) {
    super(props);
    const showForm = this.props.showForm;
    if (showForm === SHOW_EDIT_FORM) {
      const { name, location, id } = this.props.formDetail;
      this.state = { name, location, id };
    } else {
      this.state = { name: "", location: "" };
    }
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  handleLocationChange = event => {
    this.setState({ location: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const showForm = this.props.showForm;
    const name = this.state.name;
    const location = this.state.location;
    if (showForm === SHOW_EDIT_FORM) {
      const id = this.state.id;
      this.props.patchUpdateEvent({ name, location, id });
    } else {
      this.props.postNewEvent({ name, location });
    }
  };

  render() {
    return (
      <div className="ui container">
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
              placeholder="Name"
            />
          </div>
          <div className="field">
            <label>Location</label>
            <input
              type="text"
              value={this.state.location}
              onChange={this.handleLocationChange}
              placeholder="Location"
            />
          </div>
          <button
            className="ui button"
            onClick={this.handleSubmit}
            type="submit"
          >
            Submit
          </button>
          <button
            className="ui red button"
            onClick={this.props.hideForm}
            type="button"
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ formDetail, showForm }) => ({
  formDetail,
  showForm
});

export default connect(
  mapStateToProps,
  { postNewEvent, patchUpdateEvent, hideForm }
)(EventForm);
