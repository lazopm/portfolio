import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

import ss from './styles';

const Project = ({
    title,
    description,
    children,
    repositoryLink,
    stack,
    className,
}) =>
    <div className={className}>
        <h1 className={css(ss.Heading)}>
            {title}
        </h1>
        <p>{description}</p>
        {children}
        links here
    </div>;

Project.defaultProps = {
    className: css(ss.Container),
};

Project.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.array,
    repositoryLink: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
};

export default Project;
