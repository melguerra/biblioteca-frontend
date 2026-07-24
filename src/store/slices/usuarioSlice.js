import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usuario: null,
  token: null,
};

const usuarioSlice = createSlice({
  name: "usuario",

  initialState,

  reducers: {
    iniciarSesion: (state, action) => {
      state.usuario = action.payload.usuario;
      state.token = action.payload.token;
    },

    cerrarSesion: (state) => {
      state.usuario = null;
      state.token = null;
    },
  },
});

export const { iniciarSesion, cerrarSesion } = usuarioSlice.actions;

export default usuarioSlice.reducer;