import { createSlice } from '@reduxjs/toolkit'

export const configSlice = createSlice({
  name: 'config',
  initialState: {
    backend: null,
    websocket: null,
  },
  reducers: {
    setBackend: (state, action) => {
      console.log(action.payload)
      state.backend = `http://${action.payload}:5000`
      state.websocket = `ws://${action.payload}:8765`
    },
  },
})

// Action creators are generated for each case reducer function
export const { setBackend } = configSlice.actions

export default configSlice.reducer