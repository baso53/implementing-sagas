import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import MySaga from "./middleware";
import { fetchDataWorker } from "./sagas";

const sagaInstance = new MySaga();
sagaInstance.registerAction('FETCH_DATA_REQUEST', fetchDataWorker);

const store = createStore(reducer, applyMiddleware(sagaInstance.middleware));

export default store;