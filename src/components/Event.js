import React from "react";
import "./Event.scss";

function Event(props) {
  const {
    event: { name, location, _id: id }
  } = props;
  // console.log("name ", name, "location ", location, "id ", id);
  return (
    <li className="item">
      <i className=" calendar alternate outline icon" />
      <div className="content">
        <h2 className="header">{name}</h2>
        <div className="description">{location}</div>
      </div>
      <div className="right floated content">
        <button
          className="ui orange button"
          onClick={() => props.handleEdit({ name, location, id })}
        >
          Edit
        </button>
        <button
          className="ui red button"
          onClick={() => props.handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
export default Event;
