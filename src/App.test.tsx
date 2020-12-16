import React from "react";
import { render } from "@testing-library/react";

const configureMockStore = require("redux-mock-store").default;
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import rootSaga from "./store/sagas";
import {
    updateShow,
    updateEpisodes,
    episodeFetchSuccess,
    showFetchSuccess,
} from "../src/store/actions";
import store from "../src/store";
import App from "./App";

it("renders page links", () => {
    const appMockStore = configureMockStore();
    const store = appMockStore({});
    const { getByText } = render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    );
    const linkElement1 = getByText(/Show Information/i);
    const linkElement2 = getByText(/Episode List/i);
    expect(linkElement1).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
});

it("successfully calls Redux Actions", () => {
    const sagaMiddleware = createSagaMiddleware();
    const mockStore = configureMockStore([sagaMiddleware]);
    const store = mockStore({});
    sagaMiddleware.run(rootSaga);

    const expectedActions = [
        {
            type: "UPDATE_EPISODES",
        },
        {
            type: "EPISODES_FETCHED",
        },
        {
            type: "UPDATE_SHOW",
        },
        {
            type: "SHOW_FETCHED",
        },
    ];

    store.dispatch(updateEpisodes());
    store.dispatch(episodeFetchSuccess());

    store.dispatch(updateShow());
    store.dispatch(showFetchSuccess());

    expect(store.getActions()).toEqual(expectedActions);
});
