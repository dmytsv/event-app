import React from "react";
import "./Loader.scss";

function Loader(props) {
  return (
    <div className="ui segment loader-segment">
      <div className="ui active inverted dimmer">
        <div className="ui medium text loader">Loading Events from API...</div>
      </div>
    </div>
  );
}
export default Loader;
