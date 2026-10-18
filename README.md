# Der rote Faden · Themenwerkstatt

Ein interaktives deutschsprachiges Themenfindungstool für Fach- und Maturaarbeiten, entwickelt aus dem bereitgestellten Dossier **Der rote Faden I** und der Präsentation **Praes ROTER FADEN1**.

## Online nutzen

[Themenwerkstatt öffnen](https://patrickfischerksa.github.io/themenfindung-roter-faden/)

## Starten

Keine Installation von Paketen, kein API-Schlüssel und kein Build nötig.

```sh
python3 -m http.server 4173
```

Danach http://localhost:4173 öffnen. Alternativ `npm start`. Die Dateien benötigen einen HTTP-Server, da ES-Module beim direkten Öffnen über `file://` eingeschränkt sind.

## Neu: gezieltes Feedback und kreative Darstellungsformen

Der **Werkstatt-Coach** reagiert auf den aktuellen Entwurf: Er benennt tragfähige Ansätze, stellt gezielte Rückfragen und gibt konkrete nächste Schritte zu Eingrenzung, Vergleich, Kausalität, Quellenzugang, Methoden, Zeit und Produktentwicklung. Antworten bleiben im Projekt erhalten und werden im Konzept exportiert. Das Feedback arbeitet mit nachvollziehbaren Regeln, ohne externe KI-Anbindung oder fachliche Faktenprüfung.

Das **Formatlabor** bietet wissenschaftlichen Text, Podcast/Hörstück, Video/Dokumentarfilm, interaktive Website/App, Ausstellung/Audiowalk, Spiel/Simulation, künstlerisches Werk/Performance sowie eigene oder kombinierte Formen. Es unterscheidet zwischen der Vermittlung eigener Forschung und der Untersuchung einer Produktentwicklung. Publikum, Ziel, Formatbegründung, Umfang, zusätzlicher Produktionsaufwand, Pilot, Qualitätskriterien, Erprobung, Begleittext, Rechte und Zugänglichkeit sind bearbeitbar. Die Ideensammlung enthält themenbezogene kreative Impulse.

Bisherige Projekte werden automatisch mit den neuen Feldern ergänzt. Gespeicherte Varianten enthalten auch Formatplanung und Coach-Antworten. Produktionsstunden zählen nur bei alternativen Darstellungsformen und zusätzlich zu Grund- und Methodenaufwand; dieselben Tätigkeiten sollten nicht doppelt geschätzt werden.

## Persönliche Entdeckungsreise

Acht freiwillige Zugänge erschliessen Themen aus dem eigenen Leben: Träume/Zukunft, Freizeitinteressen, Leidenschaften/Nischenthemen, Herzensanliegen, Familienschätze, offene Fragen, Begegnungen/Orte und eigene Fähigkeiten. Zu jeder Antwort lässt sich eine Vertiefung festhalten. Bei Fotoalben, Rezepten, Tagebüchern oder Handwerk passen sich die Rückfragen an das genannte Material an. Aus Antworten entstehen bearbeitbare Themenkeime. Sie lassen sich als Gedanke sammeln oder ausdrücklich als Themenfeld testen; ein bisheriges Themenfeld bleibt dabei als Gedanke erhalten. Die Antworten sind Teil der lokalen Projektdaten, der Varianten und des Konzeptexports.

## Funktionen

1. Ideen sammeln: Brainstorming, verzweigte Assoziationen, Mindmap und optionaler 7-Minuten-Timer.
2. Thema eingrenzen: Aspekt, Zielgruppe, Ort, Zeit, Korpus, Perspektive und bewusste Ausschlüsse; live aktualisierte Themenpyramide.
3. Fragestellung: sechs Erkenntnisinteressen, bearbeitbare Fragegerüste und vorläufige Hypothese.
4. Formatlabor und Methodenkarussell: 15 Zugänge, Mehrfachauswahl, Hinweise zu Auswertung und Grenzen, frei einstellbare Aufwände.
5. Machbarkeit: Wochen, Stunden, Puffer, Umfang, Grundaufwand, Stichprobe, Budget, Ressourcen; sieben individuell gewichtete Bewertungskriterien; bis zu acht Varianten.
6. Planung: vier verschiebbare Phasen nach dem Dossier, Abgabe, Verpflichtungen, Schulvorgaben, Betreuung, priorisierte Fragen, Feedback und Arbeitsjournal.
7. Konzept: sechs Fragen des Themen-Tests, Titel, Gliederung, Markdown-Export und Druckansicht für PDF.

Alle Eingaben bleiben veränderbar. Ein Wechsel der Methode überschreibt nicht die eigene Forschungsfrage. Varianten enthalten ihren vollständigen Planungsstand und ihre Gewichtungen. Beim Laden einer Variante wird der aktuelle Entwurf an ihrer Stelle gesichert.

## Speichern und Datenschutz

Automatische Speicherung im `localStorage` des aktuellen Browsers. **Projekt sichern** exportiert JSON für Sicherungen, Gerätewechsel und Wiederaufnahme über **Öffnen**. Browserdaten können gelöscht werden; daher regelmässig exportieren. Protokoll, Hostname und Port bestimmen den lokalen Speicherbereich. Keine Serverdatenbank, keine Telemetrie, keine externen Schriften, keine KI-Anfragen. JSON-Dateien können persönliche Notizen enthalten und gehören nicht ins öffentliche Repository.

## GitHub Pages

1. Den Inhalt dieses Ordners als eigenes Repository hochladen (Startdatei `index.html` im Repository-Wurzelverzeichnis).
2. Standardbranch `main` verwenden.
3. Unter **Settings → Pages → Build and deployment → Source** die Option **GitHub Actions** wählen.
4. Nach Push oder manuellem Start veröffentlicht `.github/workflows/pages.yml` die Website. Der Workflow führt zuvor Syntaxprüfung und Tests aus.

Relative Pfade unterstützen auch Projektseiten unter `https://BENUTZER.github.io/REPOSITORY/`. Die Veröffentlichung erfolgt über dieses Repository und den enthaltenen GitHub-Actions-Workflow.

## Prüfen und weiterentwickeln

Node.js 20 oder neuer:

```sh
npm run check
npm test
```

- `index.html`: Grundstruktur und Dialoge
- `style.css`: responsive Gestaltung und Druckansicht
- `app.js`: Eingaben, Speicherung, Mindmap, Varianten, Exporte
- `engine.js`: Methoden, Zustandsmodell, Berechnungen, Konzepttext
- `formats.js`: Formate, produktbezogene Hinweise und Konzeptbaustein
- `coaching.js`: regelbasierte Rückfragen, Feedback und kreative Themenimpulse
- `tests/engine.test.js`: Berechnungs- und Importtests
- `docs/materialgrundlage.md`: Zuordnung zu den Materialien und ergänzte Heuristiken

Zeitberechnung: `Wochen × Stunden/Woche × (1 − Puffer/100)`. Aufwand: Grundaufwand plus individuell geschätzte Stunden jeder gewählten Methode plus zusätzliche Medienproduktion bei alternativen Darstellungsformen. Die Phasengewichte teilen die nutzbare Zeit auf. Der Seitenumfang ist ein Planungsziel; er erzeugt keine automatische Aufwandsschätzung. Die Bewertung ist ein gewichteter Mittelwert der eigenen 0–5-Wertungen, umgerechnet auf 0–100. Bei ausschliesslich null gesetzten Gewichten wird kein Score angezeigt. Sie ist keine schulische Note und keine automatische Freigabe eines Themas.

Keine externen Laufzeitabhängigkeiten. Lehrpersonen können Methoden und Hinweise in `engine.js` anpassen. Lokale Browserdaten sind benutzerbezogen; diese Version enthält keine Klassenverwaltung und kein gemeinsames Bearbeiten.

## Materialien und Rechte

Original-PDF und Original-Präsentation sind nicht enthalten. Ihre Inhalte wurden als Arbeitsstruktur ausgewertet; fremde Zitate, Illustrationen und ausführliche Beispieltexte werden nicht weiterveröffentlicht. Die historische Erklärung über zwei getrennte Denkweisen der Hirnhälften wurde nicht als wissenschaftliche Grundlage übernommen. Fachliche und schulische Vorgaben sind mit der Betreuung zu klären. Rechte an den Ausgangsmaterialien bleiben bei den jeweiligen Rechteinhabern.
