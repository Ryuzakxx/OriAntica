/* ═══════════════════════════════════════════
   ORIA MEDIEVALE — Dati condivisi
   ═══════════════════════════════════════════ */

const LEGGENDE = [
  {
    id: 'oria-fumosa',
    tag: 'Leggenda Popolare · XIII Secolo',
    title: 'Oria Fumosa — La Maledizione della Vergine',
    icon: '🌫️',
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Panorama_di_Oria_da_Nord.jpg',
    imgAlt: 'Mura di Oria nella nebbia',
    img2: '',
    imgAlt2: 'Panorama di Oria',
    excerpt: 'Nel XIII secolo i lavori per erigere le mura falliscono misteriosamente. Un oracolo richiede il sacrificio di una vergine. La madre, distrutta dal dolore, lancia la sua terribile maledizione sulla città.',
    detailTag: 'Leggenda Popolare · XIII Secolo',
    sideInfo: [
      ['Tipo','Leggenda popolare'],['Epoca','XIII Secolo'],
      ['Tema','Sacrificio, maledizione'],['Fonte','Tradizione orale'],
      ['Simbolo','La nebbia su Oria']
    ],
    relLeggende: ['bianca-guiscardi','san-barsanofio'],
    relLuoghi: ['castello','porta-taranto'],
    body: `
      <p>Nonno Cosimo così racconta, in una sera d'inverno, ai suoi nipotini la leggenda di <em>Oria fumosa</em>, tramandata oralmente di padre in figlio tra le famiglie oritane.</p>

      <p>In una delle tante riunioni del Consiglio di Amministrazione, il comandante Marcuzio e un piccolo gruppo di consiglieri proposero di erigere le mura di cinta di Oria, capitale della Messapia. La mozione fu approvata e fu dato l'incarico a Maica per coordinare il progetto. Dopo pochi giorni iniziarono i lavori e tutto sembrava andare a lieto fine — ma non fu così. Una mattina il lavoro dei muratori si vide crollato. Edificato di nuovo con mezzi più sicuri, anche questa volta lo spettacolo dei crolli si ripeté.</p>

      <p>Convocato il Consiglio, la maggioranza volle dare la colpa ai muratori e si deliberò di affidare a Maica l'incarico di dirigere personalmente la costruzione. Le mura furono ultimate e tutti i cittadini erano orgogliosi nell'ammirarle: la base della muraglia a forma cilindrica era larga cinque metri, con tre porte foderate di ferro e vedette di forma quadrata ogni cinquanta metri. Una piccola stanza per i guardiani di turno era edificata a sinistra di ogni porta.</p>

      <p>Una mattina, nelle prime ore, i paesani furono svegliati da un rumoroso boato: le mura erano di nuovo completamente rase al suolo.</p>

      <p>Fu riunito d'urgenza il consiglio. Maica prese la parola:</p>
      <blockquote>«Quanto è avvenuto è stato un vero castigo degli dei, perché il lavoro è stato eseguito con attenta e abile maestria. Gli dei sono indignati e non sappiamo perché. Bisogna consultare la megera Laila, la quale abita in un antro situato in una delle nostre colline — solo una maga può risolvere l'enigma.»</blockquote>

      <p>Fu inviata una commissione. Arrivata alla tana della maga, la trovarono intenta a girare una grande palla sulla fiamma del focolare, in un antro infestato da un odore sgradevole. Dopo aver ascoltato il motivo della visita, Laila disse: <em>"Il crollo delle mura è avvenuto per volere degli dei, oppure è indignato lo stesso Giove. Io a mezzanotte mi incontrerò con l'oracolo e tutto sarà chiarito."</em> La delegazione andò via, perché nell'antro c'era un puzzo di zolfo che soffocava.</p>

      <p>Nel salone del Consiglio, da poco era trascorsa mezzanotte, quando la megera svegliò tutti i consiglieri con un grido: <em>"Non solo gli dei sono indignati — ma lo stesso Giove. E quello che si chiede è l'olocausto di una neonata di appena tre giorni."</em></p>

      <p>La maga voleva vendicarsi di Matia, una sua paesana che una volta l'aveva cacciata a calci. Matia aveva da tre giorni dato alla luce una bella piccina, alla quale fu dato il nome di Felicita. Ecco perché Laila propose all'Amministrazione l'olocausto di quella bambina. Il consiglio si riunì il giorno dopo in una discussione accesa, e alla fine — per il saggio intervento di Maica — fu approvato l'olocausto della piccola Felicita.</p>

      <p>All'olocausto assistettero il capitano, Maica e due altri del Consiglio. Tutti rimasero meravigliati quando videro arrivare la maga con la piccina tra le braccia — lei stessa volle gettarla nel fuoco. Il fumo smorzò immediatamente il vagito della piccola Martire, che in pochissimo tempo fu carbonizzata. I suoi resti furono chiusi in un cofanetto d'oro e sotterrati sotto le mura. Il capitano diede il compenso alla maga, ma una saetta la fulminò prima che potesse raccogliere il denaro: cadde esanime al suolo.</p>

      <p>Quella mattina i paesani furono svegliati dalle urla isteriche di Matia. Quando si svegliò e non vide al suo fianco la sua amata figlia, scese dal letto con la sola camicia, con i capelli al vento e scalza, e andò per le vie del paese a cercarla. Molte amiche la aiutarono nella ricerca, ma tutto sembrava avvolto nel mistero. Da un vicolo sbucò Rocco, un vecchietto testimone di quanto era avvenuto, che si avvicinò commosso e raccontò tutto. Matia cadde tra le braccia di un'amica; quando rinvenne, volle andare a rovistare tra le ceneri per trovare almeno i resti della sua Felicita — ma neanche questo le fu concesso.</p>

      <p>Al colmo della disperazione, alzò le braccia al cielo e maledisse la città:</p>
      <blockquote>«FUMA CITTÀ INFAME / FUMA IN ETERNO — gridò — COME FUMA IL MIO CUORE / SCONVOLTO DALLE FURIE DELL'AVERNO.»</blockquote>

      <p>Da quel giorno, secondo la tradizione popolare, Oria è spesso avvolta da una nebbia fitta e misteriosa, insolita per una città del Salento battuta dal sole. Quando la nebbia scende sul colle del Vaglio, è il cuore di Matia che continua a fumare — eterno e inconsolabile.</p>

      <p>Un giornalista di passaggio ad Oria, accolto dall'Assessore provinciale dei Beni Culturali, volle lasciare questo saluto in dialetto, che riportiamo come lo tramanda la tradizione:</p>
      <blockquote>«A Oria fumosa<br>rubbara 'na carosa,<br>era tanta picciredda,<br>ca si la mintera a mposcja.»</blockquote>
      <p class="fonte"><em>Fonte: <strong>La città di Oria raccontata da Antimo Baldari, il sarto poeta</strong> — I Tesori della Biblioteca De Pace-Lombardi</em></p>
    `
  },
  {
    id: 'bianca-guiscardi',
    tag: 'Leggenda · Epoca Medievale',
    title: 'Bianca Guiscardi e la Torre del Salto',
    icon: '🗼',
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Castello_di_Oria_al_Tramonto.jpg',
    imgAlt: 'Torre del Salto al tramonto',
    img2: '',
    imgAlt2: '',
    excerpt: 'Una giovane nobildonna si getta dalla Torre del Salto del castello per sfuggire a un matrimonio imposto con un castellano anziano. Il suo spirito vaga ancora tra le antiche mura.',
    detailTag: 'Leggenda · Epoca Medievale',
    sideInfo: [
      ['Tipo','Leggenda romantica'],['Epoca','Medioevo'],
      ['Luogo','Torre del Salto'],['Tema','Amore, libertà'],
      ['Fenomeno','Apparizione fantasmatica']
    ],
    relLeggende: ['oria-fumosa','san-barsanofio'],
    relLuoghi: ['castello'],
    body: `
      <p>Sulla collina più alta della città di Oria svetta l'imponente Castello, una fortezza medievale costruita nel XIII secolo e circondata da storie e misteri tramandati nei secoli. Tra le sue torri, una in particolare custodisce una delle leggende più tragiche e affascinanti della tradizione locale: la <strong>Torre del Salto</strong>.</p>

      <p>La leggenda racconta che molti secoli fa una giovane fanciulla, ancora adolescente, fu promessa in sposa a un potente castellano, un uomo molto più anziano di lei. Non era una scelta dettata dall'amore, ma da accordi familiari e interessi di potere, come spesso accadeva nel Medioevo.</p>

      <p>La notte delle nozze, mentre il castello era immerso nel silenzio e illuminato dalla luce della luna, la ragazza si rifugiò nella torre più alta del maniero. Da lassù poteva vedere la città addormentata e le campagne che si estendevano fino all'orizzonte. In quel momento capì che non avrebbe mai accettato una vita imposta, accanto a un uomo che non amava.</p>

      <figure>
        <img src="./images/leggende/bianca1.png" alt="Bianca Guiscardi nella torre">
        <figcaption><i>Immagine generata da IA. Non è un'opera manuale né una fonte storica verificata</i></figcaption>
      </figure>

      <br>

      <p>Secondo la tradizione, la giovane prese allora una decisione estrema: si gettò dalla torre, scegliendo la libertà della morte piuttosto che un destino che sentiva come una prigione. Da quel tragico gesto la torre prese il nome di <em>Torre del Salto</em>, che ancora oggi ricorda quella storia di dolore e ribellione.</p>

      <p>Con il passare dei secoli la vicenda è diventata leggenda. Molti abitanti del luogo raccontano che, nelle notti di luna piena, tra le antiche finestre del castello si possa intravedere l'ombra della giovane castellana, come se il suo spirito continuasse a vagare tra quelle mura di pietra, sospeso tra memoria e mistero.</p>

      <figure>
        <img src="./images/leggende/bianca2.png" alt="Bianca Guiscardi che si lancia dalla torre">
        <figcaption><i>Immagine generata da IA. Non è un'opera manuale né una fonte storica verificata</i></figcaption>
      </figure>

      <h3>La Cripta dei Santi Crisante e Daria</h3>
      <p>Ai piedi della torre si trova ancora oggi l'antica cripta dei Santi Crisante e Daria, uno dei luoghi più antichi della città, che contribuisce a rendere questo angolo del castello ancora più suggestivo e carico di storia. Capitelli messapici, colonne e marmi dell'antico tempio bizantino segnano l'ingresso della cripta, interrata nel XIII secolo durante i lavori voluti da Federico II.</p>

      <p>La Torre del Salto non è quindi solo una parte dell'architettura del castello, ma anche il simbolo di una leggenda che continua ad affascinare visitatori e abitanti, ricordando come, tra le pietre dei luoghi antichi, possano vivere storie capaci di attraversare i secoli.</p>
    
      <figure>
        <img src="./images/leggende/bianca3.png" alt="Cripta dei santi sotto la torre del salto">
        <figcaption><i>Immagine generata da IA. Non è un'opera manuale né una fonte storica verificata</i></figcaption>
      </figure>

      `
  },
  {
    id: 'san-barsanofio',
    tag: 'Tradizione Religiosa · dal 504 d.C.',
    title: 'I Miracoli di San Barsanofio',
    icon: '✝️',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Statua_S_Barsanofio_Oria.jpg',
    imgAlt: 'Statua di San Barsanofio ad Oria',
    img2: '',
    imgAlt2: 'Cattedrale di Oria',
    excerpt: 'Il patrono di Oria appare armato per respingere un assedio spagnolo nel 1504, stende il mantello per deviare un bombardamento nel 1943 e impedisce miracolosamente il furto delle proprie reliquie.',
    detailTag: 'Tradizione Religiosa · dal 504 d.C.',
    sideInfo: [
      ['Tipo','Tradizione religiosa'],['Patrono','Dal 504 d.C.'],
      ['Reliquie','In Cattedrale'],['Miracolo 1','Assedio 1504'],
      ['Miracolo 2','Bombardamento 1943']
    ],
    relLeggende: ['scenni-cristu'],
    relLuoghi: ['cattedrale','san-francesco'],
    body: `
      <p>San Barsanofio di Gaza è il patrono principale di Oria, e la sua protezione sulla città si manifesta, secondo la tradizione locale, attraverso una serie di prodigi straordinari che attraversano i secoli come un filo dorato.</p>
      <h3>L'Assedio del 1504</h3>
      <p>Nel 1504, le truppe spagnole al comando di Pedro de Paz posero l'assedio alla città. La notte prima dell'attacco decisivo, il comandante ebbe una visione: un anziano monaco armato apparve davanti a lui, fissandolo con occhi che non lasciavano spazio a dubbi. Era Barsanofio, che con la sua sola presenza dissuase il condottiero dall'attaccare. Le truppe si ritirarono. Oria fu salva.</p>
      <figure>
        <img src="./images/leggende/san-barsanofio1.jpg" alt="San Barsanofio in azione">
        <figcaption><i>Immagine generata da IA. Non è un'opera manuale né una fonte storica verificata</i></figcaption>
      </figure>
      <h3>Il Bombardamento del 7 Settembre 1943</h3>
      <p>Nel pieno della Seconda Guerra Mondiale, il 7 settembre 1943 aerei alleati puntarono la città per dei bombardamenti. Secondo la tradizione, Barsanofio stese il suo mantello sul cielo di Oria: un improvviso acquazzone violentissimo costrinse gli aerei a deviare. La città fu risparmiata.</p>
      <figure>
        <img src="./images/leggende/san-barsanofio2.png" alt="San Barsanofio in azione">
        <figcaption><i>Immagine generata da IA. Non è un'opera manuale né una fonte storica verificata</i></figcaption>
      </figure>
      <h3>Il Miracolo delle Reliquie</h3>
      <p>Al tempo della traslazione delle reliquie, ladri tentarono di portare via il corpo del Santo. Ma il braccio di Barsanofio si agganciò miracolosamente a una colonna della chiesa, rendendo impossibile il furto. Le reliquie rimasero ad Oria, dove sono custodite ancora oggi nella Cattedrale di Santa Maria Assunta.</p>
      <figure>
        <img src="./images/leggende/san-barsanofio3.png" alt="San Barsanofio in azione">
        <figcaption><i>Immagine generata da IA. Non è un'opera manuale né una fonte storica verificata</i></figcaption>
      </figure>
      <br>
      <em>Testimonianze orali raccolte dagli anziani di Oria</em>
      `
  },
  {
    id: 'scenni-cristu',
    tag: 'Tradizione Pasquale · Secoli di Storia',
    title: 'Scenni Cristu — La Passione di Cristo',
    icon: '🕯️',
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Panorama_of_Oria.jpg',
    imgAlt: 'Processione dei Misteri di Oria',
    img2: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Oria_panorama.jpg',
    imgAlt2: 'Veduta di Oria',
    excerpt: 'Nei giovedì di Quaresima fino al Mercoledì Santo, i confratelli dell\'Arciconfraternita della Morte portano in processione la statua di Gesù Morto su una bara a baldacchino bianco decorata di fiori.',
    detailTag: 'Tradizione Pasquale · Secoli di Storia',
    sideInfo: [
      ['Tipo','Tradizione religiosa'],['Periodo','Quaresima'],
      ['Confraternita','Arciconfraternita della Morte'],
      ['Statua','Gesù Morto in baldacchino'],['Carattere','Processione notturna']
    ],
    relLeggende: ['san-barsanofio'],
    relLuoghi: ['cattedrale'],
    body: `
      <p>Tra le tradizioni religiose più antiche e sentite di Oria vi è lo <em>Scenni Cristu</em> — letteralmente "Discesa di Cristo" — una processione che nei giovedì di Quaresima fino al Mercoledì Santo trasforma le strade del centro storico in un teatro sacro vivente.</p>
      <p>La statua di Gesù Morto, distesa su una bara a baldacchino bianco decorata di fiori, viene portata a spalla dai confratelli dell'Arciconfraternita della Morte, vestiti del tradizionale mantello nero. Il corteo si snoda tra le viuzze di tufo al lume delle torce, in un silenzio rotto solo dal canto delle preghiere.</p>
      <blockquote>«Chi vede la processione almeno una volta, non la dimentica mai più.»<br><em>— Detto popolare oritano</em></blockquote>
      <p>Questa ritualità secolare affonda le radici nell'iconografia barocca del dolore e della redenzione. L'Arciconfraternita della Morte, le cui origini risalgono a molti secoli fa, è ancora oggi una delle istituzioni religiose più vive della comunità oritana, custode di riti e canti che si trasmettono di generazione in generazione.</p>
      <p>L'oratorio della Confraternita è adiacente alla Cattedrale, dove si trova anche la celebre Cripta delle Mummie: 12 corpi imbalsamati dei confratelli defunti, disposti in nicchie lungo le pareti, vestiti del mantello nero, eterni testimoni di questa devozione millenaria.</p>
    `
  },
  {
    id: 'gallana',
    tag: 'Tradizione Folkloristica · Agosto',
    title: 'Il Pellegrinaggio delle 100 Croci',
    icon: '🌾',
    img: 'https://www.qrtour.it/wp-content/uploads/2023/10/Oria-Chiesa-madonna-Gallana.jpeg',
    imgAlt: 'Chiesa di Santa Maria di Gallana',
    img2: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Panorama_di_Oria_da_Nord.jpg',
    imgAlt2: 'Campagna oritana',
    excerpt: 'Nella notte tra il 14 e il 15 agosto, i fedeli percorrono a piedi la campagna fino alla chiesa di Santa Maria di Gallana, compiendo tre giri cerimoniali attorno all\'altare contro gli spiriti maligni.',
    detailTag: 'Tradizione Folkloristica · Ferragosto',
    sideInfo: [
      ['Tipo','Pellegrinaggio notturno'],['Data','14-15 Agosto'],
      ['Meta','S. Maria di Gallana'],['Rito','3 giri cerimoniali'],
      ['Origine','Culto mariano antico']
    ],
    relLeggende: ['scenni-cristu'],
    relLuoghi: ['gallana'],
    body: `
      <p>Nella notte che precede il 15 agosto, Ferragosto, un'antica corrente di fede si mette in moto nella campagna oritana. I fedeli partono dal centro di Oria e percorrono a piedi i sentieri tra ulivi e campi assolati — di notte, al chiaro di luna o di torcia — fino alla piccola chiesa rurale di Santa Maria di Gallana, a qualche chilometro dal paese.</p>
      <p>La chiesa stessa è un luogo di grande antichità: eretta su resti di una villa romana, risale almeno all'XI-XII secolo. La sua facciata sobria in pietra grezza e gli affreschi medievali nell'abside custodiscono secoli di devozione popolare.</p>
      <blockquote>«Si cammina nella notte perché la notte è il tempo degli spiriti, e solo la preghiera li tiene lontani.»<br><em>— Anziana pellegrina di Oria</em></blockquote>
      <p>Una volta giunti alla chiesa, i pellegrini compiono tre giri cerimoniali attorno all'altare recitando formule di protezione contro gli spiriti maligni — un rito che mescola la devozione mariana con strati più antichi di religiosità popolare, forse pre-cristiana, legata alla propiziazione dei raccolti e alla protezione dei campi.</p>
      <p>Di particolare pregio nella chiesa è la <em>Natività policroma</em> in pietra attribuita allo scultore salentino Nuzzo Barba (XV secolo), nella cappella di destra: un'opera di rara bellezza che i pellegrini salutano all'arrivo come fosse un volto familiare.</p>
    `
  },
  {
    id: 'ragioniere',
    tag: 'Racconto Popolare',
    title: 'Il sogno del ragioniere',
    icon: '🌾',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Statua_S_Barsanofio_Oria.jpg',
    img2: '',
    imgAlt: 'San Barsanofio',
    imgAlt2: '',
    excerpt: 'Un racconto popolare narra di un ragioniere che, durante una notte di Ferragosto, sognò di essere in presenza di San Barsanofio.',
    detailTag: 'Racconto Popolare · San Barsanofio',
    sideInfo: [
      ['Tipo','Racconto popolare'],['Data','29-30 Agosto']
    ],
    relLeggende: ['san-barsanofio', 'mercante'],
    body: `
      <p>Durante il periodo dei festeggiamenti della festa Patronale di San Barsanofio, vi era spesso la richiesta delle associazioni cattoliche del luogo un piccolo contributo economico per sostenere la realizzazione della festa.</p>
      <p>Si racconta che, al tempo sussisteva un ragioniere, di nome sconosciuto, che poco ne voleva sapere di contribuire alla festa.</p>
      <p>Quando gli venne chiesto un contributo, lui rispondeva sempre che non credeva nell'esistenza di San Barsanofio, e lo mandava "a quel paese".</p>
      <p>Quella stessa sera, durante la notte, vide San Barsanofio all'interno della sua casa, vicino al suo letto. San Barsanofio è spesso definito uno molto "manesco" fra gli abitanti di Oria, e così tirò uno schiaffo al ragioniere e disse: "Ora ci credi?".</p>
      <blockquote>«Non mi ricordo per quale motivo, sono sicuro che in qualche modo, quel signore da quel momento in poi cominciò a interessarsi della festa»<br><em>— Anziano di Oria</em></blockquote>
    `
  },
  {
    id: 'mercante',
    tag: 'Racconto Popolare',
    title: 'Il mercante durante la carestia',
    icon: '🌾',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Panorama_di_Oria.jpg',
    img2: '',
    imgAlt: 'Il mercante ad Oria',
    imgAlt2: 'Campagna oritana',
    excerpt: 'Un racconto popolare narra di un mercante che si trovava ad Oria durante un periodo di carestia.',
    detailTag: 'Racconto Popolare · San Barsanofio',
    sideInfo: [
      ['Tipo','Racconto popolare'],['Data','~ 1504']
    ],
    relLeggende: ['san-barsanofio', 'ragioniere'],
    body: `
      <p>Si racconta che, poco dopo che San Barsanofio divenisse ufficialmente patrono e protettore di Oria, la città stava vivendo un periodo di difficoltà economica e di carestia.</p>
      <p>Durante un caldo pomeriggio, un mercante con il carro pieno di viveri stava passeggiando tra le strade della città, quando ad un tratto apparve un signore anziano e molto alto, con la barba molto lunga.</p>
      <p>Questo signore, per sfamare il popolo di Oria, si sfilò un anello dal dito e lo diede al mercante, comprando così il necessario.</p>
      <p>Qualche tempo dopo, quando i popolani si recarono alla chiesa di San Barsanofio, si accorsero che alla statua del santo mancava un anello.</p>
      <blockquote>«Le persone si sono accorte dopo un po' di tempo che mancava un anello a San Barsanofio.»<br><em>— Cittadino di Oria</em></blockquote>
    `
  },
  {
    id: 'streghe',
    tag: 'Racconto Popolare',
    title: 'Streghe e fantasmi…',
    icon: '🧙',
    img: '',
    img2: '',
    imgAlt: 'Streghe e fantasmi',
    imgAlt2: 'Illustrazione medievale',
    excerpt: 'Un racconto estrapolato da un libro che parla delle tradizioni e vecchie usanze di Oria, tra streghe, folletti e apparizioni misteriose.',
    detailTag: 'Racconto Popolare · Vita di campagna',
    sideInfo: [
      ['Tipo','Racconto popolare'],['Data','Non specificata']
    ],
    relLeggende: ['san-barsanofio', 'ragioniere'],
    body: `
      <p>In quello squarcio di vita vissuta nella tradizione si credeva ciecamente alle streghe, ai folletti, a tutte quelle diavolerie che venivano tramandate ai bambini dai genitori, dai nonni, oppure da amici. La magia, per esempio, sembrava addirittura che fosse opera diabolica, perché il suo potere era tanto e si diceva che le maghe volavano per aria a cavalcioni di una scopa.</p>
      <p>Il barbiere non era d'accordo con i suoi clienti quando gli dicevano vere l'esistere delle streghe, dei folletti e tante altre diavolerie. Non poteva ammettere le indemoniate e le anime che riapparivano ai passanti sulla terra, perché era pienamente convinto e affermava che "quando uno veniva chiamato da Dio, non poteva tornare in questa valle di lacrime".</p>
      <p>Una mattina non si fece altro che parlare di ciò che la notte prima era capitato a Giovanni, un contadino, il quale, come ogni sabato sera, dopo la bardatura dell'asino, sul quale caricava gli ortaggi che vendeva al mercato domenicale di Manduria, si avviò per arrivare prima dell'alba. Mentre stava camminando dietro la bestia, vide in lontananza un non so che di bianco che si muoveva. Tutto ad un tratto vide spuntare due enormi alacce. L'asino, forse spaventato, fece dietro front e di corsa tornò verso il paese.</p>
      <p>Una vecchia diceva che il fantasma poteva essere l'apparire di un'anima condannata da Dio per scontare sulla terra chissà quale peccato. La Lalla fu un vero castigo di Dio per i paesani. Il fantasma apparve in diverse occasioni, seminando terrore tra le vie del paese.</p>
      <p>Un giovanotto, quando in lontananza vide arrivare la Lalla che ad una certa distanza cominciava a muovere le sue enormi alacce, sparò un colpo in aria. «Non mi uccidere – gridò una voce di donna – sono un'anima cristiana». Era una donna tra due lenzuola ammainate, non tanto giovane, che i paesani dicevano <em>«Filumena la culu 'gnuru»</em>. Si scoprì che il tutto era stato organizzato da una banda di uomini di malaffare.</p>
      <p><em>Estrapolato dal libro "Città di Oria, raccontata da Antimo Baldari, il sacro poeta"</em></p>
    `
  }
];

