import { StyleSheet } from 'aphrodite';
import theme from 'constants/termTheme';

export default StyleSheet.create({
    Container: {
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
    },
    Content: {
        flexGrow: 1,
    },
    Inactive: {
        cursor: 'pointer',
        ':hover': {
            zIndex: 1,
            transform: 'scale(1.025)',
        },
    },
    Active: {
        gridArea: 'initial',
        gridRowStart: '2',
        gridRowEnd: 'span 13',
        gridColumnStart: '1',
        gridColumnEnd: 'span 1',
        zIndex: 1,
        '@media (min-width: 700px)': {
            gridColumnEnd: 'span 2',
            gridRowEnd: 'span 8',
        },
        '@media (min-width: 1000px)': {
            gridColumnEnd: 'span 3',
            gridRowEnd: 'span 5',
        },
        '@media (min-width: 1500px)': {
            gridColumnStart: '2',
        },
    },
    Heading: {
        display: 'flex',
        fontSize: '2rem',
        margin: '5px',
        marginLeft: '10px', 
        justifyContent: 'space-between',
    },
    Description: {
        fontSize: '1.2rem',
        margin: 10,
    },
    CloseIcon: {
        fill: theme[8],
        height: '36px',
        width: '36px',
        cursor: 'pointer',
    },
});
