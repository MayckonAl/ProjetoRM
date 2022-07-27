import { combineReducers, configureStore } from "@reduxjs/toolkit";
import escalaReducer from "../features/escala/todoSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
const persistConfig = {
  key:"root",
  version:1,
  storage,
};
const reducer = combineReducers({
  escala:escalaReducer,
})
const persistedReducer = persistReducer(persistConfig,reducer);

export const store = configureStore({
  reducer:persistedReducer,
  middleware:[thunk]
  
});
export const persistor = persistStore(store)
