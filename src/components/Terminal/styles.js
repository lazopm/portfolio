import { StyleSheet } from 'aphrodite';
import theme from 'constants/termTheme';

export default StyleSheet.create({
    Container: {
        color: theme[7],
        background: theme[0],
        fontFamily: 'Inconsolata',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    Lines: {
        flexGrow: 1,
    },
});
