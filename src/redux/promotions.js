import { PROMOTIONS } from '../shared/promotion'

export const Promotions = (currentState = PROMOTIONS, action ) => {
  switch(action.type) {
    default:
      return currentState;
  }
}
