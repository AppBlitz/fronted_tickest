import { createSlice } from "@reduxjs/toolkit"


const user = {
  fullName: null,
  password: null,
  email: null,
  phoneNumber: null
}
const initialState = user


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {

      const { fullName, password, email, phoneNumber } = action.payload;
      state.fullName = fullName;
      state.email = email;
      state.password = password;
      state.phoneNumber = phoneNumber;
    }
  }

})

export { userSlice };
export const { addUser } = userSlice.actions

