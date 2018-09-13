import { LEADERS } from '../shared/leaders'

export const Leaders = (currentState = LEADERS, action ) => {
  switch(action.type) {
    default:
      return currentState;
  }
}
