import { css } from 'styled-components';
import { medium, large } from './breakpoints';

const media = {
    medium: (...args) => css`
        @media (min-width: ${medium}px) {
          ${css(...args)}
        }
    `,
    large: (...args) => css`
        @media (min-width: ${large}px) {
          ${css(...args)}
        }
    `,
    toLarge: (...args) => css`
        @media (max-width: ${large}px) {
          ${css(...args)}
        }
    `,
};

export default media;
