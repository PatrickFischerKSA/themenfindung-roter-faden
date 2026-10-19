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

## Synthese: Spuren aus beiden Modi verbinden

Der Button **Synthese** ist aus beiden Ansichten erreichbar. Er sammelt persönliche Antworten, Mindmap-Gedanken, Kreativnotizen und den geführten Entwurf in einer gemeinsamen Auswahl. Mindestens zwei unterschiedliche Eingaben sind nötig. Eine eigene Verbindungsidee kann ergänzt werden.

Thematische Regeln verbinden beispielsweise Fotografie mit Ortsgeschichte und Familienquellen, Klang mit Orten, Rezepte mit Überlieferungen, Umweltfragen mit digitalen Modellen oder Spiele mit sozialen Fragen. Ohne passende Regel entstehen ausdrücklich explorative Brückenvorschläge. Dies ist eine lokale regelbasierte Ideenwerkstatt, keine freie KI-Synthese, Recherche oder Bestätigung einer Forschungslücke.

Vorschläge werden einzeln betrachtet: **Idee & Frage**, **Verbindung & Herkunft**, **Vorgehen & Grenzen**. Sie enthalten bearbeitbare Titel, Frage und Fokus sowie begründete Methoden-/Formatvorschläge und Rückfragen. Die Herkunft zeigt die tatsächlich verwendeten Eingaben im Wortlaut; ausgewählte, aber nicht verwendete Spuren werden nicht als verarbeitet ausgegeben.

**Als Variante merken** speichert den neuen Entwurf neben dem aktuellen. **Übernehmen & weiterentwickeln** sichert den bisherigen Entwurf als Variante und aktiviert den neuen. Sind acht Variantenplätze belegt, wird die Übernahme gestoppt. Der neue Entwurf erhält eine vorläufige Materialplanung; der Themen-Test, die Hypothese und produktspezifische Ausarbeitungen werden zurückgesetzt, damit alte Antworten nicht als neue Ausarbeitung erscheinen. Ort, Zeit und bewusste Ausschlüsse bleiben erhalten und müssen gegen den Vorschlag geprüft werden. Quellen-/Feldzugang und Aufwand sind erneut zu prüfen.

In der Mindmap verweisen Querbeziehungen von den verwendeten Spuren zum neuen Fokus. Herkunft und Verbindungsidee bleiben im Projekt und Konzeptexport erhalten. Die Ausgangsdaten werden bei der Erzeugung von Vorschlägen nicht verändert.

## Zwei ergänzende Denkmodi

**Freier Denkraum (Startansicht):** eine interaktive Mindmap mit verschiebbaren Knoten, beliebig tiefen Ästen, Querbeziehungen, Zoom, Verschieben der Fläche, Einpassen und Rückgängig für strukturelle Änderungen. Gedanken lassen sich direkt bearbeiten, neu verbinden und als Fokus übernehmen. Persönliche Antworten, Fokus, Material und Forschungsfrage erscheinen in derselben Karte.

**Geführter Weg:** sieben frei anwählbare Schritte mit jeweils kleinen Arbeitsabschnitten. Es ist immer nur ein Abschnitt sichtbar. Auch Methoden und kreative Formate werden einzeln erkundet. Ein Abschnitt kann über die Auswahl oder mit Zurück/Weiter gewechselt werden. Coach und Projektübersicht liegen in Dialogen auf Abruf statt über den Eingaben.

Beide Ansichten verwenden denselben Projektzustand. Im Denkraum erzeugte Ideen sind sofort im geführten Weg verfügbar; dort erarbeitete Eingrenzungen erscheinen wieder als Knoten. Umschalten erzeugt keine Kopie. Bisherige Projekte werden automatisch ergänzt.

### Kreativtechniken

Freies Clustern, Perspektivwechsel, Kopfstand, Zufallsimpulse, Ideen verbinden, SCAMPER und freies Schreiben sind direkt in der Mindmap nutzbar. Notizen bleiben pro Impuls erhalten; ein Einfall oder eine Textmarkierung kann als neuer Knoten am ausgewählten Gedanken angefügt werden. Bei der Ideenkombination entsteht zusätzlich eine Querbeziehung.

