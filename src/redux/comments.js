import { COMMENTS } from '../shared/comments'
import { ADD_COMMENT, addComment } from './actions/commentActions'

export const Comments = (currentState = COMMENTS, action ) => {
  switch(action.type) {
    case ADD_COMMENT:
      var comment = action.payload;
      comment.id = currentState.length;
      comment.date = new Date().toISOString();
      console.log("Comment: ", comment);
      return currentState.concat(comment);
    default:
      return currentState;
  }
}
