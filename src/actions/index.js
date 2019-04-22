import heroku from "../api/heroku";

export const UPDATE_EVENTS_VIEW = "UPDATE_EVENTS_VIEW";
export const FETCH_EVENTS = "FETCH_EVENTS";
export const SHOW_NEW_FORM = "SHOW_NEW_FORM";
export const SHOW_EDIT_FORM = "SHOW_EDIT_FORM";
export const EVENT_DETAIL = "EVENT_DETAIL";
export const HIDE_EVENT_FORM = "HIDE_EVENT_FORM";

export const showNewForm = () => dispatch => {
  dispatch({ type: SHOW_NEW_FORM });
  dispatch({ type: EVENT_DETAIL, payload: null });
};

export const hideForm = () => dispatch => {
  dispatch({ type: HIDE_EVENT_FORM });
  dispatch({ type: EVENT_DETAIL, payload: null });
};

export const showEditForm = ({
  name = "",
  location = "",
  id = ""
}) => dispatch => {
  dispatch({ type: SHOW_EDIT_FORM });
  dispatch({ type: EVENT_DETAIL, payload: { name, location, id } });
};

export const updateEventsVeiw = events => {
  return {
    type: UPDATE_EVENTS_VIEW,
    payload: events
  };
};

export const sortByName = events => dispatch => {
  const sortedEvents = [...events].sort((eOne, eTwo) => {
    if (eOne.name > eTwo.name) return 1;
    if (eOne.name < eTwo.name) return -1;
    return 0;
  });
  dispatch({ type: UPDATE_EVENTS_VIEW, payload: sortedEvents });
};

export const sortByLocation = events => dispatch => {
  const sortedEvents = [...events].sort((eOne, eTwo) => {
    if (eOne.location > eTwo.location) return 1;
    if (eOne.location < eTwo.location) return -1;
    return 0;
  });
  dispatch({ type: UPDATE_EVENTS_VIEW, payload: sortedEvents });
};

/** Working with API */
export const fetchEvents = () => async dispatch => {
  const { data } = await heroku.get("/");

  dispatch({ type: UPDATE_EVENTS_VIEW, payload: data });
};

export const postNewEvent = ({ name, location }) => async dispatch => {
  await heroku.post("/", { name, location });
  const { data } = await heroku.get("/");

  dispatch({ type: UPDATE_EVENTS_VIEW, payload: data });
  dispatch({ type: HIDE_EVENT_FORM });
};

export const patchUpdateEvent = ({ name, location, id }) => async dispatch => {
  await heroku.patch(`/${id}`, { name, location });

  const { data } = await heroku.get("/");

  dispatch({ type: UPDATE_EVENTS_VIEW, payload: data });
  dispatch({ type: HIDE_EVENT_FORM });
};
export const deleteEvent = id => async dispatch => {
  await heroku.delete(`/${id}`);
  const { data } = await heroku.get("/");

  dispatch({ type: UPDATE_EVENTS_VIEW, payload: data });
};
