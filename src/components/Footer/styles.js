import { StyleSheet } from 'aphrodite';
import theme from 'constants/termTheme';

export default StyleSheet.create({
    Container: {
        background: theme[2],
        color: 'white',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        gridArea: 'footer',
    },
    Text: {
        flexGrow: 1,
        textAlign: 'center',
    },
});
