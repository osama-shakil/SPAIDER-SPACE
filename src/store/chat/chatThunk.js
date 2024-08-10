import { axiosInstance } from "@/config/axios";
import { getFirebase, getUsersCollection } from "@/lib/firebaseUtils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
export const getPromptResponse = createAsyncThunk(
  "/getPromptResponse",
  async ({ payload, onSuccess, onError }, thunkAPI) => {
    try {
          

      const {data,status}=axiosInstance.post("/webtool/invoke",payload)
      if(status===200){
        toast.success("Response generated successfully");
      }


       return payload
    } catch (error) {
      console.error("error: ", error.message);
      toast.error("something went wrong");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPromptResponse2 = createAsyncThunk(
  "/getPromptResponse2",
  async ({ payload, onSuccess, onError }, thunkAPI) => {
    try {
          

      const {data,status}=axiosInstance.post("/retriever/invoke",payload)
      if(status===200){
        toast.success("Response generated successfully");
      }


       return payload
    } catch (error) {
      console.error("error: ", error.message);
      toast.error("something went wrong");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
