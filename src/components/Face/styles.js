import { StyleSheet } from 'aphrodite';
import theme from 'constants/termTheme';

export default StyleSheet.create({
    Ascii: {
        background: theme[7],
        color: theme[8],
        margin: 0,
        fontSize: '8px',
        lineHeight: '4px',
        fontFamily: 'monospace',
    },
});
