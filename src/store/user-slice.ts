import { Tokens, User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IninitialState = {
  user: User | null;
  tokens: Tokens | null;
};

const initialState: IninitialState = {
  user: null,
  tokens: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = null;
      state.tokens = null;
    },
    setTokens: (state, action: PayloadAction<Tokens>) => {
      state.tokens = action.payload;
    },
  },
});
