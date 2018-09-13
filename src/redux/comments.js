import { COMMENTS } from '../shared/comments'

export const Comments = (currentState = COMMENTS, action ) => {
  switch(action.type) {
    default:
      return currentState;
  }
}
