import { FETCH_POSTS, FETCH_USERS, FILTER_BY_AUTHOR } from "./types";

const initialState = {
  posts: [],
  filteredPosts: [],
  users: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payloadPosts };
    case FETCH_USERS:
      return { ...state, users: action.payloadUsers };

    case FILTER_BY_AUTHOR:
      let value = action.payload;
      if (value === "" || value === "undefined" || !value) return state;
      let author = state.users.find((user) =>
        user.name.toLowerCase().includes(value)
      );
      if (!author) return { ...state, filteredPosts: [] };
      let postsNew = state.posts.filter((post) => post.userId === author.id);
      return { ...state, filteredPosts: postsNew };

    default:
      return state;
  }
};
