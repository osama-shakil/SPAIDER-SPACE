import { createSlice } from "@reduxjs/toolkit";
import { getPromptResponse } from "./chatThunk";

const initialState = {
  chatData: [],
  loader: false,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,

  extraReducers: (builder) => {
    builder
      //Login User
      .addCase(getPromptResponse.pending, (state) => {
        state.loader = true;
      })
      .addCase(getPromptResponse.fulfilled, (state, action) => {
       
        let temp = state.chatData ? state.chatData : [];
        temp.push(action.payload);
        state.chatData = temp;
        state.loader = false;
      })
      .addCase(getPromptResponse.rejected, (state) => {
        state.loader = false;
      });
  },
});

export default chatSlice.reducer;
