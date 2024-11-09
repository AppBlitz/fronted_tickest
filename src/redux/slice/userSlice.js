import { createSlice } from "@reduxjs/toolkit";

const user = {
  fullName: null,
  password: null,
  email: null,
  phoneNumber: null,
  address: null,
  rol: null,
};
const initialState = user;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { fullName, password, email, phoneNumber, address, rol } =
        action.payload;
      state.fullName = fullName;
      state.email = email;
      state.password = password;
      state.phoneNumber = phoneNumber;
      state.address = address;
      state.rol = rol;
    },
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
