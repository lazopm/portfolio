import { StyleSheet } from 'aphrodite';
import theme from 'constants/termTheme';
import { largeUp, mediumUp } from 'style/breakpoints';

export default StyleSheet.create({
    Container: {
        background: theme[1],
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        order: 2,
        flexGrow: 1,
        [largeUp]: {
            order: 3,
            flexGrow: 'initial',
        },
    },
    Link: {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        color: theme[4],
        flexGrow: 1,
        ':hover': {
            color: theme[5],
            textDecoration: 'underline',
        }
    },
    Icon: {
        marginRight: '10px',
        height: '24px',
        width: '24px',
        fill: theme[4],
        [largeUp]: {
            height: '36px',
            width: '36px',
            marginRight: 0,
        },
    },
    Text: {
        fontSize: '1rem',
        [mediumUp]: {
            fontSize: '1.2rem',
        },
        [largeUp]: {
            display: 'none',
        },
    },
});
