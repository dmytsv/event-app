import { combineReducers } from "redux";

import {
  UPDATE_EVENTS_VIEW,
  SHOW_NEW_FORM,
  SHOW_EDIT_FORM,
  EVENT_DETAIL,
  HIDE_EVENT_FORM
} from "../actions";

const formDetail = (state = null, action) => {
  switch (action.type) {
    case EVENT_DETAIL:
      return action.payload;
    default:
      return state;
  }
};

const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_EVENTS_VIEW:
      return action.payload;
    default:
      return state;
  }
};
const eventFormReducer = (state = false, action) => {
  switch (action.type) {
    case SHOW_NEW_FORM:
      return SHOW_NEW_FORM;
    case SHOW_EDIT_FORM:
      return SHOW_EDIT_FORM;
    case HIDE_EVENT_FORM:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  formDetail,
  events: eventsReducer,
  showForm: eventFormReducer
});
