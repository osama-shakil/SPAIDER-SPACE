import { createSlice } from "@reduxjs/toolkit";
import { getPromptDetailedResponse, getPromptResponse } from "./chatThunk";

const initialState = {
  chatData: [],
  loader: false,
  detailResponse: "",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,

  reducers: {
    sendPromt: (state, action) => {
      let temp = state.chatData ? state.chatData : [];
      temp.push(action.payload);
      state.chatData = temp;
    },
    refreshChat: (state) => {
      state.chatData = [];
    },
  },

  extraReducers: (builder) => {
    builder
      // Get Response from AI
      .addCase(getPromptResponse.pending, (state) => {
        state.loader = true;
      })
      .addCase(getPromptResponse.fulfilled, (state, action) => {
        const lastIndex = state.chatData.length - 1;
        state.chatData[lastIndex].ai = action.payload;

        state.loader = false;
      })
      .addCase(getPromptResponse.rejected, (state) => {
        state.loader = false;
      })

      //
      .addCase(getPromptDetailedResponse.pending, (state) => {
        state.loader = true;
      })
      .addCase(getPromptDetailedResponse.fulfilled, (state, action) => {
        state.detailResponse= action.payload;
        state.loader = false;
      })
      .addCase(getPromptDetailedResponse.rejected, (state) => {
        state.loader = false;
      });
  },
});

export const { sendPromt , refreshChat } = chatSlice.actions;
export default chatSlice.reducer;
