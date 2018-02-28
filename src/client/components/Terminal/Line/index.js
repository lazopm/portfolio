import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import theme from 'constants/termTheme';

const blink = keyframes`
	50% {
	  opacity: 0;
	}
`;

const Container = styled.div`
	display: flex;
`;

const Text = styled.div`
	white-space: pre-wrap;
	${props => props.hasCursor && `
		&:after {
			width: 10px;
			background: ${theme[7]};
			content: "|";
			animation-name: ${blink};
			animation-delay: 100ms;
			animation-duration: 1s;
			animation-iteration-count: infinite;
			animation-timing-function: step-start;
		}
	`}
`;

const Gutter = styled.div`
	margin-right: 5px;
	padding-right: 5px;
	padding-left: 5px;
	flex-grow: 0;
	flex-shrink: 0;
	background: ${theme[2]};
`;

const Number = styled.span`
	width: 20px;
	color: ${theme[4]};
	text-align: right;
	display: inline-block;
`;

const Line = ({ cursor, text, number }) =>
    <Container>
        <Gutter>
            <Number>{number}</Number>
        </Gutter>
        <Text 
            dangerouslySetInnerHTML={{__html: text}}
            hasCursor={cursor} 
        />
    </Container>;

Line.defaultProps = {
    cursor: false,
};

Line.propTypes = {
    cursor: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
};

export default Line;
