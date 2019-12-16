# build source
rm -rf build
npm run build

# github pages  
rm -rf docs
mkdir docs
node build/render.bundle.js > docs/index.html
cp -a src/assets/. docs/
cp -a build/bundles/. docs/
