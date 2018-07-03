import { MEDIUM, LARGE } from 'constants/breakpoints';

const media = {
    medium: `@media (min-width: ${MEDIUM}px)`,
    large: `@media (min-width: ${LARGE}px)`,
    toLarge: `@media (max-width: ${LARGE}px)`,
};

export default media;
