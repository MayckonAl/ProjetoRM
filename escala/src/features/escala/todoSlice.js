import { createSlice, nanoid } from "@reduxjs/toolkit";

const escalaSlice = createSlice({
  name: "escala",
  initialState: [],
  reducers: {
    addItem: {
      reducer(state,action){
        state.push(action.payload)
      },
      prepare(data,name){
        return{
          payload:{
            id:nanoid(),
            data:data.split('-').reverse().join('/'),name
          }
        }
      }
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = escalaSlice.actions;

export default escalaSlice.reducer;

export const selectAllPosts = ({ escala }) => escala;
