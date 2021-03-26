import {
  REQUEST_DATA,
  FILTER_BY_AUTHOR,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
} from "./types";

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });
    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT,
      });
    }, 3000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function requestData() {
  return {
    type: REQUEST_DATA,
  };
}

export function filterByAuthor(value) {
  return {
    type: FILTER_BY_AUTHOR,
    payload: value,
  };
}
