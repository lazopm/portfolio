import { StyleSheet } from 'aphrodite';
import theme from 'constants/termTheme';

const padding = {
	paddingLeft: '10px',
	paddingRight: '10px',
};

export default StyleSheet.create({
    Container: {
        display: 'flex',
        color: 'white',
    },
    Mode: {
        background: theme[13],
		...padding,
		':after': {
		}
    },
    File: {
        background: theme[1],
        flexGrow: 1,
		...padding,
    },
    Type: {
        background: theme[1],
		...padding,
    },
    OS: {
        background: theme[3],
		...padding,
    },
    Numbers: {
        background: theme[13],
		...padding,
    }
});

