import { StyleSheet } from 'aphrodite';
import { mediumUp, largeUp } from 'style/breakpoints';

export default StyleSheet.create({
    Wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto repeat(13, 200px)', 
        gridTemplateAreas: `
            "header"
            "ezpz"
            "ezpz"
            "usnReact"
            "poeConverter"
            "hsgg"
            "hsgg"
            "gardenApi"
            "gardenBlog"
            "oldPortfolio"
            "oldPortfolio"
            "webScrap"
            "lambOnline"
            "lambOnline"`,
        '@media (min-width: 600px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'auto repeat(8, 300px)', 
            gridTemplateAreas: `
                "header header"
                "ezpz ezpz"
                "usnReact webScrap"
                "gardenBlog gardenBlog"
                "hsgg gardenApi"
                "hsgg poeConverter"
                "oldPortfolio oldPortfolio"
                "lambOnline lambOnline"
                "lambOnline lambOnline"`,
        },
        '@media (min-width: 900px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto repeat(5, 300px)', 
            gridTemplateAreas: `
                "header header header"
                "ezpz ezpz usnReact"
                "hsgg gardenBlog gardenApi"
                "hsgg oldPortfolio oldPortfolio"
                "poeConverter lambOnline lambOnline"
                "webScrap lambOnline lambOnline"`,
        },
        '@media (min-width: 1200px)': {
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'auto repeat(4, 300px)', 
            gridTemplateAreas: `
                "header header header header"
                "ezpz ezpz usnReact webScrap"
                "hsgg gardenBlog gardenBlog gardenApi"
                "hsgg poeConverter lambOnline lambOnline"
                "oldPortfolio oldPortfolio lambOnline lambOnline"`,
        },
        '@media (min-width: 1650px)': {
            gridTemplateColumns: 'auto repeat(4, 400px) auto',
            gridTemplateRows: 'auto repeat(4, 400px)', 
            gridTemplateAreas: `
                "header header header header header header"
                "left ezpz ezpz usnReact webScrap right"
                "left hsgg gardenBlog gardenBlog gardenApi right"
                "left hsgg poeConverter lambOnline lambOnline right"
                "left oldPortfolio oldPortfolio lambOnline lambOnline right"`,
        },
    },
    Header: {
        gridArea: 'header',
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
    },
    Main: {
        display: 'grid',
    },
});
