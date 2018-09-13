import { DISHES } from '../shared/dishes'

export const Dishes = (currentState = DISHES, action ) => {
  switch(action.type) {
    default:
      return currentState;
  }
}
