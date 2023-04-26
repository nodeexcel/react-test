import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
  name: "role",
  initialState: {
    initialValue: {
      roleLabel: "",
      roleKey: "",
    },
    allRoles: [
      {
        roleKey: "admin",
        roleLabel: "Admin",
      },
      {
        roleKey: "user",
        roleLabel: "User",
      },
    ],
  },
  reducers: {
    setRole: (state, action) => {
      state.allRoles.push(action.payload);
    },
    resetRoleForm: (state) => {
      state.initialValue.roleLabel = "";
      state.initialValue.roleKey = "";
    },
    updateUserRole: (state, action) => {
      state.allRoles[action.payload.id] = action.payload.data;
    },
    updateRoleById: (state, action) => {
      state.initialValue = state.allRoles[action.payload];
    },
    deleteRoleById: (state, action) => {
      state.allRoles = state.allRoles.filter((_, id) => id !== action.payload);
    },
  },
});

export const {
  resetRoleForm,
  setRole,
  updateUserRole,
  updateRoleById,
  deleteRoleById,
} = roleSlice.actions;

export default roleSlice.reducer;
