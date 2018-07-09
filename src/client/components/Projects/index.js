import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Project from './Project';

const query = gql`
    query {
        user(login: "lazopm") {
            pinnedRepositories(first: 6) {
                nodes {
                    id
                }
            }
            repositories(
                privacy: PUBLIC
                isFork: false
                first: 30
                affiliations: [OWNER]
                orderBy: { field: CREATED_AT, direction: DESC }
            ) {
                nodes {
                    id
                    name
                    description
                    demoUrl: homepageUrl
                    sourceUrl: url
                    readmeMarkdown: object(expression: "master:README.md") {
                        ... on Blob {
                            text
                        }
                    }
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

const Projects = () => (
    <Query query={query}>
        {({ data }) => {
            const allProjects = data.user.repositories.nodes.map(project => ({
                ...project,
                topics: project.topics.nodes.map(node => node.topic.name),
            }));
            const pinnedIds = data.user.pinnedRepositories.nodes
                .map(node => node.id);
            const projects = allProjects.sort(
                (a, b) => {
                    const ai = pinnedIds.indexOf(a.id);
                    const bi = pinnedIds.indexOf(b.id);
                    if (ai === -1 || bi === -1) return 0;
                    return ai - bi;
                }
            );
            return (
                <React.Fragment>
                    {projects.map(project => <Project key={project.id} {...project} />)}
                </React.Fragment>
            );
        }}
    </Query>
);

Projects.defaultProps = {
    projects: [],
};

export default Projects;
