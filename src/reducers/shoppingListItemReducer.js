export default function shoppingListItemReducer(
  state = { items: [], list: [] },
  action
) {
  console.log(action);
  switch (action.type) {
    case "INCREASE_COUNT":
      console.log("Current state.list length %s", state.list.length);
      console.log("Updating state.list length to %s", state.list.length + 1);
      return { ...state, list: state.list.concat(state.list.length + 1) };

    default:
      console.log("Initial state.items length: %s", state.items.length);
      return state;
  }
}
