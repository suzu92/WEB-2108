##Projektuppgift: gör en fungerande kundkorg 

Uppgiften går ut på att vi ska göra en sida med album som kan läggas i kundkorgen.
Funktionerna som ska vara med i inlämningen är:
* Visa vilka album som går att lägga i kundkorgen
* Kunna lägga till alla album i kundkorgen
* Ta bort ett album från kundkorgen
* Uppdatera antalet i kundkorgen 

Summan i korgen ska även uppdateras samtidigt som antalet album ökar eller minskar. Det ska inte gå att 
beställa mindre än ett album, alltså inte kunna skriva in ett negativt värde i
antalet, då får en istället ta bort det helt.
Det ska även vara möjligt att få fri frakt efter 259 kr, om det inte är uppnådd står det i kundkorgen hur 
mycket som är kvar dit.

Jag brukar fastna i timmar och glömma commit i Github men försöker att vara noga så jag kommer ihåg vad jag har 
provat tidigare och om det funkade eller inte. Projektplaneringen gör jag i Trello.

**Dokumentation**

Jag använde mig till en början bara det som vi gick igenom på lektionerna. Gjorde html och css filerna relativt snabbt.
Känner mig rätt så bekväm med dem. Problemen dök främst upp när jag började med javascript filen.

*Beskriv lite olika lösningar*

