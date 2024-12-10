---
title: "Denkt jou website software in jouw tal(en)?"
date: 2024-10-31
id: "trnslNL"
lang: nl
translates: "trnslEN"
---

_Dit is mijn inzending voor de [IndieWeb Carnaval editie october 2024](https://tilde.team/~zinricky/multilingualism/)._

Elk systeem om websites te vertalen moet een structuur imponeren, anders wordt de complexiteit te groot. Maar structuur brengt beperkingen. Je moet aannames maken over hoe texten-in-meerdere-talen-als-data zich tot elkaar gaan verhouden.

Voor een grote zakelijke of overheidssite zijn die beperkingen het misschien waard omdat systematische, volledige vertaling de doelen van de organisatie bevordert.

Maar dit is een persoonlijk website en het mag dus mijn manier van taalgebruik weerspiegelen. Ik ben opgegroeid in een zeer meertalige omgeving, waar taal en vertalen zelfs expliciete onderwerpen van aandacht waren vanwege het werk dat mijn ouders deden als expats. Hierdoor is mijn moedertaal eigenlijk een mix van talen. Als dat een onbekend idee is voor jou, kijk dan naar de eerste video op de Wikipedia pagina over [code-switching](https://en.wikipedia.org/wiki/Code-switching).

Ik heb dus gereedschap nodig voor mijn website die een soort code-switching toestaat: op een ongestructureerde manier schakelen tussen talen. In de toekomst, wanneer deze site meer zakelijke doeleinden ondersteunt, zou een voorspelbare structuur met automatische links tussen vertalingen wel nuttig kunnen zijn. Maar zelfs dan zullen Engelse en Nederlandse delen waarschijnlijk voor verschillende doelgroepen worden geschreven. Of zal er nog steeds veel op één pagina gemengd willen worden. Technische documentatie heeft ten slotte van nature veel Engelse termen, ongeacht de hoofdtaal waarin het wordt geschreven. En Nederlanders kunnen over het algemeen wel wat Engels aan.

Voor nu, echter, zijn doodgewone handgemaakte hyperlinks de beste manier om meertaligheid binnen documenten weer te kunnen geven.

Het is licht ironisch dat de vertaling-links boven aan dit artikel en het Engelse origineel mijn probleem juist illustreren.

Ik had de [Multilanguage Plugin](https://lume.land/plugins/multilanguage/) geïnstalleerd van de [static site generator Lume ](https://lume.land) die ik gebruik, maar het voegt taalcodes toe aan het begin van elke URL. Dat wil ik niet, om verschillende redenen waar ik het een andere keer over zal hebben.

:::draft
Het dwingt je om keuzes te maken die ik helemaal niet wil maken, zoals hoe/of je artikelen in verschillende talen opneemt in overzichtslijsten op je site ...
:::

Maar, hoewel ik dacht dat ik mijn code onafhankelijk had gemaakt van de plugin, gingen de links toch stuk toen ik die uitzette. Kennelijk had ik toch een variabel gebruikt die door de plugin werdt geïntroduceerd. Dus om dit artikel op tijd af te krijgen, moest ik kiezen tussen géén vertaling, of suboptimale URLs.

Ik ga daarom links naar vertalingen met de hand toevoegen, niet automatisch. De enige automatisering zal wellicht zijn de markup genereren en de URLs opzoeken op basis van een kortere ID. Mijn code zal geen aannames maken over de URL structuur van artikelen in verschillende talen. Dat wil niet zeggen dat ik nooit dergelijke structuur zal willen hebben, maar het is nu nog te vroeg voor mij om die beslissing te maken.

---

Stop de pers: gelukkig had onze gastheer ons tot 11:00 op 1 november gegeven om onze bijdragen in te sturen. Want vanochtend vroeg bedacht ik een oplossing.

I was van plan om af te sluiten met de vraag of het Web uberhaupt mijn soort flexibele meertaligheid kan ondersteunen. Het Web is georganiseerd in domeinnamen, mappen en paden, en elke html zou idealiter een `lang=…` attribuut moeten hebben. Geen wonder dat elk vertaalsysteem allemaal rigiditeit introduceert, want ze zijn allemaal gebaseerd op een substraat die werkt met stricte scheidingen.

Maar ik werd wakker uit een lichte slaap met een oplossing, in ieder geval een deeloplossing. Het was iets dat ik in de documentatie van Lume had gezien: een [selectie-mechanisme op niveau van een alinea](https://lume.land/plugins/multilanguage/#link-to-a-page-in-current-language).

Net als alle oplossingen heeft ook deze zijn nadelen. In dit geval komt er wat meer markup bij die de auteur moet schrijven. Maar het idee is: afzonderelijke alinea's of hele pagina's kunnen een keuzeknop erboven krijgen om de taal te veranderen.

Dit maakt het mogelijk om hele documenten te vertalen, of alleen delen ervan, zonder een afhankelijkheid van enige externe processen. Alles zit in de markup van een pagina. Je kunt hiermee bijvoorbeeld alleen de samenvatting bovenaan vertalen, of de paragrafen één voor één vertalen wanneer je tijd hebt.

Dit kan aan de voorkant met enkel CSS worden gemaakt. Het genereren van HTML vergt wel wat sjabloon-scripting, maar dat is vrij simpel want het hoeft niet verder te kijken dan de huidige sectie of pagina.

Ik zal binnenkort een demo hiervan maken.



