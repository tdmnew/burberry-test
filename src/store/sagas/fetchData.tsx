import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { episodeFetchSuccess, showFetchSuccess } from "../actions";

const show = 6771;

//Fetch methods
const getShow = () => {
    return axios.get(`http://api.tvmaze.com/shows/${show}`).then((res) => {
        return res.data;
    });
};

const getEps = () => {
    return axios
        .get(`http://api.tvmaze.com/shows/${show}/episodes`)
        .then((res) => {
            return res.data;
        });
};

// Episodes
function* fetchEps() {
    try {
        let episodes = yield call(getEps);
        yield put(episodeFetchSuccess(episodes));
    } catch (e) {
        yield put({ type: "FETCH_FAILED" });
    }
}

export function* watchEpisodes() {
    yield takeEvery("UPDATE_EPISODES", fetchEps);
}

//Shows
function* fetchShow() {
    try {
        let show = yield call(getShow);
        yield put(showFetchSuccess(show));
    } catch (e) {
        yield put({ type: "FETCH_FAILED" });
    }
}

export function* watchShows() {
    yield takeEvery("UPDATE_SHOW", fetchShow);
}
