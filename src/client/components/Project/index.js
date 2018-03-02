import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const Project = ({
    title,
    description,
    tags,
    demoUrl,
    repositoryUrl,
}) => (
    <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        {tags.length && (
            <p>
                tags:<br/>
                {tags.join(', ')}
            </p>
        )}
        {demoUrl && (
            <p>
                <a href={demoUrl}>DEMO</a>
            </p>
        )}
        {repositoryUrl && (
            <p>
                <a href={repositoryUrl}>CODE</a>
            </p>
        )}
    </div>
);

export default graphql(gql`
	query Project($id: ID!) {
		project(id: $id) {
			title
            description
            tags
            demoUrl
            repositoryUrl
		}
	}
`, {
    props: ({ data }) => ({ ...data.project }),
    options: ({ id }) => ({ variables: { id } }),
})(Project);
