import { getFirebase, getUsersCollection } from "@/lib/firebaseUtils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
export const getPromptResponse = createAsyncThunk(
  "/getPromptResponse",
  async ({ payload, onSuccess, onError }, thunkAPI) => {
    try {
       return payload
    } catch (error) {
      console.error("error: ", error.message);
      toast.error("something went wrong");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
