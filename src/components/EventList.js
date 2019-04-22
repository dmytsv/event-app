import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchEvents, showEditForm, deleteEvent } from "../actions";
import Event from "./Event";
import Loader from "./Loader";

class EventList extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }
  renderLoader() {
    if (this.props.events.length) {
      return this.renderEvents();
    }
    return <Loader />;
  }
  renderEvents() {
    return this.props.events.map(event => (
      <Event
        event={event}
        key={event._id}
        handleDelete={this.props.deleteEvent}
        handleEdit={this.props.showEditForm}
      />
    ));
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui celled list">{this.renderLoader()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ events }) => ({ events });

export default connect(
  mapStateToProps,
  { fetchEvents, deleteEvent, showEditForm }
)(EventList);