Bedienung: Knoten anklicken oder per Tab/Enter auswählen, ziehen oder mit Pfeiltasten bewegen. Hintergrund ziehen zum Verschieben. Plus/Minus oder Mausrad zum Zoomen, «Alles einpassen» für den Überblick. Auf schmalen Bildschirmen kann ein Gedanke auch über eine Auswahl angesteuert werden. Positionen, Verbindungen, Kreativnotizen und zuletzt gewählter Modus werden mit dem Projekt gespeichert. «Rückgängig» betrifft strukturelle Mindmap-Änderungen der aktuellen Sitzung.

Die Oberfläche bleibt innerhalb des Browserfensters. Längere Notizen und zusätzliche Verknüpfungsdetails können innerhalb ihres Arbeitsbereichs gescrollt werden. Die ehemalige lange Formularseite entfällt.

## Gezieltes Feedback und kreative Darstellungsformen

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
- `thinking.js`: gemeinsames Graphmodell, Layout, Verbindungen und Kreativtechniken
- `studio.js` / `studio.css`: interaktive Mindmap und kompakte Oberfläche
- `tests/engine.test.js`: Berechnungs- und Importtests
- `docs/materialgrundlage.md`: Zuordnung zu den Materialien und ergänzte Heuristiken

Zeitberechnung: `Wochen × Stunden/Woche × (1 − Puffer/100)`. Aufwand: Grundaufwand plus individuell geschätzte Stunden jeder gewählten Methode plus zusätzliche Medienproduktion bei alternativen Darstellungsformen. Die Phasengewichte teilen die nutzbare Zeit auf. Der Seitenumfang ist ein Planungsziel; er erzeugt keine automatische Aufwandsschätzung. Die Bewertung ist ein gewichteter Mittelwert der eigenen 0–5-Wertungen, umgerechnet auf 0–100. Bei ausschliesslich null gesetzten Gewichten wird kein Score angezeigt. Sie ist keine schulische Note und keine automatische Freigabe eines Themas.

Keine externen Laufzeitabhängigkeiten. Lehrpersonen können Methoden und Hinweise in `engine.js` anpassen. Lokale Browserdaten sind benutzerbezogen; diese Version enthält keine Klassenverwaltung und kein gemeinsames Bearbeiten.

## Materialien und Rechte

Original-PDF und Original-Präsentation sind nicht enthalten. Ihre Inhalte wurden als Arbeitsstruktur ausgewertet; fremde Zitate, Illustrationen und ausführliche Beispieltexte werden nicht weiterveröffentlicht. Die historische Erklärung über zwei getrennte Denkweisen der Hirnhälften wurde nicht als wissenschaftliche Grundlage übernommen. Fachliche und schulische Vorgaben sind mit der Betreuung zu klären. Rechte an den Ausgangsmaterialien bleiben bei den jeweiligen Rechteinhabern.

### Rescue Programm: der dritte Denkweg
Ein Check-in mit sechs Blockaden (Ideenlosigkeit, zu viele Ideen, feste Antwort, fehlende Neugier, Perfektionsdruck, fehlende Ressourcen) empfiehlt passende Rettungsrouten. Jede Route führt über «Lockern → Kern retten → Loslegen» zu einem kleinen Versuch und einem Selbstcheck mit gezielter Rückmeldung. Die zwölf provokativen Übungen und drei Reizstärken bleiben frei wählbar. Alle Notizen und nächsten Schritte werden lokal, in JSON und im Konzept gesichert. Die Synthese berücksichtigt eigene Gedanken und Pläne; vorgegebene Impulse und Selbstcheck-Werte werden nicht als Themenideen gewertet. Gerettete Kerne ergänzen die gemeinsame Ideensammlung am gewählten Ausgangsknoten. Vorhandene Projekte und Notizen des früheren Modus bleiben kompatibel. Das Programm arbeitet lokal mit kuratierten Regeln, ohne KI-Dienst.

