import { configureStore } from '@reduxjs/toolkit'
import configReducer from './config';

export default configureStore({
  reducer: {
    config: configReducer,
  },
})