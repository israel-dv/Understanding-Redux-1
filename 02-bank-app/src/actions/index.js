export function setMoney(quantity) {
  return {
    type: "NEW_QUANTITY",
    payload: quantity,
  };
}
