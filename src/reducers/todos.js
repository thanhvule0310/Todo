// import * as actionTypes from "../constants/actionTypes";
// import { updateObject } from "../utils/utility";

const initialState = {
  todos: [
    { _id: 1, text: "Do home work", isImportance: true, isFinish: false },
    { _id: 2, text: "Play chess", isImportance: false, isFinish: true },
    { _id: 3, text: "Go to work", isImportance: true, isFinish: true },
    { _id: 4, text: "Take out gabage", isImportance: false, isFinish: false },
    { _id: 5, text: "Push to github", isImportance: true, isFinish: true },
    { _id: 6, text: "Turn off my pc", isImportance: true, isFinish: false },
    { _id: 7, text: "Drop windows 10", isImportance: true, isFinish: false },
    { _id: 8, text: "Newest", isImportance: true, isFinish: false },
    { _id: 9, text: "Haha that is", isImportance: true, isFinish: false }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
