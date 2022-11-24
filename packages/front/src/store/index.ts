import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import search from '../modules/search/reducers';

export const store = configureStore({
  reducer: combineReducers({
    search
  })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
