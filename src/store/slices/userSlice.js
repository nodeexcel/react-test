import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialValue: {
    name: "",
    email: "",
    username: "",
    mobile: "",
    roleKey: "",
    password: "",
  },
  allUsers: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.allUsers.push(action.payload);
    },
    deletUserData: (state, action) => {
      state.allUsers = state.allUsers.filter((_, id) => id !== action.payload);
    },
    updateUserData: (state, action) => {
      state.allUsers[action.payload.id] = action.payload.data;
    },
    updateUserById: (state, action) => {
      state.initialValue = state.allUsers[action.payload];
      state.initialValue.password = "";
    },
    resetCurrentForm: (state) => {
      state.initialValue.name = "";
      state.initialValue.email = "";
      state.initialValue.username = "";
      state.initialValue.mobile = "";
      state.initialValue.roleKey = "";
      state.initialValue.password = "";
    },
  },
});

export const {
  setUserData,
  deletUserData,
  updateUserData,
  updateUserById,
  resetCurrentForm,
} = userSlice.actions;

export default userSlice.reducer;
