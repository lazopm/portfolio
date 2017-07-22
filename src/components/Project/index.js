import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
    title,
    description,
    children,
    repositoryLink,
    stack,
    className,
    active,
}) =>
    <div className={className}>
        {children}
        <div>
        links here
        </div>
    </div>;

Project.defaultProps = {
    active: false,
};

Project.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.array,
    repositoryLink: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
    active: PropTypes.bool.isRequired,
};

export default Project;
