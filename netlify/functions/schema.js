const { makeExecutableSchema } = require('graphql-tools');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');

let users = [];

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        phone: { type: GraphQLString },
    }),
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                password: { type: GraphQLString },
                phone: { type: GraphQLString },
            },
            resolve(parent, args) {
                const user = {
                    id: `${users.length + 1}`,
                    name: args.name,
                    password: args.password,
                    phone: args.phone,
                };
                users.push(user);
                return user;
            },
        },
    },
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user: {
            type: UserType,
            args: { name: { type: GraphQLString } },
            resolve(parent, args) {
                return users.find(user => user.name === args.name);
            },
        },
    },
});

module.exports = makeExecutableSchema({
    typeDefs: `
        type User {
        id: String
        name: String
        phone: String
        }

        type Query {
        user(name: String): User
        }

        type Mutation {
        createUser(name: String, password: String, phone: String): User
        }
    `,
    resolvers: {
        Query,
        Mutation,
    },
});
