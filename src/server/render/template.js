export default (html, css) => `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <link rel="manifest" href="/assets/manifest.json">
        <link rel="shortcut icon" href="/assets/favicon.ico">
        <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">
        <title>Pablo Lazo - Portfolio</title>
        ${css}
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/js/client.bundle.js"></script>
      </body>
    </html>
`;
