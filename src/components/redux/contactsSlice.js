import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'Contacts',
  storage,
  whitelist: ['items'],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, { payload }) {
      state.items.push(payload);
    },

    deleteContact(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload.id);
    },

    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;
