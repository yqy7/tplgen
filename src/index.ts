import * as fs from 'fs';
import * as path from 'path';
import * as Handlebars from 'handlebars';

class TplGenOptions {
    templateDir: string;
    outDir: string;
    context: any;
}

export = async function(options: TplGenOptions) {
    await walk(options.templateDir, options.outDir, options.context);
}

async function walk(dirname: string, outDir: string ,context: any) {
    const dir = await fs.promises.opendir(dirname);

    for await (const dirent of dir) {
        let direntPath = path.resolve(dirname, dirent.name);
    
        let outPath = path.resolve(outDir, dirent.name);
        outPath = compile(outPath, context);

        if (dirent.isDirectory()) {
            await fs.promises.mkdir(outPath, {recursive: true}).catch(e => console.log(e));
            await walk(direntPath, outPath, context);
        } else {
            let text = await fs.promises.readFile(direntPath, 'utf8');
            text = compile(text, context);
            await fs.promises.writeFile(outPath, text, 'utf8');
        }
    }
}

function compile(text: string, context: any): string {
    let tpl = Handlebars.compile(text);
    return tpl(context);
}