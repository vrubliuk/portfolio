import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import {
  watchUser,
  watchAuth,
  watchGeneral,
  watchContacts,
  watchSkills,
  watchExperiences,
  watchEducations,
  watchLanguages,
  watchProjects,
  watchResume
} from "./sagas";
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchUser);
sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchGeneral);
sagaMiddleware.run(watchContacts);
sagaMiddleware.run(watchSkills);
sagaMiddleware.run(watchExperiences);
sagaMiddleware.run(watchEducations);
sagaMiddleware.run(watchLanguages);
sagaMiddleware.run(watchProjects);
sagaMiddleware.run(watchResume);

export default store;
