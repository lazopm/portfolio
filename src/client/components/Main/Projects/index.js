import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Line from '../Line';

const Projects = ({ projects }) => (
    <React.Fragment>
        <Line prefix>{'find ./projects -type f -exec open {} \\;'}</Line>
		{projects.map(project => (
			<div key={project.id}>{project.title}</div>
		))}
    </React.Fragment>
);

Projects.defaultProps = {
    projects: [],
};

export default graphql(gql`
	query {
		projects {
			id
			title
			description
			tags
		}
	}
`, {
    props: ({ data }) => ({
        projects: data.projects,
    }),
})(Projects);
