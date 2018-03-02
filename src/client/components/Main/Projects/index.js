import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Line from '../Line';
import Project from 'components/Project';

const Projects = ({ projectIds }) => (
    <React.Fragment>
        <a name="projects"/>
        <Line prefix>{'find ./projects -type f -exec open {} \\;'}</Line>
        {projectIds.map((id, i) => 
            <React.Fragment key={id}>
                <Project id={id} />
                {i < projectIds.length - 1 && <hr/>}
            </React.Fragment>
        )}
    </React.Fragment>
);

Projects.defaultProps = {
    projects: [],
};

export default graphql(gql`
	query {
		projects {
			id
		}
	}
`, {
    props: ({ data }) => ({
        projectIds: data.projects.map(project => project.id),
    }),
})(Projects);
