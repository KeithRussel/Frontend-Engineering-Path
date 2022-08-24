import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
    }
  }
  // Extra Reducers
});

// selectors
export const selectTopics = (state) => state.topics.topics;
// actions & reducers
export const { addTopic } = topicSlice.actions;
export default topicSlice.reducer;
