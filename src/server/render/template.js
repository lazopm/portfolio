export default (html, css, apolloState) => `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <meta name="description" content="Pablo Lazo, Software Developer Portfolio. Pablo is a Chilean developer based in Washington, DC."/>
        <meta name="keywords" content="pablo lazo, lazopm, software developer, portfolio, web developer, front end developer"/>
        <link rel="manifest" href="/assets/manifest.json">
        <link rel="shortcut icon" href="/assets/favicon.ico">
        <title>lazopm - Pablo Lazo's Software Developer Porftolio</title>
        ${css}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
            window.__APOLLO_STATE__=${apolloState};
        </script>
        <script async src="/client.bundle.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">
      </body>
    </html>
`;