const LUOGHI = [
  {
    id: 'castello',
    tag: 'Architettura Militare · XIII Sec.',
    title: 'Castello Svevo di Oria',
    icon: '🏰',
    img: './images/torre1.jpg',
    imgAlt: 'Castello Svevo di Oria',
    img2: './images/porta-castello.jpg',
    imgAlt2: 'Vista aerea del castello',
    excerpt: 'Voluto da Federico II di Svevia nel XIII secolo, il castello triangolare con tre torri domina la piana messapica. Oggi museo, custodisce la leggenda di Bianca Guiscardi.',
    zona: 'centro',
    sideInfo: [
      ['Stile','Militare svevo'],['Sec.','XIII (Federico II)'],
      ['Pianta','Triangolare'],['Torri','3'],
      ['Oggi','Temporaneamente chiuso (purtroppo)']
    ],
    relLuoghi: ['cattedrale','porta-taranto'],
    relLeggende: ['bianca-guiscardi','oria-fumosa'],
    body: `<p>Il castello di Oria è uno dei capolavori dell'architettura militare federiciana in Puglia. Sorge sul punto più alto del colle del Vaglio, là dove già esisteva un insediamento messapico e, più tardi, un primo nucleo normanno.</p><p>Federico II di Svevia lo fece ricostruire nel XIII secolo conferendogli la planimetria triangolare con tre torri che ancora oggi lo caratterizza: la Torre Quadrata (mastio), la Torre del Cavaliere e la celeberrima Torre del Salto, dalla quale secondo la leggenda si gettò Bianca Guiscardi. Le mura sono in pietra calcarea locale, spesse e compatte, pensate per resistere agli assedi medievali.</p><blockquote>Sotto la Torre del Salto si trova un'antichissima cripta ipogea dei Santi Crisante e Daria, risalente all'epoca basiliana.</blockquote><p>Oggi il castello non è aperto al pubblico. Speriamo ancora per poco!</p>`
  },
  {
    id: 'cattedrale',
    tag: 'Architettura Religiosa · XVIII Sec.',
    title: 'Cattedrale di Santa Maria Assunta',
    icon: '⛪',
    img: './images/cattedrale1.jpg',
    imgAlt: 'Facciata della Cattedrale di Oria',
    img2: '',
    imgAlt2: 'Interno della Cattedrale',
    excerpt: 'Ricostruita tra il 1750 e il 1769 su progetto di Giustino Lombardi dopo il terremoto del 1743. Conserva le reliquie di San Barsanofio e la cripta con 12 mummie dei confratelli.',
    zona: 'centro',
    sideInfo: [
      ['Stile','Barocco pugliese'],['Costruzione','1750–1769'],
      ['Progetto','Giustino Lombardi'],['Reliquie','San Barsanofio'],
      ['Cripta','12 mummie']
    ],
    relLuoghi: ['castello','san-francesco'],
    relLeggende: ['san-barsanofio','scenni-cristu'],
    body: `<p>La Cattedrale di Santa Maria Assunta, che sorge al centro della città, è il cuore religioso e artistico di Oria. L'edificio attuale fu interamente ricostruito tra il 1750 e il 1769 da Giustino Lombardi, dopo che il violento terremoto del 20 febbraio 1743 aveva reso inagibile la precedente struttura medievale.</p><p>La facciata in pietra locale si apre su un interno a tre navate ricco di stucchi dorati, altari marmorei e tele di scuola napoletana. La grande cupola, visibile da chilometri di distanza, domina il profilo urbano di Oria insieme alle torri del castello.</p><p>Nella Cattedrale sono conservate le reliquie di San Barsanofio di Gaza, patrono principale della città. Sotto la navata principale si apre la <em>Cripta delle Mummie</em>: 12 corpi imbalsamati dei confratelli dell'Arciconfraternita della Morte, disposti in nicchie lungo le pareti nell'abito nero della confraternita, silenziosi testimoni di secoli di devozione.</p><blockquote>«Nella cripta il tempo si ferma. Quei volti sembrano voler dire qualcosa che le parole non riescono a contenere.»</blockquote>`
  },
  {
    id: 'porta-taranto',
    tag: 'Architettura Urbana · Medioevo',
    title: 'Porta Taranto — Porta degli Ebrei',
    icon: '🚪',
    img: 'https://catalogazione.cartapulia.it/resource/image/files/68258_SBAAASBA131243%20(1447868178).jpg',
    imgAlt: 'Porta Taranto di Oria',
    img2: '',
    imgAlt2: 'Dettaglio architettonico Porta Taranto',
    excerpt: 'Una delle porte storiche delle mura medievali, nota come "Porta degli Ebrei" per il prospiciente quartiere della comunità ebraica medievale, attiva tra il IX e l\'XI secolo.',
    zona: 'centro',
    sideInfo: [
      ['Tipo','Porta urbana'],['Epoca','Medievale'],
      ['Nome alt.','Porta degli Ebrei'],['Comunità','Ebraica IX-XI sec.'],
      ['Funzione orig.','Accesso da Taranto']
    ],
    relLuoghi: ['castello','cattedrale'],
    relLeggende: ['oria-fumosa'],
    body: `<p>Porta Taranto è una delle porte storiche che si aprivano nelle antiche mura medievali di Oria, l'accesso principale per chi arrivava dalla direzione di Taranto lungo la via consolare. La sua struttura attuale risale al periodo medievale, ma insiste su tracciati viarii assai più antichi.</p><p>Il nome popolare di "Porta degli Ebrei" testimonia la presenza, nel quartiere immediatamente adiacente alla porta, di una fiorente comunità ebraica attiva tra il IX e l'XI secolo. La comunità ebraica di Oria fu una delle più importanti dell'Italia meridionale nel Medioevo alto: trasmise cultura, filosofia e testi nel Mediterraneo, e lasciò una traccia indelebile nella toponomastica e nella memoria collettiva della città.</p><blockquote>«La pietra non dimentica chi l'ha attraversata. Porta Taranto ricorda ogni passo.»</blockquote>`
  },
  {
    id: 'san-francesco',
    tag: 'Architettura Religiosa · XIII Sec.',
    title: 'Chiesa di San Francesco d\'Assisi',
    icon: '⛪',
    img: 'https://www.sigecweb.beniculturali.it/images/fullsize/ICCD1033054/ICCD11972818_SBAAASBA131485.jpg',
    imgAlt: 'Chiesa di San Francesco di Oria',
    img2: '',
    imgAlt2: 'Interno della chiesa',
    excerpt: 'Fondata nel XIII secolo dai Frati Minori, conserva un ciclo di affreschi medievali e un pregevole portale gotico. Nel convento annesso fu ospitato lo stesso San Bonaventura.',
    zona: 'centro',
    sideInfo: [
      ['Ordine','Frati Minori'],['Fondazione','XIII Sec.'],
      ['Stile','Gotico-pugliese'],['Affresco','Ciclo medievale'],
      ['Ospite illustre','San Bonaventura']
    ],
    relLuoghi: ['cattedrale'],
    relLeggende: ['san-barsanofio'],
    body: `<p>La chiesa di San Francesco d'Assisi e l'annesso convento francescano rappresentano uno dei complessi religiosi medievali meglio conservati di Oria. Fondati nel XIII secolo dai Frati Minori, poco dopo la morte di Francesco d'Assisi, rispondevano all'espansione del movimento francescano nel Mezzogiorno normanno-svevo.</p><p>Il portale gotico d'ingresso, con i suoi archi a sesto acuto e i fregi floreali scolpiti nella pietra locale, è uno degli esempi più eleganti del gotico pugliese a Oria. All'interno, il ciclo di affreschi medievali sulla controfacciata e nell'abside mostra scene della vita del Santo e dei martiri, con una cromia vivace che i secoli non hanno del tutto spento.</p><p>La tradizione locale vuole che il convento abbia ospitato San Bonaventura da Bagnoregio durante i suoi viaggi nel Mezzogiorno, circostanza che avrebbe contribuito al rango dell'istituzione nella provincia francescana.</p>`
  },
  {
    id: 'montalbano',
    tag: 'Parco Urbano · XVIII Sec.',
    title: 'Parco Sabba — Montalbano',
    icon: '🌿',
    img: './images/montalbano1.jpg',
    imgAlt: 'Parco Montalbano, Oria',
    img2: '',
    imgAlt2: 'Viale del Parco Montalbano',
    excerpt: 'Parco storico ai piedi del castello, realizzato nel XVIII secolo dai Padri Celestini. Dal 1982 è di proprietà del Comune di Oria e oggi è uno spazio verde pubblico nel cuore del centro storico.',
    zona: 'centro',
    sideInfo: [
      ['Tipo','Parco urbano'],['Origine','XVIII Sec.'],
      ['Fondatori','Padri Celestini'],['Proprietà','Comune di Oria (dal 1982)'],
      ['Posizione','Ai piedi del Castello']
    ],
    relLuoghi: ['castello','cattedrale'],
    relLeggende: ['bianca-guiscardi'],
    body: `<p>Il Parco Sabba-Montalbano si estende ai piedi del Castello Svevo, nel cuore del centro storico di Oria. La sua origine risale al XVIII secolo, quando i <strong>Padri Celestini</strong> curarono la sistemazione a verde dell'area collinare adiacente alla fortezza federiciana.</p>
<p>Nel corso dei secoli il parco passò di mano diverse volte — dalla curia vescovile alla famiglia Salerno-Mele — fino a quando nel <strong>1982</strong> fu acquisito dal Comune di Oria, che lo aprì definitivamente alla cittadinanza come spazio verde pubblico.</p>
<p>Oggi il parco offre un percorso alberato con essenze mediterranee tipiche del paesaggio pugliese: ulivi, lecci, carrubi e pini. La posizione privilegiata ai piedi del castello lo rende uno dei punti panoramici più suggestivi della città, con vista sulla piana messapica che si estende fino all'orizzonte.</p>
<blockquote>«Sedersi al Parco Montalbano significa avere mille anni di storia sopra la testa e il Salento ai propri piedi.»</blockquote>`
  },
  {
    id: 'santuario-cosimo',
    tag: 'Architettura Religiosa · XVII Sec.',
    title: 'Santuario SS. Cosma e Damiano',
    icon: '⛪',
    img: 'https://i0.wp.com/www.saralessandrini.it/wp-content/uploads/2019/10/Facciata-Santuario-San-Cosimo-alla-Macchia_.jpg?fit=896%2C600&ssl=1',
    imgAlt: 'Santuario di San Cosimo alla Macchia',
    img2: '',
    imgAlt2: 'Interno del Santuario',
    excerpt: 'A pochi chilometri da Oria, nel bosco della Macchia, sorge questo santuario meta di pellegrinaggi da tutta la Puglia. La fiera di settembre raduna migliaia di fedeli.',
    zona: 'dintorni',
    sideInfo: [
      ['Posizione','Bosco della Macchia, 5km'],['Patroni','Cosma e Damiano'],
      ['Fiera','26-27 Settembre'],['Stile','Barocco'],
      ['Pellegrinaggio','Regionale']
    ],
    relLuoghi: ['gallana'],
    relLeggende: ['san-barsanofio'],
    body: `<p>Nel bosco della Macchia, a circa cinque chilometri da Oria verso Francavilla Fontana, il Santuario dei Santi Cosma e Damiano è uno dei luoghi di culto più frequentati della Puglia meridionale. Sorto in forme barocche nel XVII secolo su un sito di devozione assai più antico, il santuario deve la sua fama alla potenza taumaturgica attribuita ai due santi medici, patroni dei malati e dei sofferenti.</p><p>La fiera di settembre — il 26 e 27 — raduna ogni anno migliaia di fedeli provenienti da tutta la Puglia e dalla Basilicata, in un'atmosfera che mescola devozione religiosa, commercio tradizionale e convivialità popolare. Le bancarelle si estendono per centinaia di metri lungo i viali del bosco, mentre all'interno del santuario si susseguono messe, preghiere e offerte votive.</p><blockquote>«Chi va a San Cosimo porta un dolore e torna con la speranza.»<br><em>— Detto popolare della zona</em></blockquote>`
  },
  {
    id: 'gallana',
    tag: 'Architettura Religiosa Rurale · XI-XII Sec.',
    title: 'Santa Maria di Gallana',
    icon: '⛪',
    img: 'https://fai-platform.imgix.net/media/puglia/br/5073_chiesa-madonna-di-gallana.jpg',
    imgAlt: 'Chiesa rurale Santa Maria di Gallana',
    img2: '',
    imgAlt2: 'Affresco medievale abside',
    excerpt: 'Antico oratorio campestre sui resti di una villa romana. Custodisce affreschi medievali e una Natività policroma del XV secolo. Meta del pellegrinaggio delle 100 croci.',
    zona: 'dintorni',
    sideInfo: [
      ['Posizione','Strada per Latiano'],['Datazione','XI-XII Sec.'],
      ['Sotto','Villa romana'],['Opera','Natività — Nuzzo Barba XV sec.'],
      ['Evento','Pellegrinaggio 14-15 agosto']
    ],
    relLuoghi: ['santuario-cosimo'],
    relLeggende: ['gallana'],
    body: `<p>Sulla strada per Latiano, l'oratorio campestre di Santa Maria di Gallana sorge sui resti di una villa romana, in un paesaggio di ulivi e vigneti che non è cambiato nei secoli. Datato almeno all'XI-XII secolo, la facciata è semplice in pietra grezza, mentre l'interno — un tempo a tre navate, oggi ad aula unica — conserva affreschi medievali sull'abside di notevole interesse storico-artistico.</p><p>Di pregio straordinario è la <em>Natività policroma</em> in pietra nella cappella di destra, attribuita allo scultore salentino Nuzzo Barba del XV secolo: una composizione di rara dolcezza in cui la Vergine, il Bambino e i pastori sembrano ancora freschi di cinello.</p><blockquote>«Qui la fede non ha bisogno di mura grandi. Basta una piccola luce nel campo.»</blockquote><p>La chiesa è la meta del famoso pellegrinaggio delle 100 croci, che nella notte tra il 14 e il 15 agosto porta i fedeli attraverso la campagna buia, a piedi, per compiere tre giri cerimoniali attorno all'altare recitando formule di protezione — uno dei rituali folkloristici più suggestivi e antichi dell'area oritana.</p>`
  }
];
