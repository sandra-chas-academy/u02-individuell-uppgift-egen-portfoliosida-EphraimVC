[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Y0f03qEq)
# Instruktioner

Denna uppgift går ut på att du bygga vidare uppgift u01 - Portfoliosida utifrån designskiss med Javascript. Du är nu fri att ändra till egen design / layout, samt eget innehåll. Det är dock viktigt att du behåller en sektion för CV ("About me") och en sektion med projekt ("Projects") eftersom du ska vidareutveckla sidan med Javascript på dessa sektioner. 

## Vad du ska göra

Du ska bygga vidare på  u01 - Portfoliosida utifrån designskiss med Javascript. och se till att du följer följande kravställningar: 

### CV i en fil:
Dina egna utbildningar och tidigare arbetsplatser ska nu ersätta "About me"-sidan. Ta med så mycket som möjligt att ditt "riktiga CV", men iallafall minst tre poster av varje.
Vilka utbildningar du läst och vilka tidigare arbeten du haft ska ligga i en separat fil i JSON-format. Denna JSON-fil ska läsas och och generera ditt CV på den tidigare motsvarigheten av "About me" sidan.


### Interaktiva scripts:
Din CV-sida ska innehålla minst två interaktiva JavaScript. Exempel kan vara en modal, slideshow, scroll-effekt, dölja/visa element, o.s.v

### Portfolio:
 Du publicerar minst två uppgifter / projekt från tidigare eller nuvarande studier / arbete inom HTML /CSS

### 👉  VG-krav

Din portfolio ska utökas så att den hämtar in publika projekt som finns i din egen Github via API. Den ska visa dessa projekt i din portfolio med namn och beskrivning.

Du får gärna ha både dessa projekt och andra som genereras utifrån JSON-data om du känner för det, eller så ersätter du projekten så det bara är dina Github-projekt. Eventuellt kan du behöva komplettera datan från Github API med t.ex bilder ifrån JSON-datan.

När hämtningen av projekten sker ska det finnas information om att projekten håller på att ladda in så att besökaren inte undrar varför sidan först är tom.



### Tekniska krav:
* Validerad med 0 fel på https://validator.w3.org
* Inga errors i Console

### Sammantfattning av projekt + teoretiska frågor

1. Du sammanfattar ditt projekt i README.md och reflekterar kring styrkor och ev brister. Max 500 ord.
 - grund ideen för detta projekt var att jag skulle göra en ny sida men något strulade till ordenligt sa jag uppdaterade u01 sidan samma dag som inlämningen.
 - jag skapade en json fil med mit cv info, vilket jag sedan använde för att visa den datan i min about sida
 - jag använde async function för att hämta datan från github api, vilket jag sedan använde ett map array metod för att visa fram i olika kort alla projekt som finns i mitt personliga github konto
 - använde separata filer för js och css

brister:
 -  måste inskaffa mer css kunskap

2. Du svarar på dessa frågor (max 800 ord):

Vad kan man utveckla m.h.a av Javascript inom frontend?
- Javascript är viktigaste programmeringspråket när det gälleratt bygga dynamiska och interaktiva webbplatser
- man skappa olika funtkioner och applikationer
- Formulärvalidering: Kontrollera att användare fyllt i ett formulär korrekt innan det skickas till servern.
Drag-and-drop-funktioner: Låta användare flytta element


Vad är JSON och hur används det inom frontend?
 - JSON är (javascript object notaion), det är en typ av fill som lagrar data i sträng format, vilket man sedan kan använda för att visa den datan i frontend sidan
 - JSON data är representerat i nyckel- värde form men som liknar en objekt i sträng format
 - inom frontend används JSON.parse för att omvandla data till en objekt eller array oav objekter, och JSON.stringify för att omvandla den ny inskickade datan till sträng format


Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?
Som frontendutvecklare arbetar man ofta med att hämta och manipulera data från API:er, hantera användarinteraktioner och optimera prestanda på webben
 - hypertext rtansfer protocol, vilket man använder för att kunna kommunicera med servrar som innehar sidan man letar efter, vilket man kan få fram genom en request.
 - hantering av respons koder, 200 OK, 404 not found, 500 internal server error
 - 

## Kriterier för bedömning


Icke Godkänd (IG), Godkänd (G) eller Väl Godkänd (VG)

### Godkänd (G)
Din portfolio-sida uppfyller alla krav enligt kravspecifikationen.
Du visar att du kan utan allvarliga brister eller missar utveckla denna portfoliosida enligt kraven
Du sammanfattar ditt projekt samt ger ett översiktligt och korrekt svar på frågorna


### Väl Godkänd (VG)

Din portfolio-sida uppfyller alla krav enligt kravspecifikationen samt VG-kraven
Du uppvisar en mer avancerad förståelse för Git genom att jobba med en developer-branch som du sedan mergar i main
Du visar att du kan utan brister, eller bara i sådan omfattning att de knappt märks eller påverkar slutresultatet


### Börja uppgift / Din inlämning
* Du börjar och lämnar in din uppgift genom Github Classroom på denna länk.
* Återkoppling ges i Canvas


länk till netlify: https://delightful-lebkuchen-e2ecd3.netlify.app/









# 
