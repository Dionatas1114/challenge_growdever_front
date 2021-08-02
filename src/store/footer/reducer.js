export default function a(state = 0, action) {
  switch (action.type) {
    case 'x':
      return state + 1;
    case 'y':
      return state - 1;
    default:
      return state;
  }
}