### Aktuelle Debatten und Forschungsrelevanz
Im geführten Weg führen «Aktuelle Debatten & offene Forschungsfragen» (Schritt 1) und «Relevanz & Forschungsstand prüfen» (Schritt 3) vom Fach und der aktuellen Kontroverse zu einer offenen, begrenzten Untersuchung. Gespeichert werden Debatte, offene Frage, heutige Bedeutung, datierte Belege / Gegenpositionen und eigener Beitrag. Der Coach stellt dazu gezielte Rückfragen; Mindmap und Synthese verwenden dieselben Angaben. Forschungsstand und aktuelle Bedeutung werden durch eigene Recherche geprüft, ohne automatischen Nachrichtenabruf. Quellenangaben gelten nicht als zusätzliche Themenideen. Export und Varianten bewahren die Einträge. Rescue-Impulse und persönliche Entdeckungsfragen regen ebenfalls die Prüfung heutiger Relevanz an.

### Exporte an den Arbeitsstellen
«Abschnitt ↓» und «Schritt ↓» sichern im geführten Weg den sichtbaren Abschnitt (einschliesslich noch nicht abgeschickter Eingaben) oder den ganzen Arbeitsschritt. Mindmap, Synthesespuren / frei bearbeitete Vorschläge, Rescue-Übung und Coach-Antworten besitzen eigene Exportzugänge. Der Exportdialog zeigt eine Vorschau und bietet Markdown, UTF-8-Text und Drucken / PDF. Die Mindmap lässt sich zusätzlich vollständig und unabhängig vom aktuellen Zoom als eigenständiges SVG speichern (lange Beschriftungen gekürzt, vollständiger Text im SVG-Titel und Textexport). Die vollständige Projektdatei als JSON bleibt überall als Sicherung verfügbar und ist wieder importierbar. Teiltexte und SVG sind keine Projektdateien.

### Browsergestützte Spracheingabe
Jedes bearbeitbare Text-, Zahlen-, Datums-, Auswahl- und Kontrollkästchenfeld erhält ein Mikrofon; auch dynamisch erzeugte Felder in Mindmap, Coach, Synthese und Rescue. Dateiuploads und reine Bedienknöpfe sind ausgenommen. Der Dialog startet das Mikrofon erst nach «Aufnahme starten» und kann gestoppt oder abgebrochen werden. Finale und vorläufige Erkennung werden getrennt; vor dem Übernehmen kann der Text korrigiert werden. Einfügen an der Cursorposition, Ergänzen und bewusstes Ersetzen sind möglich. Zahlen (inklusive Dezimalwerten und gängigen deutschen Zahlwörtern), Datumswerte, Ja/Nein und eindeutige Auswahlnamen werden validiert. Alle Übernahmen verwenden dieselben Speicherereignisse wie Tastatureingaben. Bei fehlender Web Speech API erklärt der Dialog den Rückweg zur System- oder Tastaturdiktierfunktion. Unterstützung, Mikrofonrechte, Internet und Erkennungsqualität hängen vom Browser ab. Je nach Browser wird Audio an dessen Spracherkennungsdienst übertragen; das Tool zeichnet selbst kein Audio auf. Aufnahme wird bei geschlossenem Dialog, entferntem Zielfeld oder Verlassen der Seite abgebrochen. Sprachsystem und Textübernahme sind getrennt: ohne Freigabe wird kein Feld verändert.

### Themenvulkan: ein Begriff, eine Nachfrage, fünf Themen
Der vierte Modus beginnt mit einem Wort oder einer Wortgruppe. Genau eine thematisch passende Nachfrage konkretisiert den eigenen Schwerpunkt. Erst mit der Antwort entstehen fünf unterschiedliche Suchvorschläge: mit Forschungs- oder Entwicklungsfrage, möglichem Vorgehen, Format und Relevanzprüfung. Die Auswahl bleibt kompakt; Begriff und Antwort lassen sich per Sprache eingeben. Einzelvorschläge oder alle fünf sind exportierbar. «In Mindmap merken» erhält das bisherige Thema; «Als Entwurf entwickeln» sichert den vorherigen Entwurf als Variante. Begriff und eigene Antwort stehen in der Synthese zur Verfügung. Eingaben und die letzte Fünferauswahl bleiben im Projekt gespeichert. Die Vorschläge entstehen lokal aus thematischen Regeln und geben keine geprüfte Forschungslücke vor. Neue Ausbrüche ersetzen die letzte Auswahl, bereits gemerkte oder übernommene Themen bleiben bestehen.

