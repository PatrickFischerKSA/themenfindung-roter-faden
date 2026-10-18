import {mkdir,copyFile,cp} from 'node:fs/promises';
await mkdir('vendor/pdfjs',{recursive:true});
await mkdir('vendor/mammoth',{recursive:true});
for(const file of ['pdf.min.mjs','pdf.worker.min.mjs'])await copyFile('node_modules/pdfjs-dist/build/'+file,'vendor/pdfjs/'+file);
await copyFile('node_modules/pdfjs-dist/LICENSE','vendor/pdfjs/LICENSE');
for(const dir of ['cmaps','standard_fonts'])await cp('node_modules/pdfjs-dist/'+dir,'vendor/pdfjs/'+dir,{recursive:true});
await copyFile('node_modules/mammoth/mammoth.browser.min.js','vendor/mammoth/mammoth.browser.min.js');
await copyFile('node_modules/mammoth/LICENSE','vendor/mammoth/LICENSE');
await import('./vendor-images.mjs');
