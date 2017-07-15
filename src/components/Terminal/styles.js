import { StyleSheet } from 'aphrodite';
import { bgDark, textLight } from 'constants/colors';
import { blink } from 'style/animation';

export default StyleSheet.create({
    Container: {
        color: textLight,
        background: bgDark, 
        height: 480,
        width: 640,
        fontFamily: 'Inconsolata', 
    },
    Blink: blink
});
