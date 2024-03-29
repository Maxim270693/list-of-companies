import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useSelector } from "react-redux";
import listCompany from "../redux/slices/listCompanySlice";
import employeeCompany from "../redux/slices/employeeCompanySlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { RootStateType } from "../types/types";

export const rootReducer = combineReducers({
  listCompany,
  employeeCompany,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
