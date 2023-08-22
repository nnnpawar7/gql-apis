import {todoListResolver} from './todos'
import {UserListResolver} from './user'

export const resolvers = {
    Query: {
      todos: () => todoListResolver(),
      user:()=> UserListResolver()
    },
  };