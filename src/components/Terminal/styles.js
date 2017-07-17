import { StyleSheet } from 'aphrodite';
import theme from 'constants/termTheme';
import { largeUp } from 'style/breakpoints';

export default StyleSheet.create({
    Container: {
        color: theme[7],
        background: theme[0],
        fontFamily: 'Inconsolata',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        order: 3,
        [largeUp]: {
            order: 2,
        }
    },
    Lines: {
        flexGrow: 1,
    },
});
