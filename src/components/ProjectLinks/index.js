import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

import ss from './styles';
import Icon from 'components/Icon';

const ProjectLinks = ({
    repository,
    demo,
    stack,
    iconClassName,
}) =>
    <div className={css(ss.Container)}>
        {repository &&
            <a
                href={repository}
                className={css(ss.Link)}
                onClick={e => e.preventPropagation()}
            >
                <Icon
                    name="code"
                    className={iconClassName}
                />
            </a>
        }
        {stack &&
            <a
                href={repository}
                className={css(ss.Link)}
                onClick={e => e.preventPropagation()}
            >
                <Icon
                    name="bars"
                    className={iconClassName}
                />
            </a>
        }
        {demo &&
            <a
                href={demo}
                className={css(ss.Link)}
                onClick={e => e.preventPropagation()}
            >
                <Icon
                    name="external-link"
                    className={iconClassName}
                />
            </a>
        }
    </div>;

ProjectLinks.defaultProps = {
    iconClassName: css(ss.Icon),
};

ProjectLinks.propTypes = {
    iconClassName: PropTypes.string,
    repository: PropTypes.string,
    demo: PropTypes.string,
    stack: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectLinks;
