import React from 'react';

const Icon = ({ name }) =>
    <svg class="icon" style={{width: '48px', height: '48px'}}>
        <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref={`/icons/solid.svg#${ name }`}
        />
    </svg>;

export default Icon;
