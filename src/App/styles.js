import { StyleSheet } from 'aphrodite';
import { mediumUp, largeUp } from 'style/breakpoints';

export default StyleSheet.create({
    Wrapper: {
        display: 'grid',
        overflowX: 'hidden',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto repeat(13, auto)', 
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
            "lambOnline"
            "footer"`,
        '@media (min-width: 700px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'auto repeat(8, auto)', 
            gridTemplateAreas: ` "header header"
                "ezpz ezpz"
                "usnReact webScrap"
                "gardenBlog gardenBlog"
                "hsgg gardenApi"
                "hsgg poeConverter"
                "oldPortfolio oldPortfolio"
                "lambOnline lambOnline"
                "lambOnline lambOnline"
                "footer footer"`,
        },
        '@media (min-width: 1000px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto repeat(5, auto)', 
            gridTemplateAreas: `
                "header header header"
                "ezpz ezpz usnReact"
                "hsgg gardenBlog gardenApi"
                "hsgg oldPortfolio oldPortfolio"
                "poeConverter lambOnline lambOnline"
                "webScrap lambOnline lambOnline"
                "footer footer footer"`,
        },
        '@media (min-width: 1500px)': {
            gridTemplateColumns: 'auto repeat(3, 500px) auto',
            gridTemplateRows: 'auto repeat(5, auto)', 
            gridTemplateAreas: `
                "header header header header header"
                "left ezpz ezpz usnReact right"
                "left hsgg gardenBlog gardenApi right"
                "left hsgg oldPortfolio oldPortfolio right"
                "left poeConverter lambOnline lambOnline right"
                "left webScrap lambOnline lambOnline right"
                "left footer footer footer right"`,
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
