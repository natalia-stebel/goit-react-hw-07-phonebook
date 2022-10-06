import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
} from '.././components/API/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await addContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await deleteContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
