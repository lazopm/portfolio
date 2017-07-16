import { StyleSheet } from 'aphrodite';
import theme from 'constants/termTheme';

export default StyleSheet.create({
    Container: {
        background: theme[2],
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    Link: {
        color: theme[4],
        textDecoration: 'none',
        fontSize: '1.5rem',
    }
});
