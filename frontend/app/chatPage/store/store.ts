import { configureStore } from '@reduxjs/toolkit';
import authReducer from './fexmple.slice';
import friendsReducer from './friends-slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    authReducer,
    friendsReducer,
  },
  // middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDisppatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
