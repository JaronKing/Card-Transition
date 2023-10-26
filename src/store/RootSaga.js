import { all } from 'redux-saga/effects';
import dataSaga from '../store/Sagas';

function* rootSaga() {
  yield all([
    dataSaga(),
    // Add other sagas here if needed
  ]);
}

export default rootSaga;
