const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = `
    type Project {
        name: String
        date: String
    }
    type Query {
        project(id: ID!): Project
        projects: [Project]
    }
`;

const resolvers = {
    Query: {
        project: (...args) => {
            return { 
                id: '123',
                name: 'split'
            };
        },
        projects: () => {
            return [{ 
                id: '123',
                name: 'split'
            }];
        }
    },
    Project: {
        date: (...args) => {
            return 'hehexd';
        },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