Efter en genomgång på en av lektionerna så la jag in alla album i js och bad filen att visas ut i html filen.
Det funkade till en början och med hjälp av console.log förstod jag ju att köp knapparna var klick bara. Tyvärr 
så blev det lite för rörigt och jag förstod inte varför de inte ville visas i kund korgen. Så jag flyttade ut alla 
album till html filen och delade in dem i olika klasser. Jag tyckte det blev mycket lättare och tydligare att förstå då.
Tittade lite på en tutorial på youtube som förklarade en kundkorg ganska bra, hans kod finns att se på:
[GitHub](https://github.com/WebDevSimplified/Introduction-to-Web-Development/tree/master/Introduction%20to%20JavaScript/Lesson%201)

*Beskriv något som var besvärligt*

Själva html och css gick bra, känner mig ganska säker på vad jag gör där. Sökrutan och dropdown rutan gick även ganska
bra att få till med JavaScript. Resten var besvärligt, framför allt att få in det album som valts att hamna i kundkorgen.
Jag fick funktionerna från lektionerna att fungera separat men lyckades inte få ihop dem. Jag kan skriva funktionerna
och förstå på ett ungefär hur de fungerar men inte hur de reagerar med resten av koden. Jag fick hjälp av Michaela och
försökte se hur hon hade gjort men blev även där förvirrad och förstod inte allt. När jag hittade en tutorial på youtube 
med en länk till deras GitHub blev det mycket enklare att förstå steg för steg och jag är ganska säker på att jag kan 
förklara hur och vad jag har gjort som gör att det fungerar. Jag borde nog ha utmanat mig själv och fortsatt med det 
vi gjort på lektionerna men jag minskade min stress och la istället in all data i html filen. Nästa gång ska jag nog
be min pappa eller min sambos bror om hjälp tidigare. Nu kändes det lite sent att be dem om hjälp och jag känner mig nöjd med att
ha förstått ett sätt att göra den här uppgiften på.
Fri frakt var också lite besvärligt att förstå men gick mycket lättare när Carin la upp sin sida på discord och 
jag kunde kolla hur hon hade gjort.

*Beskriv felsökningar när det uppstått problem*

Svårt och veta var jag ska börja. Det har blivit många felsökningar och svordomar men också hurrarop och lycka när 
det äntligen blir ett nytt felmeddelande eller går att se var felet ligger. Jag har använt mig av console.log en hel
del för att se om det skrivs ut i konsolen. Kikat på om inspektorn i webbläsaren har några invändningar, googlat på
olika sidor som stackoverflow, github guides och codepen. Har även klickat på tips från sonar lint som dyker upp i
webstorm, nästan hela tiden.

*Vad som gick bra*

Jag är glad och känner mig nöjd med hur designen på sidan blev. Det gick inte så smidigt som jag hade tänkt mig
och jag är fortfarande frustrerad med att inte veta vad jag gjort för fel. Men jag är helt okej med mitt resultat 
och lite stolt över mig själv att jag lyckade få till det till slut.

*Vad som gick dåligt*

Dåligt... Jag tycker det har varit väldigt svårt. Det känns som att jag inte ens kan fråga om hjälp 
för jag vet inte var problemet börjar. I vissa fall tycker jag att jag har kunnat zooma in på vad som skulle kunna 
vara orsaken men ibland är det på två ställen och då blir jag förvirrad på nytt. Tidspressen i början var ytterligare
en faktor som gjorde att jag stressade upp mig. Alla pusselbitar vi fick för att lösa den här inlämningen var väldigt 
svårt att sätta ihop och till sist blev kände jag mig tvungen att testa en annan variant för att inte resultera i
att försöka limma ihop dem. Jag förstår helt enkelt inte hur en får allt vi har gått igenom att hänga ihop med varandra.

*Vad har jag lärt mig*

Att jag inte tänker lika logiskt som en dator? Nej men jag har lärt mig att det är en hel del pussel att bygga hemsidor.
En viktig bit jag lärde mig tidigt var att jag blir lätt förvirrad av koden om den gör flera saker. Jag har lärt mig
att ta en paus när jag känner att jag börjar krångla till det, ta det steg för steg och försöka att inte göra allting 
på samma gång. Ett problem i taget. Hur får jag den knappen att funka eller hur ska jag få fri frakt att visas och lösa
en pusselbit i taget. Är fortfarande väldigt osäker på JavaScript men det går sakta åt rätt håll. Klarar iallafall av
att förstå det jag skrivit och lärt mig otroligt mycket mer på den här inlämningen om hur JavaScript fungerar.

*Vilka möjligheter jag ser med det jag lärt mig under kursen.*

Det är lite som när jag lärde mig japanska, det är nya tecken ny grammatik och tre skriftspråk som samarbetar med varandra.
Det atr tid att lära sig och komma in i men jag vet att det går. Jag har så här långt i kursen inte kommit till den
lilla tröskeln där det släpper än. Det här är ett helt nytt språk för mig, hiragana och katakana var lite lättare, 
som html och css medan JavaScript är som kanji. Ju mer vi har fått sitta med detta dock har jag insett att det
är otroligt många lösningar och levande sidor som kan skapas med JavaScript och det är ett väldigt logiskt språk som
gör precis vad en skriver åt det att göra. Kan bli otroligt kul att bygga flera roliga saker när jag förstår vad det
är jag ber den göra.

*Motivera en specifik lösning jag valde.*

Jag valde även for loops istället för for of loops. Fick inte riktigt ordning på hur jag skulle göra dem.

*Lämna förslag på förbättringar av min kod*

Jag är övertygad om att det går att halvera all kod jag skrivit och göra det på en timme istället för två veckor.
Men just nu är det på den här nivån jag är. Nu kan jag se vad varje funktion gör och varför det blir så. På den
kunskapsnivån jag är nu blir det bara mer förvirrande för mig att försöka korta ner den. Det skulle dock kunna vara
en rolig grej att öva mer på helgerna, försöka korta ner långa kodstycken och se att en hänger med och att koden 
fortfarande fungerar som den ska. Kände dock inte att jag hade den tiden till denna inlämningen.

*Lämna exempel på lösningar jag valde att inte implementera*

I slutändan la jag bara bilden på en kundkorg på själva knappen, så när en klickar på knappen klickar en på bilden
samtidigt istället för att ha två klickbara länkar. Först var det för att jag tänkte att jag kan nog flytta den i slutet
men det har tagit så lång tid med JavaScript att den får nog bli kvar så. Jag är helt ok med hur det ser ut nu.
Känner mig fortfarande stressad och förvirrad av alla functions och addEvents. 
Får jobba betydligt mer på detta om det ska sitta bättre.
