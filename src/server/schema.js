import { makeExecutableSchema } from 'graphql-tools';
import { ObjectId } from 'mongodb';

const typeDefs = `
	type Project {
		id: ID!
		name: String!
		created: String!
	}
	type Query {
		project(id: ID!): Project
		projects: [Project!]
	}
	type Mutation {
		addProject(name: String!): Project
	}
`;

const toProject = ({ _id, created, ...fields }) => ({
	...fields,
	id: _id.toString(),
	created: String(created),
});

const resolvers = {
	Query: {
		project: async (_, { id }) => {
			const collection = db.collection('projects');
			let _id
			try {
				_id = ObjectId(id);
			} catch(err) {
				throw new Error('Invalid id');
			}
			const project = await collection.findOne({ _id });
			if (project) {
				return toProject(project);
			}
		},
		projects: async () => {
			const collection = db.collection('projects');
			const projects = await collection.find({}).toArray();
			return projects.map(toProject);
		}
	},
	Mutation: {
		addProject: async (_, args) => {
			const collection = db.collection('projects');
			const result = await collection.insertOne({
				...args,
				created: Date.now(),
			});
			if (result.insertedCount === 1) {
				return toProject(result.ops[0]);
			}
		}
	},
};

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

export default schema;