import { takeLeading, put, delay } from 'redux-saga/effects';
import {
    CHANGE_CARD,
    exitCard,
    setCard,
} from '../store/Actions';

function* getChangeCard(data) {
    yield put(exitCard());
    yield delay(800);
    yield put(setCard(data.payload));
}

function* dataSaga() {
    yield takeLeading(CHANGE_CARD, getChangeCard);
}

export default dataSaga;
