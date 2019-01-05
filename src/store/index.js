import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchAuth, watchGeneral, watchContacts, watchSkills, watchExperiences, watchEducation, watchLanguages, watchProjects } from "./sagas";
import reducers from "./reducers"

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchGeneral);
sagaMiddleware.run(watchContacts);
sagaMiddleware.run(watchSkills);
sagaMiddleware.run(watchExperiences);
sagaMiddleware.run(watchEducation);
sagaMiddleware.run(watchLanguages);
sagaMiddleware.run(watchProjects);

export default store;