import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: '',
  token: '',
  userRole: '',
  email: ''
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, actions) => {
     const {name, userRole, token, email} = actions.payload
        state.name = name
        state.userRole = userRole
        state.token = token
        state.email = email
    },
    resetDetails: (state, actions) => {
         state.name =''
         state.email = ''
         state.userRole =''
         state.token =''
     },
  }
});

export const { setUserDetails, resetDetails } = userSlice.actions;
export default userSlice.reducer;


