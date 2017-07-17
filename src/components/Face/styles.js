import { StyleSheet } from 'aphrodite';
import theme from 'constants/termTheme';
import { mediumUp, largeUp } from 'style/breakpoints';

export default StyleSheet.create({
    Container: {
        order: 1,
    },
    Ascii: {
        background: theme[7],
        color: theme[8],
        margin: 0,
        fontFamily: 'monospace',
        fontSize: '4px',
        lineHeight: '2px',
        [mediumUp]: {
            fontSize: '6px',
            lineHeight: '3px',
        },
        [largeUp]: {
            fontSize: '8px',
            lineHeight: '4px',
        },
    },
});
