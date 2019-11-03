const path = require('path')
const tplgen = require('../');


tplgen({
    templateDir: path.resolve(__dirname, 'template'),
    outDir: path.resolve(__dirname, 'out'),
    context: { you: 'mmasdfasdfajjjasdfasdfsdfasdf', me: 'Pariatur pariatur enim sunt cillum ullamco excepteur ipsum deserunt.'}
});