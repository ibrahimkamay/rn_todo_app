import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  rePassword: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserValidationInput: (state, action) => {
      const { typeOf, value } = action.payload;
      state[typeOf] = value;
    },
    signInWithEmailAndPassword: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { setUserValidationInput, signInWithEmailAndPassword } =
  userSlice.actions;

export default userSlice.reducer;
