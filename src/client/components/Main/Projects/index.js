import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Line from '../Line';
import Project from 'components/Project';

const Projects = ({ projects }) => (
    <React.Fragment>
        <a name="projects"/>
        <Line prefix>{'find ./projects -type f -exec open {} \\;'}</Line>
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
            readme: object(expression: "master:README.md") {
                ... on Blob {
                 text
                }
            }
            topics: repositoryTopics(first: 20) {
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
        projects: data.user.repositories.nodes,
    }),
})(Projects);
