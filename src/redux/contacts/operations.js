import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = ' https://665f58151e9017dc16f3d74a.mockapi.io/';

  
    export const addContact = createAsyncThunk(
        'contacts/addContact',
        async (newContact, thunkAPI) => {      
            
            try {
                const response = await axios.post('/contacts', newContact);
                return response.data;
            } catch (error) {
                return thunkAPI.rejectWithValue(error.message);
              }
        });
        export const deleteContact = createAsyncThunk(
            'contacts/deleteContact',
            async (contactId, thunkAPI) => {      
                
                try {
                    const response = await axios.delete(`/contacts/${contactId}`);
                    return response.data;  
                } catch (error) {
                    return thunkAPI.rejectWithValue(error.message);
                
                }
            });