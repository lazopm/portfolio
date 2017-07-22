import React, { Component } from 'react';

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

class Projects extends Component {
    constructor() {
        super();
        this.state = { active: 1 };
    }
    activate(i) {
        this.setState(() => ({ active: i}));
    }
    deactivate() {
        this.setState(() => ({ active: null}));
    }
    render() {
        const active = this.state.active;
        return projectComponents.map((Project, i) =>
            <Project
                key={i}
                active={active === i}
                activate={() => this.activate(i)}
                deactivate={this.deactivate.bind(this)}
            />
        );
    }
}

export default Projects;
