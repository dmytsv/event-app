import React from "react";
import { connect } from "react-redux";
import { showNewForm, sortByName, sortByLocation } from "../actions";

import "./Header.scss";

function Header(props) {
  return (
    <div className="ui segment segment-header">
      <h1 className="ui header">Event App</h1>
      <div className="action-buttons">
        <button
          className="ui button primary"
          onClick={() => props.showNewForm()}
        >
          Add new event
        </button>
        <button
          className="ui button basic secondary"
          onClick={() => props.sortByName(props.events)}
        >
          Sort by Name
        </button>
        <button
          className="ui button basic secondary"
          onClick={() => props.sortByLocation(props.events)}
        >
          Sort by Location
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ events }) => ({ events });

export default connect(
  mapStateToProps,
  { showNewForm, sortByName, sortByLocation }
)(Header);
