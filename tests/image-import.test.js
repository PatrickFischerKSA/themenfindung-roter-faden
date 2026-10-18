import test from 'node:test';
import assert from 'node:assert/strict';
import {isImageFile,imageSourceText} from '../image-import.js';
import {normalizeDocument} from '../document-import.js';
import {normalizeVolcano,volcanoProposals,volcanoExport} from '../volcano.js';
import {freshState,normalize} from '../engine.js';
import {synthesisSources} from '../synthesis.js';
test('Rasterbilder sind unabhängig von Grossschreibung erkennbar; SVG wird nicht ausgeführt',()=>{for(const name of ['Foto.JPG','Grafik.png','Bild.webp','Skizze.gif','Scan.bmp'])assert.ok(isImageFile({name}));for(const name of ['x.svg','x.html','x.pdf','bild.png.exe'])assert.ok(!isImageFile({name}));});
test('Bildbeobachtung funktioniert ohne OCR und bleibt als Quelle in allen fünf Themen, Synthese und Export',()=>{const observation='Im Diagramm steigt der Stromverbrauch im Winter. Welche Rolle spielt die Heizung?';assert.equal(imageSourceText('',''), '');assert.match(imageSourceText('',observation),/Eigene Bildbeobachtung/);const source=normalizeDocument({name:'Bild: Energie.png',term:'Stromverbrauch',excerpt:imageSourceText('Energie im Winter',observation)});const s=freshState();s.volcano=normalizeVolcano({term:source.term,resultTerm:source.term,answer:'Heizung vergleichen',resultAnswer:'Heizung vergleichen',stage:2,document:source,resultDocument:source});assert.ok(volcanoProposals(source.term,s.volcano.answer,source).every(p=>p.sources.some(x=>x.text.includes(observation))));assert.deepEqual(normalize(s).volcano.resultDocument,source);assert.ok(synthesisSources(s).some(x=>x.text.includes(observation)));assert.match(volcanoExport(s),/Eigene Bildbeobachtung/);assert.ok(!JSON.stringify(s).includes('blob:'));});
