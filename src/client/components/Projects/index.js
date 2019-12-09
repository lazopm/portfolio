import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const Projects = ({ githubData }) => {
    const projects = githubData.user.repositories.nodes
        .filter(project => project.portfolioMarkdown)
        .map(project => ({
            ...project,
            topics: project.topics.nodes.map(node => node.topic.name),
        }));

    githubData.user.pinnedRepositories.nodes
        .map(node => node.id)
        .reverse()
        .forEach(pinnedId => {
            const index = projects.findIndex(project => project.id === pinnedId);
            if (index !== -1) { 
                const [project] = projects.splice(index, 1);
                projects.unshift(project);
            }
        });
    return (
        <React.Fragment>
            {projects.map(project => <Project key={project.id} {...project} />)}
        </React.Fragment>
    );
}

export default Projects;
