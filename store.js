import {createStore, action} from 'easy-peasy'

const store = createStore({
  posts: {
    posts: [],
    setPosts: action((state, payload) => {
      state.posts = (payload)
    })
  },
  currPost: {
    post: {},
    setPost: action((state, payload) => {
      state.post = payload
    })
  }
})

export default store