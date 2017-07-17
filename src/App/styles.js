import { StyleSheet } from 'aphrodite';
import { mediumUp, largeUp } from 'style/breakpoints';

export default StyleSheet.create({
    Wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    Header: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        [largeUp]: { 
            flexWrap: 'nowrap',
        },
    },
    Lazo: {
        display: 'none',
        [mediumUp]: {
            display: 'initial',
        }
    }
});
