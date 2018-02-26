import React from 'react';
import styled from 'styled-components';
import theme from 'constants/termTheme';
import media from 'style/media';
import Icon from 'components/Icon';

const Container = styled.div`
    display: flex;
    flex-grow: 1;
    background: white;
    padding: 10px 20px;
    justify-content: space-around;
    flex-direction: column;
`;

const LinkIcon = Icon.extend`
    margin: 3px 10px 3px 0;
    height: 22px;
    width: 22px;
    fill: ${theme[13]};
`;

const Text = styled.span`
    font-size: 1rem;
    color: ${theme[13]};
    ${media.medium`
        font-size: 1.2rem;
    `}
`;

const Link = styled(({href, icon, text, className}) =>
    <a className={className} 
        href={href}
        title={text}
        target="_blank"
        rel="noopener noreferrer"
    >
        <LinkIcon name={icon}/>
        <Text>{text}</Text>
    </a>
)`
    text-decoration: none;
    display: flex;
    align-items: center;
    color: ${theme[2]};
    flex-grow: 1;
    &:hover {
        * {
            color: ${theme[8]} !important;
            fill: ${theme[8]} !important;
        }
    }
`;

const Links = () =>
    <Container>
        <Link
            text="github"
            href="https://www.github.com/lazopm"
            icon="github"
        />
        <Link
            text="linkedin"
            href="https://www.linkedin.com/in/pablo-lazo-b37701ba/"
            icon="linkedin"
        />
        <Link 
            text="resume"
            href=""
            icon="file-alt"
        />
        <Link
            text="email"
            icon="envelope"
            href="mailto:hi@lazopm.com"
        />
    </Container>;

export default Links;
