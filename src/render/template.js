export default (html, css) => `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <meta name="description" content="Pablo Lazo, Software Developer Portfolio. Pablo is front end focused developer based in Washington, DC."/>
        <meta name="keywords" content="pablo lazo, lazopm, software developer, portfolio, web developer, front end developer"/>
        <link rel="manifest" href="/manifest.json">
        <title>Pablo Lazo - Software Developer</title>
        ${css}
      </head>
      <body>
        <div id="root">${html}</div>
        <script async src="/client.bundle.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">
      </body>
    </html>
`;
