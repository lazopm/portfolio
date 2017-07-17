import { StyleSheet } from 'aphrodite';
import theme from 'constants/termTheme';
import { cream } from 'constants/colors';
import { mediumUp, largeUp } from 'style/breakpoints';

export default StyleSheet.create({
    Container: {
        order: 1,
    },
    Ascii: {
        background: cream,
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
