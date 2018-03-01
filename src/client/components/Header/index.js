import React from 'react';
import styled from 'styled-components';
import media from 'style/media';
import Terminal from 'components/Terminal';
import Face from 'components/Face';
import Links from 'components/Links';

const Container = styled.div`
    display: flex;
	flex-direction: column;
    ${media.medium` 
        flex-direction: row;
    `}
`;

const Side = styled.div`
	display: flex;
    ${media.medium` 
		order: 1;
		flex-direction: column;
	`}
`;

const Header = ({ terminalProps, ...restProps }) => (
    <Container {...restProps}>
		<Side>
			<Face/>
			<Links/>
		</Side>
        <Terminal {...terminalProps} />
    </Container>
);

export default Header;
