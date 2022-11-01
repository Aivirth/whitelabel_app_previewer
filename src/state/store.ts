import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/index";

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default function configureStore() {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers: any[] = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(reducers, {}, composedEnhancers);

  return store;
}

// export default store;
