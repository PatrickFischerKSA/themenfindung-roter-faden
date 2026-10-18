Lokale Browser-Parser, keine externen CDN-Aufrufe:

- PDF.js / pdfjs-dist 6.4.299 (Apache 2.0), Mozilla: https://github.com/mozilla/pdf.js
- Mammoth 1.13.0 (BSD 2-Clause): https://github.com/mwilliamson/mammoth.js

Lizenzen und Schrifthinweise liegen in den jeweiligen Ordnern. Dateien reproduzierbar aktualisieren: `npm ci --ignore-scripts` und `npm run vendor`. npm-Pakete sind nur Entwicklungsabhängigkeiten; die Veröffentlichung verwendet die hier mitgelieferten Browserdateien. Mammoths CLI-Abhängigkeit argparse/sprintf-js wird nicht veröffentlicht und ist nicht im Browserbundle enthalten. Import nutzt ausschliesslich extractRawText, kein Dokument-HTML und keine externen Beziehungen.

## Bild-Texterkennung
Tesseract.js 7.0.0, Tesseract.js-core 7.0.0 und deutsche/englische Sprachdaten aus @tesseract.js-data/{deu,eng} 1.0.0 (best_int). Alle Laufzeitdateien liegen hier; kein CDN und kein Bild-Upload. OCR wird erst auf Knopfdruck geladen. Tesseract.js: Apache-2.0 (LICENSE.md), Core: Apache-2.0 (core/LICENSE); Sprachdaten: Apache-2.0, https://github.com/tesseract-ocr/tessdata_best . Herkunft/API: https://github.com/naptha/tesseract.js . Reproduzierbar mit `node scripts/vendor-images.mjs`.