### Einstieg über Dokument oder Aufsatz
Im Themenvulkan unter «Begriff → Dokument / Aufsatz einlesen» kann eine PDF-Datei mit Textebene, eine Word-Datei (.docx), TXT oder Markdown gewählt oder Text eingefügt werden. Die eingebundenen PDF.js- und Mammoth-Browserparser lesen lokal; es gibt keinen Datei-Upload und keine externen CDN-Abhängigkeiten. Die Vorschau ist korrigierbar. Eine einfache Wortauswertung bietet Ausgangsbegriffe an; frei formulierte Wortgruppen sind ebenfalls möglich. Nach der Bestätigung folgt genau eine Nachfrage mit Bezug zum Dokument. Die fünf Themen erhalten den verwendeten Auszug als Herkunft; Export, Synthese und JSON bewahren diesen Bezug. Gespeichert werden nur Dateiname, gewählter Begriff und Auszug, nicht die Originaldatei oder der gesamte Vorschautext. Dokumentinhalte werden als Daten behandelt, niemals als Anweisungen oder ausführbares HTML.

Grenzen: maximal 20 MB, 80 PDF-Seiten und 60 000 Vorschauzeichen; DOCX wird vor dem Entpacken auf maximal 50 MB Gesamtinhalt begrenzt. Gescannte PDFs benötigen vorher OCR; alte .doc-Dateien müssen als .docx oder PDF gespeichert werden. Geschützte / beschädigte Dateien erhalten eine erklärende Rückmeldung, vorhandene Eingaben bleiben erhalten. Parser-Versionen, Lizenzen und reproduzierbare Aktualisierung: `vendor/README.md` und `npm run vendor`.

### Einfacher Spurwechsel zwischen allen vier Modi
Die Modus-Schaltflächen setzen den jeweiligen Arbeitsstand fort; «↶ Zurück» führt zum zuletzt geöffneten Modus. Über «Spurwechsel ↗» wird der aktuelle Knoten, das bearbeitete Textfeld, ein Rescue-Gedanke oder der gewählte Vulkanvorschlag mitgenommen. Die kurze Vorschau ist vor dem Wechsel bearbeitbar. Im freien Denkraum wird dieselbe Spur ausgewählt; im geführten Weg erscheint sie als direkt bearbeitbare «mitgebrachte Spur» mit Aktionen für Fokus und Forschungsfrage. Bisherige Fragen und Foki werden bei diesen ausdrücklichen Übernahmen als Gedanken bewahrt. Ein Vulkan startet mit dem mitgebrachten Begriff direkt bei seiner Nachfrage; Rescue beginnt bei einer anderen Spur eine frische Runde. Die letzten drei vorherigen Vulkan- und Rescue-Stände bleiben im Spurwechsel-Dialog austauschbar erreichbar. Wiederöffnen tauscht die Stände, statt den gerade bearbeiteten zu verwerfen. JSON bewahrt diese Zwischenstände ebenfalls. Unfertige neue Assoziationen, Ideeneingaben und Journaltexte bleiben beim normalen Moduswechsel erhalten. Vollständige dauerhafte Sicherungen weiterhin über «Projekt sichern» erstellen.

### Einstieg mit Bildern und Grafiken
Im Themenvulkan öffnet «Dokument / Bild einlesen» auch PNG, JPEG, WebP, GIF und BMP (max. 20 MB / 40 Megapixel). Nach der Vorschau können eigene Beobachtungen und Fragen notiert oder eingesprochen werden. Optional liest Tesseract.js Beschriftungen auf Deutsch/Englisch lokal aus. OCR ist keine Motiv- oder Diagramminterpretation; erkannte Texte müssen geprüft werden. Ein eigener Ausgangsbegriff führt zur Nachfrage und fünf Themen. Dateiname sowie begrenzte, getrennt bezeichnete Auszüge aus OCR und eigener Beobachtung bleiben für Synthese und Export erhalten. Bilddateien werden weder hochgeladen noch im Projekt gespeichert. Die OCR-Dateien werden bei Bedarf von derselben Website geladen. Gescannte PDFs werden weiterhin nicht automatisch als Bild erkannt; einzelne Seiten können als Bild importiert werden.

