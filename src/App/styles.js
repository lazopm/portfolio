import { StyleSheet } from 'aphrodite';
import { mediumUp, largeUp } from 'style/breakpoints';

export default StyleSheet.create({
    Wrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto repeat(11, 200px)', 
        gridTemplateAreas: `
            "header"
            "ezpz"
            "ezpz"
            "gardenBlog"
            "gardenApi"
            "oldPortfolio"
            "lambOnline"
            "webScrap"
            "usnReact"
            "hsgg"
            "poeConverter"
            "poeConverter"`,
        '@media (min-width: 600px)': {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'auto repeat(8, 300px)', 
            gridTemplateAreas: `
                "header header"
                "ezpz ezpz"
                "ezpz ezpz"
                "gardenBlog gardenBlog"
                "gardenApi oldPortfolio"
                "lambOnline webScrap"
                "usnReact hsgg"
                "poeConverter poeConverter"
                "poeConverter poeConverter"`,
        },
        '@media (min-width: 900px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto repeat(6, 300px)', 
            gridTemplateAreas: `
                "header header header"
                "ezpz ezpz gardenBlog"
                "ezpz ezpz gardenBlog"
                "gardenApi oldPortfolio lambOnline"
                "webScrap webScrap usnReact"
                "hsgg poeConverter poeConverter"
                "hsgg poeConverter poeConverter"`,
        },
        '@media (min-width: 1200px)': {
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'auto repeat(4, 300px)', 
            gridTemplateAreas: `
                "header header header header"
                "ezpz ezpz gardenBlog gardenApi"
                "ezpz ezpz oldPortfolio oldPortfolio"
                "lambOnline webScrap poeConverter poeConverter"
                "usnReact hsgg poeConverter poeConverter"
            `,
        },
        '@media (min-width: 1650px)': {
            gridTemplateColumns: 'auto repeat(4, 400px) auto',
            gridTemplateRows: 'auto repeat(4, 400px)', 
            gridTemplateAreas: `
                "header header header header header header"
                "left ezpz ezpz gardenBlog gardenApi right"
                "left ezpz ezpz oldPortfolio oldPortfolio right"
                "left lambOnline webScrap poeConverter poeConverter right"
                "left usnReact hsgg poeConverter poeConverter right"`
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
