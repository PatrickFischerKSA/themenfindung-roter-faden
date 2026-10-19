import {readFile,writeFile,readdir} from 'node:fs/promises';
const root=new URL('../',import.meta.url);
const {version}=JSON.parse(await readFile(new URL('package.json',root),'utf8'));
for(const name of await readdir(root)){
 if(!name.endsWith('.js')||name.endsWith('.test.js'))continue;
 const file=new URL(name,root),source=await readFile(file,'utf8');
 const next=source.replace(/(from\s+['"])(\.\/[^'"?]+\.js)(?:\?v=[^'"]+)?(['"])/g,`$1$2?v=${version}$3`);
 if(next!==source)await writeFile(file,next);
}
const htmlFile=new URL('index.html',root),html=await readFile(htmlFile,'utf8');
await writeFile(htmlFile,html.replace(/((?:href|src)="(?:style\.css|studio\.css|app\.js|background\.js))(?:\?v=[^"]+)?"/g,`$1?v=${version}"`));
console.log('Browser assets versioned: '+version);
