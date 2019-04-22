import React, { Component } from "react";
import { connect } from "react-redux";
import EventList from "./EventList";
import Header from "./Header";
import EventForm from "./EventForm";

class App extends Component {
  renderContent() {
    if (this.props.showForm) {
      return <EventForm />;
    } else {
      return (
        <div className="ui container">
          <Header />
          <EventList />
        </div>
      );
    }
  }
  render() {
    return this.renderContent();
  }
}

const mapStateToProps = ({ showForm }) => ({ showForm });

export default connect(mapStateToProps)(App);