### Adaptiver Denkkompass (Version 3.0)
Der Coach zeigt eine priorisierte Frage und begründet sie aus den eigenen Angaben. Der aufklappbare Überblick trennt Angaben von offenen Punkten. Persönliche, Mindmap- und Rescue-Spuren können als ausdrücklich unbestätigte Verbindungshypothese zusammenkommen. Reichweite, Kausalitätsanspruch, Zeit und Budget werden auf Spannungen geprüft. Der Denkzyklus Öffnen → Verbinden → Prüfen → Entscheiden führt direkt zu Mindmap, Synthese oder passendem geführtem Arbeitsschritt. Antworten können bewusst in die Planung ergänzt oder als Reflexion festgehalten werden; sie bestätigen keine Ressourcen oder Quellen automatisch.

Der Vulkan kennzeichnet fünf Denkoperationen: Vergleichen, Erkunden, Perspektiven erklären, Hinterfragen und Gestalten. Zu jedem Vorschlag gibt es eine qualitative Prüfung von persönlichem Bezug, offener Frage, Material, Eigenleistung, Aufwand und aktueller Bedeutung. Bewertungen mit eigenen Gründen steuern die nächste Auswahl und spätere Runden: Vorlieben werden bevorzugt, uninteressante Wege nachgeordnet, zu breite Aufträge auf einen Pilotversuch begrenzt, fehlender Interviewzugang auf veröffentlichte Quellen umgestellt. Kein Weg wird gesperrt. Bewertungen lassen sich zurücksetzen. Bewertungsentwürfe werden beim Spurwechsel gespeichert; entschiedene Gründe stehen auch in Synthese und Export zur Verfügung.

Die Regeln stehen in `reasoning.js` und sind in `tests/reasoning.test.js` geprüft. Keine automatische Aktualitätsrecherche, kein inhaltliches Verstehen durch ein Sprachmodell, keine garantierte Forschungslücke. Vorhandene Quellenangaben werden als eigene Angaben gekennzeichnet. Geänderte Grundlagen führen zu neuen Coach-Fragen; frühere Antworten bleiben im Export nachvollziehbar.

### Drei Arbeitsausrichtungen (Version 3.1)
Unter den Denkwegen ist die **Arbeitsausrichtung** jederzeit umschaltbar. Sie ist unabhängig vom freien Denkraum, geführten Weg, Rescue Programm und Themenvulkan:

- **Geisteswissenschaftlich:** Quellenkritik, Kontext, Analyse, begründete Deutung, Gegenlesarten und Argumentation. Eine Arbeitsthese ist optional; weder eigene empirische Datenerhebung noch experimentelle Hypothesenprüfung sind pauschal nötig.
- **Naturwissenschaftlich · experimentell:** eigene Versuchsplanung mit veränderbarer und messbarer Grösse, Kontrollen, Wiederholungen, reproduzierbarem Ablauf, Unsicherheit und Sicherheit. Hypothesenprüfende und begründet explorative Versuche sind möglich.
- **Kreativ · Projekt / Produkt:** Anliegen, Gestaltungsfrage, Referenzen, Entwurfsvarianten, Realisierung und dokumentierte Entscheidungen. Die Erprobung oder Reflexion richtet sich nach dem Vorhaben; auch Werkvergleich oder dokumentierte Selbstreflexion können angemessen sein. Ein Text oder literarisches Werk ist ebenfalls ein kreatives Format.

