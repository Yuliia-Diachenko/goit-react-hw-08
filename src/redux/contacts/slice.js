import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logOut } from "../auth/operations";

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
            items: [],
            loading: false,
            error: null
    },

   extraReducers: builder => {
        builder
        .addCase(fetchContacts.pending, state => {
            state.error = false;
            state.loading = true;
          })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
          })
        .addCase(fetchContacts.rejected, state => {
            state.loading = false;
            state.error = true;
          })
        .addCase(addContact.pending, state => {
            state.error = false;
            state.loading = true;
        })
        .addCase(addContact.fulfilled, (state, action) =>{
            state.items.push(action.payload);
            state.loading = false;
        })
        .addCase(addContact.rejected, state => {
            state.loading = false;
            state.error = true;
        })
        .addCase(deleteContact.pending, state => {
            state.loading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
           state.loading = false;
        })
        .addCase(deleteContact.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(logOut.fulfilled, state => {
            state.items = [];
            state.loading = false;
            state.error = null;
          });
    }, 
}
);
export default contactsSlice.reducer;

export const contactsReducer = contactsSlice.reducer;

