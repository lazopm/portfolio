import { StyleSheet } from 'aphrodite';
import { largeUp } from 'style/breakpoints';

export default StyleSheet.create({
    Header: {
        display: 'flex',
        flexWrap: 'wrap',
        [largeUp]: { 
            flexWrap: 'nowrap',
        },
    },
});
