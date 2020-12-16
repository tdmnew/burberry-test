import { all } from "redux-saga/effects";
import { watchShows, watchEpisodes } from "./fetchData";

export default function* rootSaga() {
    yield all([watchEpisodes(), watchShows()]);
}
