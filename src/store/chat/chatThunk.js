import { axiosInstance, baseDomain } from "@/config/axios";
import { getFirebase, getUsersCollection } from "@/lib/firebaseUtils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
export const getPromptResponse = createAsyncThunk(
  "/getPromptResponse",
  async ({ payload, onSuccess, onError }, thunkAPI) => {
    try {
      const response = await fetch(`${baseDomain}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (response !== null) {
        const reader = response.body?.getReader();
        if (!reader) {
          throw new Error("Response body reader is null");
        }

        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            break;
          }

          const chunk = new TextDecoder().decode(value);
          console.log("chunk", chunk);
          const arr = chunk.split(">");
          const filteredResponse = arr[arr.length - 1];
          console.log('filteredResponse: ', filteredResponse);

          onSuccess(filteredResponse);
          // Call the callback function with each chunk
          // onDataReceived(chunk);
          return filteredResponse;
        }
      }
      return thunkAPI.rejectWithValue("Error");
      // const { data, status } = await axiosInstance.post("/chat", payload);

      // if (status === 200) {
      //   const arr = data.split(">");
      //   const filteredResponse = arr[arr.length - 1];

      //   onSuccess(filteredResponse);
      // }
      // return filteredResponse;
    } catch (error) {
      console.error("error: ", error.message);
      toast.error("something went wrong");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPromptDetailedResponse = createAsyncThunk(
  "/getPromptDetailedResponse",
  async ({ payload, onSuccess, onError }, thunkAPI) => {
    try {



      const response = await fetch(`${baseDomain}/vectordb`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (response !== null) {
        const reader = response.body?.getReader();
        if (!reader) {
          throw new Error("Response body reader is null");
        }

        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            break;
          }

          const chunk = new TextDecoder().decode(value);
          console.log("chunk", chunk);
          const arr = chunk.split(">");
          const filteredResponse = arr[arr.length - 1];
          console.log('filteredResponse: ', filteredResponse);

          onSuccess(filteredResponse);
          // Call the callback function with each chunk
          // onDataReceived(chunk);
          return filteredResponse;
        }
      }
      return thunkAPI.rejectWithValue("Error");
      // const { data, status } = axiosInstance.post("/vectordb", payload);
      // if (status === 200) {
      //   console.log("getPromptDetailedResponse: ", data);
      //   toast.success("Response generated successfully");
      // }

      // return payload;
    } catch (error) {
      console.error("error: ", error.message);
      toast.error("something went wrong");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
