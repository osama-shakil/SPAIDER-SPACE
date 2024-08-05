import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import userSlice from "./user/userSlice";


const persistConfig = {
  key: "root",
  storage,
};


const rootReducer = combineReducers({
  user: userSlice,
 
});
const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

 const persistor = persistStore(store);

export { store,persistor};
