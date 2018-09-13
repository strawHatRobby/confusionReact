import { PROMOTIONS } from '../shared/promotions'

export const Promotions = (currentState = PROMOTIONS, action ) => {
  switch(action.type) {
    default:
      return currentState;
  }
}
