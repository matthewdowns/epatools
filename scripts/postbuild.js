const { copyFileSync, existsSync, writeFileSync } = require('fs');
const { join, resolve } = require('path');
const pkg = require('../package.json');

const basePath = resolve(__dirname, '../');
const distPath = resolve(__dirname, '../dist');

writeFileSync(join(distPath, 'package.json'), JSON.stringify({
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    keywords: pkg.keywords,
    homepage: pkg.homepage,
    bugs: pkg.bugs,
    license: pkg.license,
    author: pkg.author,
    repository: pkg.repository,
    main: 'index.js',
    dependencies: pkg.dependencies,
    engines: pkg.engines
}, null, 4));

if (existsSync(join(basePath, 'README.md'))) {
    copyFileSync(join(basePath, 'README.md'), join(distPath, 'README.md'));
}

if (existsSync(join(basePath, 'LICENSE'))) {
    copyFileSync(join(basePath, 'LICENSE'), join(distPath, 'LICENSE'));
}
