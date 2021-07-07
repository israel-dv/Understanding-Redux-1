import { generateUser } from "../data";

export default function user(state = generateUser(), action) {
  return state;
}
