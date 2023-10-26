import { takeLatest, put, delay } from 'redux-saga/effects';
import {
    CONTACT_CHANGE_STEP,
    contactExitStep,
    contactSetStep,
} from '../store/Actions';

// import { } from '../api/Api';

function* getContactChangeStep(data) {
    yield put(contactExitStep());
    yield delay(500);
    yield put(contactSetStep(data.payload));
}

function* dataSaga() {
    yield takeLatest(CONTACT_CHANGE_STEP, getContactChangeStep);
}

export default dataSaga;
