import React from 'react';
import styled from 'styled-components';
import theme from 'constants/termTheme';
import Icon from 'components/Icon';

const Container = styled.div`
    display: flex;
    flex-grow: 1;
    background: #343d45;
    padding: 10px 20px;
    justify-content: space-around;
    flex-direction: column;
`;

const LinkIcon = Icon.extend`
    margin: 3px 10px 3px 0;
    height: 1rem;
    width: 1rem;
    fill: #a7adba;
`;

const Text = styled.span`
    font-family: 'Inconsolata', monospace;
    font-size: 0.875rem;
    color: #a7adba;
`;

const Link = styled(({ href, icon, text, className }) => (
    <a
        className={className}
        href={href}
        title={text}
        target="_blank"
        rel="noopener noreferrer"
    >
        <LinkIcon name={icon} />
        <Text>{text}</Text>
    </a>
))`
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${theme[2]};
    flex-grow: 1;
    &:hover {
        * {
            color: #6699cc !important;
            fill: #6699cc !important;
        }
    }
`;

const Links = () => (
    <Container>
        <Link
            text="hi@lazopm.com"
            icon="envelope"
            href="mailto:hi@lazopm.com"
        />
        <Link
            text="github"
            href="https://www.github.com/lazopm"
            icon="github"
        />
        <Link
            text="linkedin"
            href="https://www.linkedin.com/in/lazopm/"
            icon="linkedin"
        />
        <Link
            text="resume"
            href="https://drive.google.com/open?id=1FK5Lj5bKWvh-9wIAGzj5MnzVCddDGUMP"
            icon="file-alt"
        />
    </Container>
);

export default Links;
