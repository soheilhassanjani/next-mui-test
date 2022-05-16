export const initialStateAppLayout = {
  open: false,
};

const appLayoutReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { open: !state.open };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export default appLayoutReducer;
