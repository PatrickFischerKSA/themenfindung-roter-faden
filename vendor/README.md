Lokale Browser-Parser, keine externen CDN-Aufrufe:

- PDF.js / pdfjs-dist 6.4.299 (Apache 2.0), Mozilla: https://github.com/mozilla/pdf.js
- Mammoth 1.13.0 (BSD 2-Clause): https://github.com/mwilliamson/mammoth.js

Lizenzen und Schrifthinweise liegen in den jeweiligen Ordnern. Dateien reproduzierbar aktualisieren: `npm ci --ignore-scripts` und `npm run vendor`. npm-Pakete sind nur Entwicklungsabhängigkeiten; die Veröffentlichung verwendet die hier mitgelieferten Browserdateien. Mammoths CLI-Abhängigkeit argparse/sprintf-js wird nicht veröffentlicht und ist nicht im Browserbundle enthalten. Import nutzt ausschliesslich extractRawText, kein Dokument-HTML und keine externen Beziehungen.
