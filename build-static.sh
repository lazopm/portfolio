# build source
[ ! -d "build" ] && npm run build

[ ! -d "docs" ] && mkdir docs
node build/render.bundle.js > docs/index.html
cp -a src/assets/. docs/
cp -a build/bundles/. docs/
