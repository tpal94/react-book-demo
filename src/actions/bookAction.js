import * as actionTypes from './actionTypes';

export const createBook = (book) => {
    return {
      type: actionTypes.CREATE_NEW_BOOK,
      book: book
    }
  };

export const deleteBook = (id) => {
    return {
        type: actionTypes.REMOVE_BOOK,
        id: id
    }
}