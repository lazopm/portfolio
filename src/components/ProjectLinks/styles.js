import { StyleSheet } from 'aphrodite';
import theme from 'constants/termTheme';

export default StyleSheet.create({
    Container: {
        textAlign: 'right',
        marginBottom: '5px',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    Link: {
        display: 'flex',
        alignSelf: 'flex-end',
        alignItems: 'center',
        padding: '5px',
        textDecoration: 'none',
        color: theme[2],
    },
    Icon: {
        height: '1.75rem',
        width: '1.75rem',
        marginRight: '5px',
        fill: theme[2],
    },
});
