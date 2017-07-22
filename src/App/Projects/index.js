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

const Projects = () => [
    <Ezpz key="ezpz"/>,
    <GardenBlog key="gardenBlog"/>,
    <GardenApi key="garenApi"/>,
    <HearthstoneGG key="hsgg"/>,
    <LambOnline key="lambOnline"/>,
    <OldPortfolio key="oldPortfolio"/>,
    <PoeConverter key="poeConverter"/>,
    <UsnReact key="usnReact"/>,
    <WebScrap key="webScrap"/>,
];

export default Projects;
