import React from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Line from '../Line';
import Project from 'components/Project';
import yaml from 'js-yaml';

const LineContainer = styled.div`
    margin-bottom: 2rem;
`;

const Projects = ({ projects }) => (
    <React.Fragment>
        <LineContainer>
            <a name="projects"/>
            <Line prefix>{'find ./projects -type f -exec open {} \\;'}</Line>
        </LineContainer>
        {projects.map(project => <Project key={project.id} {...project} />)}
    </React.Fragment>
);

Projects.defaultProps = {
    projects: [],
};

export default graphql(gql`
    query { 
        user(login: "lazopm") {
            repositories(
                privacy: PUBLIC
                isFork: false
                first: 30
                affiliations: [OWNER]
                orderBy: { field: CREATED_AT, direction: DESC },
            ){
                nodes {
                    id
                    name
                    description
                    demoUrl: homepageUrl
                    sourceUrl: url
                    readme: object(expression: "master:README.md") {
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
`, {
    props: ({ data }) => ({
        projects: data.user.repositories.nodes.map(project => ({
            ...project,
            topics: project.topics.nodes.map(node => node.topic.name),
        })),
    }),
})(Projects);
