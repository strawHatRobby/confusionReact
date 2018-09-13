export const ADD_COMMENT = "ADD_COMMENT";

export const addCOmment = (dishID, rating, author, comment) => ({
    type: ADD_COMMENT,
    payload: {
      dishID: dishID,
      rating: rating,
      author: author,
      comment: comment
    }
});
