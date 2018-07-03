import React from 'react';
import styled from 'styled-components';
import media from 'style/media';

import Header from 'components/Header';
import Footer from 'components/Footer';
import MainContent from 'components/MainContent';
import { injectGlobal } from 'styled-components';

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: #0e1113;
    }
    a {
        color: #6699CC;
        text-decoration: none;
    }
    p {
        line-height: 150%;
    }
`;

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    .hide {
        display: none;
        ${media.medium} {
            display: initial;
        }
    }
`;

const App = () => (
    <Container>
        <Header />
        <MainContent />
        <Footer />
    </Container>
);

export default App;
