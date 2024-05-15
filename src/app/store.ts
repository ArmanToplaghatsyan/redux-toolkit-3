import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filmReducer from '../features/film/filmSlice'
import genreReducer from '../features/genre/genreSlice'

export const store = configureStore({
  reducer: {
    film: filmReducer,
    genre: genreReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
