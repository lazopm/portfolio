import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
    Active: {
        gridArea: 'initial',
        gridRowStart: '2',
        gridRowEnd: 'span 13',
        gridColumnStart: '1',
        gridColumnEnd: 'span 1',
        zIndex: 1,
        '@media (min-width: 600px)': {
            gridColumnEnd: 'span 2',
            gridRowEnd: 'span 8',
        },
        '@media (min-width: 900px)': {
            gridColumnEnd: 'span 3',
            gridRowEnd: 'span 5',
        },
        '@media (min-width: 1200px)': {
            gridColumnEnd: 'span 4',
            gridRowEnd: 'span 4',
        },
        '@media (min-width: 1650px)': {
            gridColumnStart: '2',
        },
    },
});
