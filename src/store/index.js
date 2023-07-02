import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Catalog } from '../Data';

const Information = createSlice({
  name: 'Information',
  initialState: {
    items: Catalog,
    phoneArr1: [],
    phoneArr2: [],
    results: [],
    count: 0
  },
  reducers: {
    prev(state, action) {
      if(state.count !== 0 ){
        state.count--;
      }else {
        state.count = action.payload - 10;
      }
    },
    next(state, action) {
      if((action.payload - 10) >  state.count ){
        state.count++;
      }else {
        state.count = 0;
      }
    },
    favourite(state, action) {
      state.items[action.payload].completed1 = !state.items[action.payload].completed1;
      state.phoneArr1 = state.items.filter(item => item.completed1);
    },
    boxTotal(state, action){
      state.items[action.payload].completed2 = !state.items[action.payload].completed2;
      state.phoneArr2 = state.items.filter(item => item.completed2)
    },
    search(state, action) {
      state.results = state.items.slice(0, 20).filter(user => {
        return user.name.toLowerCase().includes(action.payload);
      })
    },
    searchItem(state, action) {
      state.items = state.items.filter(item => item.name.toLowerCase() === action.payload);
      state.results = state.items.slice(0, 20);
    },
    searchItems(state) {
      state.items = Catalog;
    }
  }
})


export const InformationCart = Information.actions;

const store = configureStore({
  reducer: Information
});


export default store;