import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from "./type";

export const addContact = (newContact) => {
  return{
    type: ADD_CONTACT,
    payload: newContact
  }
}
export const deleteContact = (id) => {
  return{
    type: DELETE_CONTACT,
    payload: id
  }
}
export const editContact = (id, updatedContact) => {
  return{
    type: EDIT_CONTACT,
    payload: {id, updatedContact}
  }
}