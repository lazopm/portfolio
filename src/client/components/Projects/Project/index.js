import React from 'react';
import styled from 'styled-components';
import theme from 'constants/termTheme';
import Markdown from 'react-markdown';
import Icon from 'components/Icon';

const Container = styled.div`
    padding: 1rem;
    margin-bottom: 2rem;
    background: #1c2125;
`;

const Name = styled.h2`
    font-size: 1.2rem;
`;

const Description = styled.span`
    font-size: 1rem;
    color: ${theme[3]};
`;

const Topics = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;
`;

const Topic = styled.div`
    font-size: 0.85rem;
    margin: 0 5px;
    padding: 3px 6px;
    border-radius: 5px;
    background: ${theme[1]};
`;

const Links = styled.div`
    margin: 0 -5px;
`;

const Link = styled.a`
    padding: 0 5px;
`;

const Readme = styled.div`
    h1,
    h2 {
        font-size: 1.5rem;
    }
    pre {
        background: ${theme[1]};
        padding: 1rem;
    }
`;

const Project = ({
    name,
    description,
    topics,
    portfolioMarkdown,
    readmeMarkdown,
    sourceUrl,
    demoUrl,
}) => (
    <Container>
        {topics.length ? (
            <Topics>
                {topics.map(topic => <Topic key={topic}>{topic}</Topic>)}
            </Topics>
        ) : null}
        {portfolioMarkdown || readmeMarkdown ? (
            <Readme>
                <Markdown
                    source={
                        portfolioMarkdown
                            ? portfolioMarkdown.text
                            : readmeMarkdown.text
                    }
                />
            </Readme>
        ) : (
            <React.Fragment>
                <Name>{name}</Name>
                {description && <Description> {description}</Description>}
            </React.Fragment>
        )}
        <Links>
            {sourceUrl && (
                <Link
                    href={sourceUrl}
                    target="__blank"
                    rel="noopener noreferrer"
                >
                    SOURCE
                </Link>
            )}
            {demoUrl && (
                <Link href={demoUrl} target="__blank" rel="noopener noreferrer">
                    DEMO
                </Link>
            )}
        </Links>
    </Container>
);

export default Project;
