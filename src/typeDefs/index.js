const { gql } = require('apollo-server');


export const typeDefs = `
type Todo {
    userId: Int
    id: Int
    title: String
    completed: Boolean
}

type Address {
        street: String,
        suite: String,
      }

type User {
    id: Int,
    name: String,
    username: String,
    email: String,
    address: Address
    fatherName: String!
}

type Query{
        todos: [Todo]
        user: [User]
    }
`;

