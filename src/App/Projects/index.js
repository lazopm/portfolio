import React from 'react';

import Ezpz from './Ezpz';
import GardenBlog from './GardenBlog';
import GardenApi from './GardenApi';
import HearthstoneGG from './HearthstoneGG';
import LambOnline from './LambOnline';
import OldPortfolio from './OldPortfolio';
import PoeConverter from './PoeConverter';
import UsnReact from './UsnReact';
import WebScrap from './WebScrap';

const projectComponents = [
    Ezpz,
    GardenBlog,
    GardenApi,
    HearthstoneGG,
    LambOnline,
    OldPortfolio,
    PoeConverter,
    UsnReact,
    WebScrap,
];

const Projects = ({
    active,
    activate,
    deactivate,
}) => projectComponents.map((Project, i) =>
    <Project
        key={i}
        active={active === i}
        activate={() => activate(i)}
        deactivate={deactivate}
    />
);

export default Projects;
