import * as commander from 'commander';
import * as path from 'path';
import * as fs from 'fs';

import tplgen = require('./');

const version = require('../package.json').version;

commander.version(version)
    .option('-t, --tplDir <string>', 'template directory path')
    .option('-o, --outDir <string>', 'output path', './')
    .option('-c, --configFile <string>', 'config file')
    .parse(process.argv);

if (!commander.tplDir) {
    console.error(`error: required option '-t, --tplDir <string>' not specified`);
    commander.help();
}

const tplDir = path.resolve('./', commander.tplDir);
const outDir = path.resolve('./', commander.outDir);

let context = {};
if (commander.configFile) {
    const configFile = path.resolve('./', commander.configFile);
    context = JSON.parse(fs.readFileSync(configFile, 'utf8'));
}

tplgen({ templateDir: tplDir, outDir, context });
