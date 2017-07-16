import { StyleSheet } from 'aphrodite';
import { blink } from 'style/animation';

export default StyleSheet.create({
    //Line
    LineContainer: {
        display: 'flex',
    },
    Text: {
        wordWrap: 'break-all',
    },
    Gutter: {
        marginRight: 5,
        paddingRight: 5,
        paddingLeft: 5,
        flexGrow: 0,
        flexShrink: 0,
        background: 'grey',
    },
    Number: {
        width: 20,
        textAlign: 'right',
        display: 'inline-block',
    },
    Cursor: {
        ...blink,
    },
});
