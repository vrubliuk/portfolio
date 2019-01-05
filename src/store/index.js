import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchAuth, watchSkills, watchLanguages, watchProfile, watchProjects } from "./sagas";
import reducers from "./reducers"

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchProfile);
sagaMiddleware.run(watchSkills);
sagaMiddleware.run(watchLanguages);
sagaMiddleware.run(watchProjects);

export default store;