import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "cookies-next";
import {
  fetchAllUsers,
  fetchLeaderBoardAllTime,
  fetchLeaderBoardSevenDays,
  fetchLeaderBoardThirtyDays,
  loginUser,
  loginWithGoogle,
  logout,
  registerUser,
  updateChatSettings,
  updateNotificationSettings,
  updateTheme,
  updateTimezone,
  updateUserProfile,
} from "./userThunk";

const initialState = {
  user: null,
  uid: null,
  isLoading: false,
  token: null,
  leaderAllTime: [],
  leaderThirtyDays: [],
  leaderSevenDays: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    retoreUserDetails: (state) => {
      const isUser = getCookie("user");
      const isUid = getCookie("uid");
      let user = isUser ? JSON.parse(isUser) : null;
      let userid = isUid ? isUid : null;

      state.uid = userid ? userid : null;
      state.user = user ? user : null;
    },
    updateUserNotificationSettings: (state, action) => {
      if (state.user) {
        state.user.notificationSettings = action.payload.notificationSettings;
      }
    },
    updateUserChatSettings: (state, action) => {
      if (state.user) {
        state.user.chatSettings = action.payload.chatSettings;
      }
    },
    updateUserTheme: (state, action) => {
      if (state.user) {
        state.user.theme = action.payload.theme;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      //Login User
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.uid = action.payload.id;
        setCookie("uid", action.payload.id);
        setCookie("user", action.payload);
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      // Login with google
      .addCase(loginWithGoogle.pending, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log("action.payload: ", action.payload);
        state.uid = action.payload.id;
        setCookie("uid", action.payload.id);
        setCookie("user", action.payload);
        state.isLoading = false;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.isLoading = false;
      })
      // Register User
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      // Logout
      .addCase(logout.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const {
  retoreUserDetails,
  updateUserNotificationSettings,
  updateUserChatSettings,
  updateUserTheme,
} = userSlice.actions;

export default userSlice.reducer;
