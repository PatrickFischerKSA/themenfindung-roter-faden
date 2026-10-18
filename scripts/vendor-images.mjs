import {mkdir,copyFile,readdir} from 'node:fs/promises';
for(const dir of ['vendor/tesseract/core','vendor/tesseract/lang'])await mkdir(dir,{recursive:true});
for(const file of ['tesseract.min.js','worker.min.js'])await copyFile('node_modules/tesseract.js/dist/'+file,'vendor/tesseract/'+file);
await copyFile('node_modules/tesseract.js/LICENSE.md','vendor/tesseract/LICENSE.md');
await copyFile('node_modules/tesseract.js-core/LICENSE','vendor/tesseract/core/LICENSE');
for(const file of await readdir('node_modules/tesseract.js-core'))if(file.endsWith('.wasm.js'))await copyFile('node_modules/tesseract.js-core/'+file,'vendor/tesseract/core/'+file);
for(const lang of ['deu','eng']){await copyFile(`node_modules/@tesseract.js-data/${lang}/4.0.0_best_int/${lang}.traineddata.gz`,`vendor/tesseract/lang/${lang}.traineddata.gz`);}
