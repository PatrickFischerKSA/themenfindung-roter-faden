import {normalizeSynthesis,synthesisExport} from './synthesis.js';
import {thinkingExport} from './thinking.js';
import {discoveryPaths,discoveryExport} from './discovery.js';
import {isCreative,creativeBrief,chosenFormat} from './formats.js';
import {coachExport} from './coaching.js';
export const methods = [
 ['literatur','Literaturrecherche', 'Forschungsstand und Begriffe klären; Quellen nach festgelegten Kriterien vergleichen.', 'Suchbegriffe, Datenbanken, Auswahlkriterien und Quellenkritik dokumentieren.',8,'sources'],
 ['interview','Interview','Kenntnisse, Perspektiven und Stellungnahmen gezielt erfragen.','Leitfaden, begründete Auswahl, Einwilligung, Transkription und Auswertung planen.',14,'people'],
 ['oral','Oral History','Erinnerungen von Zeitzeuginnen und Zeitzeugen historisch einordnen.','Erinnerungen mit zeitgenössischen Quellen abgleichen; subjektive Rückschau reflektieren.',18,'people'],
 ['archiv','Archivarbeit','Historische Dokumente aus Gemeinde-, Vereins-, Firmen- oder Privatarchiven auswerten.','Bestände, Zugang, Quellenkritik und Kontext prüfen.',16,'sources'],
 ['experiment','Experiment','Eine überprüfbare Annahme unter kontrollierten Bedingungen testen.','Variablen, Kontrollbedingungen, Wiederholungen und Sicherheit vorab festlegen.',24,'equipment'],
 ['fall','Fallstudie','Einen begründeten Einzelfall untersuchen und in einen grösseren Zusammenhang stellen.','Fallauswahl begründen; Grenzen der Übertragbarkeit benennen.',16,'sources'],
 ['umfrage','Umfrage','Einstellungen oder Verhaltensweisen einer definierten Gruppe erheben.','Stichprobe, Fragebogen, Pretest, Einwilligung und Aussagekraft klären.',20,'people'],
 ['erkundung','Erkundung','Eine Institution oder einen Betrieb mit einer vorab festgelegten Problemstellung erkunden.','Zugang, Beobachtungsraster und Dokumentation vereinbaren.',12,'people'],
 ['beobachtung','Beobachtung','Handlungen, Interaktionen oder Verhaltensweisen systematisch erfassen.','Beobachtungskategorien, Zeitraum, Rolle und Datenschutz festlegen.',16,'people'],
 ['aktion','Aktionsforschung','Durch eigenes Handeln einen Prozess verändern und reflektieren.','Eigene Rolle, Eingriffe, Dokumentation und Einfluss auf Ergebnisse offenlegen.',22,'people'],
 ['dichte','Dichte Beschreibung','Handlungen im kulturellen und sozialen Kontext interpretieren.','Feldnotizen und Kontext sammeln; Beobachtung und Deutung unterscheiden.',18,'people'],
 ['film','Filmanalyse','Filmische Gestaltung und ihre mögliche Wirkung untersuchen.','Korpus, Sequenzen und Kategorien wie Kamera, Schnitt und Ton festlegen.',14,'sources'],
 ['text','Textanalyse','Aufbau, Intention, Kontext und Deutungsmöglichkeiten von Texten untersuchen.','Korpus und Analysekriterien begründen; Interpretation durch Belege stützen.',14,'sources'],
 ['modell','Theorie / Modell / Programmieren','Theorien, Berechnungen, Modelle oder Programme entwickeln und prüfen.','Annahmen, Verfahren und nachvollziehbare Validierung festlegen.',24,'equipment'],
 ['kreativ','Kreative / technische Arbeit','Ein Werk gestalten, aufführen oder ein technisches Produkt entwickeln.','Produktkriterien und Erprobung planen; wissenschaftlichen Begleittext mit Hintergrund und Analyse verfassen.',28,'equipment']
].map(([id,name,description,caution,hours,resource])=>({id,name,description,caution,hours,resource}));
export const criteria = [
 ['interest','Eigenes Interesse'],['relevance','Fachliche Relevanz'],['focus','Klare Eingrenzung'],['sources','Quellenlage'],['access','Zugang zum Untersuchungsfeld'],['skills','Methodische Kenntnisse'],['originality','Eigener Beitrag']
].map(([id,label])=>({id,label}));
export function freshState(){return {version:1,step:0,synthesis:normalizeSynthesis(),view:{mode:'map',fitted:false,panel:0,methodIndex:0,inspirationIndex:0,selected:'root',technique:'cluster',prompt:0,zoom:1,panX:0,panY:0},mapPositions:{},creativeNotes:{},discoveryFocus:'dreams',discovery:Object.fromEntries(discoveryPaths.map(p=>[p.id,''])),discoveryDepth:Object.fromEntries(discoveryPaths.map(p=>[p.id,''])),coachAnswers:{},coachQuestions:{},creative:{format:'text',role:'vermittlung',customName:'',audience:'',goal:'',rationale:'',units:1,length:10,hours:12,pilot:'',quality:'',testing:'',companion:'',rights:'',accessibility:''},topic:'',subject:'',motivation:'',hopes:'',worries:'',ideas:[],edges:[],scope:{aspect:'',person:'',group:'',institution:'',place:'',period:'',corpus:'',perspective:'',exclude:''},scopeOrder:['aspect','person','group','institution','corpus','place','period'],intent:'verstehen',question:'',hypothesis:'',methodIds:['literatur'],methodHours:Object.fromEntries(methods.map(m=>[m.id,m.hours])),feedback:'',checkpointQuestions:'',commitments:'',resources:{people:false,sources:false,equipment:false},weeks:12,hoursPerWeek:4,buffer:20,pages:20,workHours:35,budget:0,cost:0,sample:10,deadline:'',ratings:Object.fromEntries(criteria.map(c=>[c.id,3])),weights:Object.fromEntries(criteria.map(c=>[c.id,1])),test:['','','','','',''],outline:'1. Einleitung und Fragestellung\n2. Grundlagen und Forschungsstand\n3. Methode und Material\n4. Untersuchung und Ergebnisse\n5. Diskussion und Grenzen\n6. Fazit',supervision:'',rules:'',title:'',notes:'',journal:[],candidates:[],milestones:[12.5,37.5,25,25]};}
export function suggestQuestion(s){
 const a=s.scope; const core=[a.aspect||s.topic,a.person&&`am Beispiel von ${a.person}`,a.group&&`bei ${a.group}`,a.institution&&`im Kontext von ${a.institution}`,a.place&&`in ${a.place}`,a.period&&`im Zeitraum ${a.period}`].filter(Boolean).join(' ');
 if(!s.topic.trim()&&!a.aspect.trim())return '';
 const tail=a.corpus?` anhand von ${a.corpus}`:'';
 const forms={verstehen:`Wie lässt sich das Phänomen «${core}»${tail} erklären?`,vergleichen:`Welche Unterschiede und Gemeinsamkeiten zeigen sich hinsichtlich ${core}${tail}?`,wirkung:`Welcher Zusammenhang zeigt sich zwischen ${core}${tail}?`,bewerten:`Wie ist ${core}${tail} anhand begründeter Kriterien zu beurteilen?`,entwickeln:`Wie lässt sich ein Produkt zu ${core} entwickeln und anhand festgelegter Kriterien erproben?`,beschreiben:`Welche Merkmale kennzeichnen ${core}${tail}?`};
 if(s.intent==='entwickeln'&&isCreative(s))return `Wie lässt sich ${chosenFormat(s).name} zu «${core}»${s.creative.audience?' für '+s.creative.audience:''} entwickeln und anhand festgelegter Kriterien erproben?`;
 return forms[s.intent]||forms.verstehen;
}
export function evaluate(s){
 const available=s.weeks*s.hoursPerWeek; const usable=available*(1-s.buffer/100);
 const selected=methods.filter(m=>s.methodIds.includes(m.id));
 const production=isCreative(s)?s.creative.hours:0;
 const needed=s.workHours+selected.reduce((n,m)=>n+(s.methodHours?.[m.id]??m.hours),0)+production;
 const sum=criteria.reduce((n,c)=>n+Number(s.weights[c.id]),0);
 const score=sum?Math.round(criteria.reduce((n,c)=>n+s.ratings[c.id]*s.weights[c.id],0)/sum/5*100):null;
 const warnings=[];
 if(s.step===6&&s.test.some(x=>!x.trim()))warnings.push('Der Themen-Test ist noch nicht vollständig beantwortet.');
 if(!s.topic.trim())warnings.push('Ein Ausgangsthema fehlt.');
 if(!s.scope.aspect.trim())warnings.push('Lege einen konkreten Aspekt fest.');
 if(!s.scope.corpus.trim()&&!s.scope.group.trim())warnings.push('Grenze Material oder Zielgruppe ein.');
 if(!s.question.trim())warnings.push('Formuliere und überarbeite deine eigene Forschungsfrage.');
 if(!selected.length)warnings.push('Wähle mindestens eine Arbeitsmethode.');
 if(needed>usable)warnings.push(`Zeitlücke: ${Math.ceil(needed-usable)} Stunden. Umfang oder Methoden reduzieren oder mehr Zeit einplanen.`);
 selected.forEach(m=>{if(!s.resources[m.resource])warnings.push(`${m.name}: ${ {people:'Kontakt und Einwilligung',sources:'Materialzugang',equipment:'Ausstattung und nötige Kenntnisse'}[m.resource]} noch klären.`);});
 if(s.cost>s.budget)warnings.push('Die geschätzten Kosten überschreiten dein Budget.');
 if(s.intent==='wirkung'&&!s.methodIds.includes('experiment'))warnings.push('Ein beobachteter Zusammenhang belegt keine Ursache. Formuliere die Reichweite deiner Aussage vorsichtig.');
 if(s.methodIds.includes('umfrage'))warnings.push(`Geplante Stichprobe: ${s.sample}. Aussagekraft hängt auch von Auswahl und Rücklauf ab; keine automatische Repräsentativität.`);
 if(s.methodIds.includes('kreativ')&&!s.notes.trim())warnings.push('Ergänze Kriterien zur Beurteilung des Produkts und zum wissenschaftlichen Begleittext.');
 if(s.deadline){const d=new Date(s.deadline+'T23:59:59');const days=Math.ceil((d-new Date())/86400000);if(days<0)warnings.push('Der Abgabetermin liegt in der Vergangenheit.');else if(s.weeks*7>days)warnings.push('Dein Wochenplan reicht über den Abgabetermin hinaus.');}
 return {available,usable,needed,production,score,warnings,selected};
}
export function normalize(raw){
 if(!raw||typeof raw!=='object'||Array.isArray(raw)||raw.version!==1)throw Error('Unbekanntes Projektformat.');
 const d=freshState();
 d.synthesis=normalizeSynthesis(raw.synthesis);
 for(const k of Object.keys(d)){
  if(typeof d[k]==='string'&&typeof raw[k]==='string')d[k]=raw[k].slice(0,30000);
  if(typeof d[k]==='number'&&Number.isFinite(raw[k]))d[k]=raw[k];
 }
 for(const obj of ['scope','resources','ratings','weights','methodHours','creative','discovery','discoveryDepth','view'])if(raw[obj]&&typeof raw[obj]==='object')for(const k of Object.keys(d[obj]))if(typeof raw[obj][k]===typeof d[obj][k])d[obj][k]=raw[obj][k];
 for(const [k,min,max] of [['step',0,6],['weeks',1,52],['hoursPerWeek',1,30],['buffer',0,60],['pages',1,100],['workHours',1,300],['sample',1,500],['budget',0,100000],['cost',0,100000]])d[k]=Math.min(max,Math.max(min,d[k]));
 for(const c of criteria){d.ratings[c.id]=Math.min(5,Math.max(0,Number(d.ratings[c.id])||0));d.weights[c.id]=Math.min(5,Math.max(0,Number(d.weights[c.id])||0));}
 for(const m of methods)d.methodHours[m.id]=Math.max(0,Math.min(2000,Number(d.methodHours[m.id])||0));
 d.step=Math.floor(d.step);
 if(!['map','linear'].includes(d.view.mode))d.view.mode='map';
 d.view.inspirationIndex=Math.max(0,Math.min(5,Math.floor(Number(d.view.inspirationIndex)||0)));
 d.view.methodIndex=Math.max(0,Math.min(14,Math.floor(Number(d.view.methodIndex)||0)));
 d.view.panel=Math.max(0,Math.floor(Number(d.view.panel)||0));d.view.prompt=Math.max(0,Math.floor(Number(d.view.prompt)||0));
 d.view.zoom=Math.max(.2,Math.min(3,Number(d.view.zoom)||1));
 for(const k of ['panX','panY'])d.view[k]=Math.max(-10000,Math.min(10000,Number(d.view[k])||0));
 if(!['cluster','perspective','reverse','random','combine','scamper','freewrite'].includes(d.view.technique))d.view.technique='cluster';
 if(raw.mapPositions&&typeof raw.mapPositions==='object')for(const [id,p] of Object.entries(raw.mapPositions).slice(0,150))if(p&&Number.isFinite(p.x)&&Number.isFinite(p.y)&&id!=='__proto__')d.mapPositions[id]={x:Math.max(-5000,Math.min(5000,p.x)),y:Math.max(-5000,Math.min(5000,p.y))};
 if(raw.creativeNotes&&typeof raw.creativeNotes==='object')for(const [key,v] of Object.entries(raw.creativeNotes).slice(0,100))if(/^[a-z]+-?[0-9]*$/.test(key)&&typeof v==='string')d.creativeNotes[key]=v.slice(0,30000);
 if(Array.isArray(raw.edges))d.edges=raw.edges.filter(e=>e&&typeof e.from==='string'&&typeof e.to==='string'&&e.from!==e.to).slice(0,300).map(e=>({from:e.from,to:e.to}));
 if(!discoveryPaths.some(p=>p.id===d.discoveryFocus))d.discoveryFocus='dreams';
 for(const store of ['discovery','discoveryDepth'])for(const key of Object.keys(d[store]))d[store][key]=d[store][key].slice(0,10000);
 d.view.selected=d.view.selected.slice(0,200);
 const formatIds=['text','podcast','video','digital','ausstellung','spiel','kunst','eigen'];
 if(!formatIds.includes(d.creative.format))d.creative.format='text';
 if(!['vermittlung','entwicklung'].includes(d.creative.role))d.creative.role='vermittlung';
 for(const [key,min,max] of [['units',1,100],['length',1,120],['hours',0,300]])d.creative[key]=Math.max(min,Math.min(max,Number(d.creative[key])||min));
 for(const key of Object.keys(d.creative))if(typeof d.creative[key]==='string')d.creative[key]=d.creative[key].slice(0,30000);
 for(const store of ['coachAnswers','coachQuestions'])if(raw[store]&&typeof raw[store]==='object')for(const [key,v] of Object.entries(raw[store]).slice(0,100))if(/^[a-z][a-z0-9-]{0,60}$/.test(key)&&typeof v==='string')d[store][key]=v.slice(0,10000);
 if(Array.isArray(raw.scopeOrder)){const allowed=d.scopeOrder;d.scopeOrder=[...new Set(raw.scopeOrder.filter(x=>allowed.includes(x))),...allowed.filter(x=>!raw.scopeOrder.includes(x))];}
 d.methodIds=Array.isArray(raw.methodIds)?raw.methodIds.filter(x=>methods.some(m=>m.id===x)):d.methodIds;
 for(const k of ['test'])if(Array.isArray(raw[k]))d[k]=d[k].map((v,i)=>typeof raw[k][i]==='string'?raw[k][i].slice(0,30000):v);
 if(Array.isArray(raw.ideas))d.ideas=raw.ideas.filter(x=>x&&typeof x.id==='string'&&typeof x.text==='string').map(x=>({id:x.id,text:x.text.slice(0,1000),parent:typeof x.parent==='string'?x.parent:''})).slice(0,100);
 if(Array.isArray(raw.journal))d.journal=raw.journal.filter(x=>x&&typeof x.text==='string'&&typeof x.date==='string').map(x=>({text:x.text.slice(0,30000),date:x.date.slice(0,40)})).slice(0,200);
 if(Array.isArray(raw.candidates))d.candidates=raw.candidates.slice(0,8).map(x=>{const c=normalize({...x,candidates:[]});return {...c,candidates:[]};});
 if(Array.isArray(raw.milestones)&&raw.milestones.length===4)d.milestones=raw.milestones.map(x=>Math.max(0,Math.min(100,Number(x)||0)));
 return d;
}
export const testQuestions=['Welches Thema will ich bearbeiten? (Arbeitstitel)','Warum interessiert mich dieses Thema? (Interesse)','Welche Frage soll meine Arbeit beantworten? (Fragestellung)','Was möchte ich mit meiner Arbeit herausfinden? (Ziel)','Mit welchen Methoden untersuche ich das Thema? (Methode)','Welche Schritte und Recherchen plane ich in welcher Reihenfolge? (Organisation)'];
export function concept(s){const e=evaluate(s);return `# ${s.title||s.topic||'Mein Facharbeitskonzept'}\n\nFachbereich: ${s.subject||'offen'}\nGeplanter Umfang: ${s.pages} Seiten\n\n## Projektskizze\n${s.motivation||'[Motivation ergänzen]'}\n\n## Fragestellung\n${s.question||'[Eigene Fragestellung ergänzen]'}\n\nVorläufige Annahme: ${s.hypothesis||'offen'}\n\n## Eingrenzung\n${Object.entries(s.scope).map(([k,v])=>`${ {aspect:'Aspekt',person:'Einzelpersonen',institution:'Institutionen',group:'Zielgruppe',place:'Ort',period:'Zeitraum',corpus:'Material / Korpus',perspective:'Perspektive',exclude:'Nicht untersucht'}[k]}: ${v||'offen'}`).join('\n')}\n\n## Methoden\n${e.selected.map(m=>`- ${m.name} (geschätzt ${s.methodHours[m.id]} h zusätzlich): ${m.caution}`).join('\n')}\n\n${synthesisExport(s)}${creativeBrief(s)}${thinkingExport(s)}${discoveryExport(s)}## Themen-Test\n${testQuestions.map((q,i)=>`### ${q}\n${s.test[i]||'[Noch beantworten]'}`).join('\n\n')}\n\n## Vorläufige Gliederung\n${s.outline}\n\n## Zeitplan\n${s.weeks} Wochen × ${s.hoursPerWeek} Stunden; ${s.buffer}% Puffer. Nutzbar: ${e.usable.toFixed(1)} h. Geschätzter Aufwand: ${e.needed} h (davon ${e.production} h zusätzliche Medienproduktion). Abgabe: ${s.deadline||'offen'}.\n${phasePlan(s).map(p=>`- ${p.name}: ${p.hours.toFixed(1)} h`).join('\n')}\n\n## Ressourcen und Selbsteinschätzung\nBudget: ${s.budget} CHF; geschätzte Kosten: ${s.cost} CHF. Geplante Stichprobe / Fälle: ${s.sample}.\nQuellenzugang: ${s.resources.sources?'geklärt':'offen'}; Kontakte / Einwilligungen: ${s.resources.people?'geklärt':'offen'}; Ausstattung / Kenntnisse: ${s.resources.equipment?'geklärt':'offen'}.\nSelbsteinschätzung: ${e.score===null?'keine Gewichtung':e.score+'/100'}.\n${criteria.map(c=>`- ${c.label}: ${s.ratings[c.id]}/5; Gewicht ${s.weights[c.id]}`).join('\n')}\n\n## Rahmenbedingungen und Betreuung\n${s.rules||'Vorgaben noch klären.'}\n${s.supervision||'Betreuung noch klären.'}\n\n## Produktkriterien / Notizen\n${s.notes}\n\n## Weitere Verpflichtungen\n${s.commitments}\n\n## Feedback\n${s.feedback}\n\n## Fragen an die Betreuung (mit Prioritäten)\n${s.checkpointQuestions}\n\n## Offene Punkte\n${e.warnings.map(x=>'- '+x).join('\n')||'Keine automatischen Hinweise. Mit Betreuungsperson prüfen.'}\n\n## Arbeitsjournal\n${s.journal.map(j=>`- ${j.date}: ${j.text}`).join('\n')}\n\n---\nPlanungshilfe auf Grundlage von „Der rote Faden I“ und „Praes ROTER FADEN1“. Aufwandsschätzungen und Bewertungen sind veränderbare Heuristiken, keine schulischen Vorgaben.\n`+"\n"+coachExport(s,e);}
export function phasePlan(s){const names=['Thema & Konzept','Recherche, Untersuchung & Gliederung','Rohfassung schreiben','Überarbeiten & präsentieren'];const sum=s.milestones.reduce((a,b)=>a+b,0);return names.map((name,i)=>({name,hours:sum?evaluateTime(s)*s.milestones[i]/sum:0}));}
function evaluateTime(s){return s.weeks*s.hoursPerWeek*(1-s.buffer/100);}
