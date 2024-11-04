import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  dataUsers: [{
    password: 'Lvov1715',
    mail: 'chos.94@mail.com'
  }]
};

export const logInSlice = createSlice({
  name: "logIn",
  initialState: initialState,
  reducers: {
    addData(state, action) { 
      console.log(action.payload)
      state.dataUsers.push(action.payload)
    },
  },
});

export const selectLogIn = (state) => state.dataUsers; // useSelector

export const { addData} = logInSlice.actions; // functions

export default logInSlice.reducer;
