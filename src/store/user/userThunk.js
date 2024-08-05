import { getFirebase, getUsersCollection } from "@/lib/firebaseUtils";
import { getInitials } from "@/utils/functions";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
export const loginUser = createAsyncThunk(
  "user/login",
  async ({ payload, onSuccess, onError }, thunkAPI) => {
    try {
      const firebase = await getFirebase();
      let usersCollection = await getUsersCollection();
      // Sign in the user with email and password
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password);
      const user = response.user.uid;
      const query = await usersCollection.doc(user).get();

      if (query.exists) {
        const userData = { id: query.id, ...query.data() };
        onSuccess(userData);
        return userData;
      } else {
        toast.error("Your account data have been deleted from database");
        return thunkAPI.rejectWithValue("User data not found");
      }
    } catch (error) {
      console.error("error: ", error.message);
      toast.error("Invalid login credentials, please try again.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ payload, onSuccess, onError }, thunkAPI) => {
	console.log("payload======",payload)
    const firebase = await getFirebase();
    let usersCollection = await getUsersCollection();
    await firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(async (data) => {
        usersCollection
          .doc(data.user.uid)
          .set({
            email: payload.email,
            firstName: payload.firstName,
            lastName: payload.lastName,
            createdAt: firebase.firestore.Timestamp.now(),
            updatedAt: firebase.firestore.Timestamp.now(),
          })
          .then((res) => {
            toast.success("Account created successfully");
            onSuccess();
            return res;
          })
          .catch((err) => {
            toast.error(err?.message||"Account already exists");
            return thunkAPI.rejectWithValue(err);
          });
      })
      .catch((error) => {
        console.error("err: ", err);
        toast.error(err?.message);
        return thunkAPI.rejectWithValue(error);
      });
  }
);

export const loginWithGoogle = createAsyncThunk(
  'user/loginWithGoogle',
  async ({ onSuccess, onError }, thunkAPI) => {
    const firebase = await getFirebase();
    const usersCollection = await getUsersCollection();
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const result = await firebase.auth().signInWithPopup(provider);
      console.log('result: ', result);
      const { email, uid, displayName, photoURL } = result?.user;

      const query = await usersCollection.doc(uid).get();

      if (query.exists) {
        const userData = { id: query.id, ...query.data() };
        onSuccess(userData);
        return userData;
      } else {
        const userData = {
          email: email,
          firstName: displayName,
          lastName: "",
          initials: getInitials(displayName),
          communities: [],
          points:0,
          profileImage: photoURL,
          createdAt: firebase.firestore.Timestamp.now(),
          updatedAt: firebase.firestore.Timestamp.now(),

        };

        await usersCollection.doc(uid).set(userData);
        onSuccess(userData);
        console.log('User created: ', userData);
        return userData;
      }
    } catch (error) {
      toast.error(error.message || "An error occurred during Google login");
      onError && onError(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const logout = createAsyncThunk("user/logout", async ({}, thunkAPI) => {
  const firebase = await getFirebase();
  firebase
    .auth()
    .signOut()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("error: ", error);
      toast.error(error?.message);
      return thunkAPI.rejectWithValue(error);
    });
});