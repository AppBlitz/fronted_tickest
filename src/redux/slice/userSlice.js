import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../utils"

const user = {
  id: null,
  fullName: null,
  password: null,
  email: null,
  phoneNumber: null,
  address: null,
  rol: null,
};
const initialState = getItem("user") || user;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { fullName, password, email, phoneNumber, address, rol, id } =
        action.payload;
      state.fullName = fullName;
      state.email = email;
      state.password = password;
      state.phoneNumber = phoneNumber;
      state.address = address;
      state.rol = rol;
      state.id = id;
    },
    removeUser: (state, action) => {
      return { ...user }
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
