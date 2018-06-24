import React from 'react';
import styled from 'styled-components';
import theme from 'constants/termTheme';
import Markdown from 'react-markdown';
import Icon from '../Icon';

const Container = styled.div`
    border-bottom: solid 1px ${theme[1]};
    padding-bottom: 1rem;
`;
const Name = styled.h2`
    font-size: 1.2rem;
`;

const Description = styled.span`
    font-size: 1rem;
    color: ${theme[3]};
`;

const Readme = styled.div`
    h1, h2 {
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
    readme,
}) => (
    <Container>
        {readme
            ? (
                <Readme>
                    <Markdown source={readme.text} />
                </Readme>
            )
            : (
                <React.Fragment>
                    <Name>{name}</Name>
                    {description && <Description> {description}</Description>}
                    <Icon icon="github"/>
                </React.Fragment>
            )
        }
    </Container>
);

export default Project; 
