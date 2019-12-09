rm -rf dist
npm run build
rm -rf docs
mkdir docs

node dist/render.bundle.js > docs/index.html
cp -a assets/. docs/
cp -a dist/bundles/. docs/
