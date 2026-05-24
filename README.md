# OriAntica 🏰

Sito web dedicato alla storia, alle leggende e alla cultura medievale di **Oria (BR)**, città messapica della Puglia meridionale. Un progetto per raccogliere e tramandare la memoria storica della città.

🌐 **[ryuzakxx.github.io/OriAntica](https://ryuzakxx.github.io/OriAntica/)**

> ⚠️ Progetto attualmente in **fase Beta** — alcune informazioni potrebbero non essere ancora complete o aggiornate.

---

## 📄 Pagine

| Pagina | File | Descrizione |
|---|---|---|
| **Home** | `index.html` | Hero carousel fotografico (castello, torre, porte, torri), statistiche storiche, anteprima leggende e luoghi, banner Torneo dei Rioni |
| **Leggende** | `leggende.html` | Griglia completa di tutte le leggende e racconti popolari di Oria |
| **Luoghi** | `luoghi.html` | Luoghi storici del centro storico e dei dintorni con dettaglio dedicato |
| **Storia** | `storia.html` | Narrazione della storia di Oria dalle origini messapiche (VIII sec. a.C.) ad oggi |
| **Torneo** | `torneo.html` | Il Torneo dei Rioni — i quattro rioni, il programma e la rievocazione medievale |
| **Corteo** | `corteo.html` | Il Corteo Storico — l'ordine della sfilata e i costumi d'epoca |
| **Feedback** | `feedback.html` | Istruzioni per inviare contributi, correzioni e suggerimenti al sito |

---

## ⚙️ Tecnologie

Il sito è interamente **statico**, costruito con HTML, CSS e JavaScript puri — senza framework o dipendenze esterne.

| File | Ruolo |
|---|---|
| `index.html` | Home page con hero carousel e sezioni di anteprima |
| `style.css` | Foglio di stile globale con supporto a dark/light mode |
| `data.js` | Database JSON dei contenuti (leggende, luoghi, storia) |
| `shared.js` | Componenti riusabili (navbar, footer, utility) |
| `security.js` | Protezione base dei contenuti |
| `fonts/` | Font tipografici locali (MedievalSharp) |
| `images/` | Immagini storiche e fotografiche |

### Funzionalità tecniche notevoli
- 🌗 **Dark / Light mode** con persistenza via `localStorage`
- 🖼️ **Carousel hero** con autoplay (8s) e controlli manuali
- 🔍 **Dettaglio dinamico** per leggende e luoghi tramite query string (`?id=...`)
- 📱 **Responsive design** con navbar mobile hamburger
- ✨ **Reveal on scroll** tramite `IntersectionObserver`
- 🖋️ **Font personalizzato** `MedievalSharp` in stile medievale

---

## 🏛️ Contenuto Storico

Il sito racconta la storia di Oria attraverso diverse epoche:

- **VIII sec. a.C.** — Fondazione come *Hyria* da parte di Cretesi naufragati (fonte: Erodoto), capitale dei Messapi
- **Epoca romana** — Integrazione nel mondo romano come *Uria*
- **Medioevo** — Fortezza di Federico II di Svevia
- **Età moderna** — Terremoto del **1743**
- **Tradizioni vive** — Il **Torneo dei Rioni** (ogni agosto), con corteo storico in costume medievale

---

## 🤝 Contribuire

Hai fotografie storiche, una leggenda da aggiungere o hai trovato un errore?
- Apri una **[Issue](https://github.com/Ryuzakxx/OriAntica/issues)** su GitHub
- Oppure usa la pagina **[Idee e Feedback](https://ryuzakxx.github.io/OriAntica/feedback.html)** direttamente dal sito

---

## 🔧 Possibili implementazioni future

- Pagina **Instagram / Facebook** per la condivisione settimanale di aneddoti su Oria
- **Pacchetto turistico digitale** con:
  - Schedule digitale di tutte le attività medievali
  - Informazioni su B&B, ristoranti e servizi a Oria
  - **Tour guidato interattivo** di tutti i luoghi storici (dentro e fuori la città)
- **Mappa interattiva** dei luoghi storici
- **Sezione multilingua** per i turisti stranieri

---

## 📜 Licenza

Questo progetto è distribuito sotto licenza **Creative Commons Attribution 4.0 International (CC BY 4.0)**.

Puoi liberamente:
- **Usare** — consultare, integrare e costruire sul materiale
- **Condividere** — copiare e ridistribuire in qualsiasi formato
- **Adattare** — modificare e creare opere derivate

A condizione che:
- **L'autore originale venga sempre indicato** — il nome **Francesco Moretto** deve comparire in modo chiaro in qualsiasi utilizzo, fork o derivato del progetto.
- Venga fornito un link a questa repository o alla licenza originale.

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

→ [Testo completo della licenza](./LICENSE) · [Riepilogo leggibile](https://creativecommons.org/licenses/by/4.0/deed.it)

---

⚠️ Questo è un progetto **non ufficiale e indipendente**. OriAntica non è affiliata, sponsorizzata né collegata al Comune di Oria. Tutti i contenuti sono creati e di proprietà di Francesco Moretto — Tutti i diritti sono riservati.

_Oria (BR) — Puglia · Francesco Moretto_
