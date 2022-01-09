import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from './contacts-operations';
import { changeFilter } from './contacts-actions';

export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const contacts = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export default combineReducers({ contacts, filter });
