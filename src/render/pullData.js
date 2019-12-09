import { GraphQLClient } from 'graphql-request';

const GITHUB_URL = 'https://api.github.com/graphql';
const query = `
    query {
        user(login: "lazopm") {
            pinnedRepositories(first: 6) {
                nodes {
                    id
                }
            }
            repositories(
                isFork: false
                first: 30
                affiliations: [OWNER]
                orderBy: { field: CREATED_AT, direction: DESC }
            ) {
                nodes {
                    id
                    isPrivate
                    name
                    demoUrl: homepageUrl
                    sourceUrl: url
                    portfolioMarkdown: object(
                        expression: "master:PORTFOLIO.md"
                    ) {
                        ... on Blob {
                            text
                        }
                    }
                    topics: repositoryTopics(first: 10) {
                        nodes {
                            topic {
                                name
                            }
                        }
                    }
                }
            }
        }
    }
`;


const pullData = async () => {
    const graphQLClient = new GraphQLClient(GITHUB_URL, {
        headers: {
            authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
    })
    const data = await graphQLClient.request(query);
    return data;
}

export default pullData

