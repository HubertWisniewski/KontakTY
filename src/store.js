import { createStore, applyMiddleware } from "redux";
import { readContactsFromApi } from "./services/contacts";
import thunk from "redux-thunk";

const initialState = {
  data: null
};

const setContacts = data => ({
  type: "SET",
  data
});

const readContacts = () => dispatch => {
  readContactsFromApi().then(data => dispatch(setContacts(data)));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET":
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));



export const initializeData = () => {
    store.dispatch(readContacts());
}