Fragegerüste, Relevanzfelder, Methodenempfehlungen, Coach, Synthese- und Vulkanvorschläge, Themen-Test, Zeitphasen und Konzept-/Abschnittsexporte berücksichtigen die Ausrichtung. Vorschläge für Experimente bleiben Suchrichtungen: Vor allem bei einem Wechsel aus einem historischen oder gestalterischen Thema muss ein sicher manipulierbarer und messbarer Gegenstand erst fachlich begründet werden. Der Vulkan fragt dafür ausdrücklich nach Einfluss- und Messgrösse. Die ursprüngliche Nachfrage und ihre Ausrichtung werden bei neuen Ergebnissen mitgespeichert.

Beim Wechsel bleiben Frage, Material, fachliche Notizen und eigene Gliederungen erhalten. Unveränderte Standardgliederungen wechseln zum neuen Gerüst; eigene Gliederungen werden nur auf ausdrücklichen Knopfdruck ersetzt. Arbeitsthesen/Hypothesen und Themen-Test-Antworten werden je Ausrichtung getrennt gesichert. Methodenempfehlungen werden bewusst per Button ergänzt, vorhandene Methoden nicht stillschweigend gelöscht. Bewertungen im Vulkan sind an die Arbeitsausrichtung gebunden. Alte Projekte werden anhand einer expliziten Ausrichtung, sonst anhand bestehender Experimentmethode oder Entwicklungsabsicht übernommen.

### Konkrete Machbarkeitsplanung (Version 3.2)
Schritt 5 beginnt mit einer kompakten Übersicht über Zeitbudget, Aufwand und mögliche Lücke. Die grossen Zeitregler wurden durch Zahlenfelder, zwei direkte Einstiege und sieben klar benannte Abschnitte ersetzt. Persönliche Bewertungen sind optional und bleiben als Selbsteinschätzung erkennbar.

**Zeitbudget:** Kalenderwochen minus vollständig blockierte Ausfallwochen ergeben aktive Wochen. Du kannst Wochenstunden direkt angeben oder aus Minutenbudgets für Montag bis Sonntag ableiten. Tagesbudgets ersetzen die Wochenpauschale; Reserve wird genau einmal abgezogen. Das ist eine Budgetrechnung, keine automatische Kalenderbuchung. Zugang, Wartezeiten und Betreuung brauchen zusätzlich Spielraum.

**Arbeitspakete:** Die passende Vorlage enthält Quellen-/Werkanalysen, Versuchsplanung/Messreihen oder Entwurf/Produktion/Reflexion sowie Dokumentation, Überarbeitung und Abgabe. Mengen und Stunden werden bewusst nicht erfunden. Jede Zeile rechnet Anzahl × Stunden pro Einheit, mit Planwert und einem höheren Aufwandswert. Fehlende Angaben führen zu «noch unvollständig» statt zu einer positiven Machbarkeitsaussage. Annahmen lassen sich begründen und ausdrücklich als selbst geprüft markieren. Änderungen an Menge oder Zeit heben diese Markierung wieder auf.

**Probe:** Bearbeitete Einheiten und tatsächlich benötigte Minuten liefern einen eigenen Zeitwert pro Einheit. Der Probelauf bestätigt weder den Gesamtumfang noch die Übertragbarkeit automatisch; die eigene Prüfung bleibt nötig.

Im Detailplan zählen ausschliesslich die Arbeitspakete. Grund-, Methoden- und Medienpauschalen werden nicht zusätzlich addiert und ihre alten Eingabefelder sind entsprechend deaktiviert. Die ursprüngliche Pauschalrechnung bleibt auswählbar. Seitenziele, Methoden und Paketmengen werden nicht unbemerkt miteinander synchronisiert; Änderungen müssen im Plan bewusst nachgeführt werden. Bei einer anderen Arbeitsausrichtung bleiben die bestehenden Pakete erhalten und werden zum Prüfen markiert.

Die Übersicht unterscheidet fehlende Angaben, Überlastung, knappen Spielraum und rechnerische Passung. Beispiele zeigen, wie eine Einheit weniger den Aufwand verändert; nichts wird automatisch gestrichen. Zusätzliche Wochenstunden werden unter Beibehaltung der Reserve berechnet. Eigene Schätzungen sind keine objektive Prognose oder statistische Konfidenzintervalle. JSON, Varianten, Coach, Konzept und Exporte verwenden dieselbe Zeitgrundlage.
