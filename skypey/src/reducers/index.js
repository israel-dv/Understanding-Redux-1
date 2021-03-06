import { combineReducers } from "redux";

import activeUserId from "./activeUserId";
import contacts from "./contacts";
import messages from "./messages";
import typing from "./typing";
import user from "./user";

export default combineReducers({
  user,
  contacts,
  activeUserId,
  messages,
  typing,
});
