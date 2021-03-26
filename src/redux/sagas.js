import { put, takeEvery, call } from "redux-saga/effects";
import { hideLoader, showLoader, showAlert } from "./actions";
import { FETCH_POSTS, FETCH_USERS, REQUEST_DATA } from "./types";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_DATA, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payloadPosts = yield call(fetchPosts);
    yield put({ type: FETCH_POSTS, payloadPosts });
    const payloadUsers = yield call(fetchUsers);
    yield put({ type: FETCH_USERS, payloadUsers });
    yield put(hideLoader());
  } catch (error) {
    yield put(showAlert("Something went wrong..."));
    yield put(hideLoader());
  }
}

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
}

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
}
