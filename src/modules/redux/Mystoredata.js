import { configureStore } from '@reduxjs/toolkit'
import myreduserfucn from './Myreduxfunction';


export const mystore = configureStore({
  reducer: {
    counter:myreduserfucn
  },
})