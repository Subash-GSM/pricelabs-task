import { actions } from './actions';
import { all, takeEvery, put, call } from 'redux-saga/effects';
import { RESPONSE_DATA } from '../utils/Constants';
import axios from 'axios';

const getPropertyListFunc = async (data) => {
  try {
    return RESPONSE_DATA;
//     const response = await axios.post(
//       'https://www.vrbo.com/serp/g',
//       data.payload
//     );
//     console.log(response.data);
//     return response.data
//   } catch (e) {
//     throw {
//       message: e.message,
//     };
//   }


};

export function* getPropertyList(payload) {
  try {
    const response = yield call(getPropertyListFunc, payload);
    yield put({
      type: actions.GET_PROPERTY_LIST_SUCCESS,
      data: response,
    });
  } catch (e) {
    yield put({
      type: actions.GET_PROPERTY_LIST_FAILURE,
      error: e,
    });
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.GET_PROPERTY_LIST, getPropertyList)]);
}
