import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  value: userDto[];
};

const initialState: InitialState = {
  value: [],
};

export const friends = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setFriends: (state, action: PayloadAction<userDto[]>) => {
      state.value = action.payload;
    },
  },
});

export const {} = friends.actions;
export default friends.reducer;
