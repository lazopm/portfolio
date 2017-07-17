import { StyleSheet } from 'aphrodite';
import { blink } from 'style/animation';
import theme from 'constants/termTheme';

export default StyleSheet.create({
    //Line
    LineContainer: {
        display: 'flex',
    },
    Text: {
        wordBreak: 'break-all',
		whiteSpace: 'pre-wrap',
    },
    Gutter: {
        marginRight: 5,
        paddingRight: 5,
        paddingLeft: 5,
        flexGrow: 0,
        flexShrink: 0,
        background: theme[2],
    },
    Number: {
        width: 20,
        color: theme[4],
        textAlign: 'right',
        display: 'inline-block',
    },
    Cursor: {
        ':after': {
            width: 10,
            background: theme[7],
            content: '"|"',
            ...blink,
        }
    },
});
