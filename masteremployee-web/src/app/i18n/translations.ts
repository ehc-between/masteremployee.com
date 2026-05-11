export type Lang = 'en' | 'no';

export interface Dictionary {
  nav: {
    problem: string;
    solution: string;
    useCases: string;
    security: string;
    pricing: string;
    testimonials: string;
    faq: string;
    bookDemo: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    titleTail: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    trustBadge1: string;
    trustBadge2: string;
    trustBadge3: string;
    dashboardTitle: string;
    dashboardSubtitle: string;
    kpiChurn: string;
    kpiUpsell: string;
    kpiContract: string;
    kpiLiveLabel: string;
    kpiAnalyzed: string;
    kpiSignals: string;
    activityFeed: { time: string; text: string; tag: string }[];
  };
  trustStrip: { label: string; metrics: { value: string; label: string }[] };
  problem: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    sources: string[];
    outcome: string;
  };
  steps: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { step: string; title: string; body: string }[];
  };
  useCases: {
    eyebrow: string;
    title: string;
    lead: string;
    tabs: { id: string; label: string; headline: string; body: string; bullets: string[] }[];
  };
  features: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; body: string }[];
  };
  security: {
    eyebrow: string;
    title: string;
    lead: string;
    points: string[];
    footer: string;
    badge1: string;
    badge2: string;
    badge3: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    lead: string;
    cardTitle: string;
    cardPrice: string;
    cardSub: string;
    includes: string[];
    cta: string;
    note: string;
  };
  testimonials: { eyebrow: string; title: string; lead: string };
  faq: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    lead: string;
    primary: string;
    secondary: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      success: string;
    };
  };
  footer: {
    tagline: string;
    product: string;
    company: string;
    legal: string;
    contact: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  lang: { en: string; no: string };
  theme: { light: string; dark: string };
}

export const dictionaries: Record<Lang, Dictionary> = {
  en: {
    nav: {
      problem: 'Problem',
      solution: 'How it works',
      useCases: 'Use cases',
      security: 'Security',
      pricing: 'Pricing',
      testimonials: 'Customers',
      faq: 'FAQ',
      bookDemo: 'Request a demo',
    },
    hero: {
      eyebrow: 'Intelligent data insight platform',
      titleLead: 'Unlock valuable insight from',
      titleAccent: 'unstructured business data.',
      titleTail: '',
      subtitle: 'Actionable insight — in seconds.',
      description:
        'MasterEmployee transforms unstructured business data into actionable insight. Within seconds, the platform identifies what matters and presents it through intuitive dashboards, reports and action lists — for every team that needs to see what their data is really saying.',
      primaryCta: 'Request a demo',
      secondaryCta: 'See how it works',
      trustBadge1: 'ISO 27001-2 compliant',
      trustBadge2: 'Free 24h proof-of-concept',
      trustBadge3: 'Fixed monthly price',
      dashboardTitle: 'Insight Dashboard',
      dashboardSubtitle: 'Live across your data sources',
      kpiChurn: 'Churn risk',
      kpiUpsell: 'Upsell potential',
      kpiContract: 'Action signals',
      kpiLiveLabel: 'Live',
      kpiAnalyzed: 'documents analyzed',
      kpiSignals: 'insight signals',
      activityFeed: [
        { time: 'just now', text: 'Acme Corp — contract auto-renews in 28 days', tag: 'Contract' },
        { time: '2m', text: 'Northwind — repeated quality claims detected', tag: 'Quality' },
        { time: '5m', text: 'Globex — upsell signal in support tickets', tag: 'Upsell' },
      ],
    },
    trustStrip: {
      label: 'What customers see in their first week',
      metrics: [
        { value: '24h', label: 'from upload to first insight' },
        { value: '4.8M', label: 'documents analyzed in production' },
        { value: '6+', label: 'use cases per customer' },
        { value: 'ISO 27001', label: 'enterprise-grade security' },
      ],
    },
    problem: {
      eyebrow: 'The problem',
      title: 'Critical business insight is hidden in unstructured data.',
      lead: 'Most companies store valuable information across operational systems, documents and communication channels. Few manage to gain a complete insight into their data to use it for business development.',
      body: 'This information contains important signals about operational performance, customer behaviour and potential risks. But because the data is unstructured and scattered across systems, it is difficult to analyze and is rarely used effectively.',
      sources: [
        'Customer contracts',
        'Meeting notes',
        'Emails & customer communication',
        'Order and delivery documentation',
        'Support cases & service reports',
        'Claims and quality reports',
        'Invoice information',
      ],
      outcome:
        'As a result, companies miss early indicators of customer churn, growth opportunities and operational issues.',
    },
    steps: {
      eyebrow: 'How it works',
      title: 'From unstructured data to business insight in three steps.',
      lead: 'Connect your data, let the platform analyze it, and your teams get the insight ranked by importance.',
      items: [
        {
          step: '01',
          title: 'Connect your data',
          body: 'MasterEmployee securely connects to your contracts, meeting notes, emails, operational systems and customer documentation. We integrate with most data sources — and use robotic process automation for systems that are difficult to integrate with. Most setups take days, not months.',
        },
        {
          step: '02',
          title: 'AI analyzes the information',
          body: 'Private AI models automatically process your unstructured data — identifying patterns, signals, risks and opportunities across documents, communications and operational systems.',
        },
        {
          step: '03',
          title: 'Insight in clear dashboards',
          body: 'Results land in intuitive dashboards and tailored reports — highlighting what matters about your customers, contracts and operations. Your teams immediately see what needs attention and where the opportunities are.',
        },
      ],
    },
    useCases: {
      eyebrow: 'Use cases',
      title: 'One platform. Many applications.',
      lead: 'Customers use MasterEmployee for several use cases at once — each tab below is a real customer application running on the same platform.',
      tabs: [
        {
          id: 'churn',
          label: 'Customer churn risk',
          headline: 'See churn signals before they harden.',
          body: 'Tickets, emails and meeting notes contain every churn signal you need. The platform ranks accounts by risk with the underlying evidence attached — so your teams intervene before a relationship turns into a fire drill.',
          bullets: [
            'Churn risk score with cited evidence per account',
            'Escalation patterns detected across tickets and email',
            'Renewal countdowns with risk-adjusted forecast',
            'Early-warning alerts on at-risk relationships',
          ],
        },
        {
          id: 'upsell',
          label: 'Upsell & growth',
          headline: 'Find the expansion already in your data.',
          body: 'Existing customer activity reveals who is ready to expand, who is mentioning competitors, and where new procurement contacts appear — without anyone reading every email.',
          bullets: [
            'Account scoring by signal strength and revenue potential',
            'Pre-meeting briefs assembled from every touchpoint',
            'Competitive intel surfaced from inbound communication',
            'New stakeholder detection across systems',
          ],
        },
        {
          id: 'contracts',
          label: 'Contracts & tenders',
          headline: 'Remember everything you have ever written.',
          body: 'Past tender responses, contracts and meeting notes become a queryable knowledge base. Ask any question; get an answer with citations from the originals — and track every obligation across active contracts.',
          bullets: [
            'Searchable answers across every past tender',
            'Auto-drafted responses with cited evidence',
            'Obligation tracking across active contracts',
            'Risk flags on aggressive commitments',
          ],
        },
        {
          id: 'quality',
          label: 'Quality & operations',
          headline: 'Stop discovering quality issues in a board deck.',
          body: 'Claims, delivery exceptions and quality reports get clustered automatically. You see the pattern weeks before it surfaces in a quarterly review — and which customers are at risk because of it.',
          bullets: [
            'Cluster detection across claims and quality reports',
            'Customer-impact view per operational issue',
            'SLA breach forecasting from current trajectory',
            'Root-cause evidence assembled across systems',
          ],
        },
        {
          id: 'invoicing',
          label: 'Invoicing potential',
          headline: 'Capture invoicing that would otherwise slip.',
          body: 'Compare deliveries, contracts and invoices to surface billable activity that was not invoiced, contract terms not enforced, and pricing slip across customer segments.',
          bullets: [
            'Unbilled activity detection across systems',
            'Contract-term enforcement reports',
            'Pricing slip surfaced across customer segments',
            'Audit trail with cited source documents',
          ],
        },
      ],
    },
    features: {
      eyebrow: 'What you get',
      title: 'Advanced analysis that feels like a simple dashboard.',
      lead: 'Designed for business teams — not data scientists. Explore, filter, and ask directly of your data.',
      items: [
        { title: 'Automatic data analysis', body: 'Instantly analyzes your data and identifies key insights.' },
        { title: 'Intuitive dashboards & visualizations', body: 'Clear, easy-to-understand visualizations of complex data.' },
        { title: 'Interactive data exploration', body: 'Structured menus and filters — navigate by customer, topic or segment.' },
        { title: 'Tailored extraction & custom reports', body: "Customize data extraction, dashboards and reports to your organization's needs." },
        { title: 'Direct queries', body: 'Ask explicit, detailed questions directly to the data for deeper insight.' },
        { title: 'Easy export options', body: 'Export results to Excel or Word for further analysis, reporting or sharing.' },
      ],
    },
    security: {
      eyebrow: 'Multi-level security & privacy',
      title: 'Enterprise-grade security and data privacy.',
      lead: 'MasterEmployee is designed with security and data protection as core principles. The platform is ISO 27001-2 compliant — following internationally recognized information security practices.',
      points: [
        'Data is stored and processed in a confined environment',
        'All processing takes place on controlled, isolated infrastructure',
        'Insights are generated without exposing or sharing your data',
        'AI models operate in a constrained, secure environment',
        'Your information is analyzed securely and never used to train AI models',
      ],
      footer:
        'Multiple layers of security and privacy give you the benefit of advanced AI insight while keeping full control of your data. Already trusted by organizations that require secure AI-powered insight. Detailed platform security documentation available on request.',
      badge1: 'ISO 27001-2',
      badge2: 'Private AI models',
      badge3: 'Isolated infrastructure',
    },
    pricing: {
      eyebrow: 'Fast deployment. Fixed price.',
      title: 'Fast results with minimal effort.',
      lead: 'Simple to use. Fast to deploy. No hidden AI processing or support costs.',
      cardTitle: 'Included in every subscription',
      cardPrice: 'Fixed monthly price',
      cardSub: 'Full cost visibility — no surprises.',
      includes: [
        '24-hour proof-of-concept — free of charge',
        'Full integration within a few days',
        'Automated insight dashboards',
        'Tailored reports for your use case',
        'Built-in access control per user and data set',
        'No hidden AI processing or support costs',
      ],
      cta: 'Request a demo',
      note: 'Tell us what you need, show us the data — we deploy the platform to analyze it immediately.',
    },
    testimonials: {
      eyebrow: 'Customers',
      title: 'What our users actually say.',
      lead: 'Real words from client representatives, tender professionals and customer service teams.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Quick answers before you book.',
      lead: 'If your question isn’t here, ask it on the demo.',
      items: [
        { q: 'How fast can we see real insight from our own data?', a: 'Within 24 hours of giving us a data sample. The 24h proof-of-concept is free — you see real output from your data before any commercial decision.' },
        { q: 'Will my data be used to train AI models?', a: 'No. Your information is never used to train AI models. All processing happens in a controlled, isolated environment, and insights are generated without exposing your data outside it.' },
        { q: 'How long does full integration take?', a: 'Most customers are fully integrated within a few days. Hard-to-reach systems are handled with robotic process automation if needed.' },
        { q: 'What does it cost?', a: 'A fixed monthly price with full cost visibility. No hidden AI processing fees, no per-document charges, no surprise support costs.' },
        { q: 'Which teams in our company will use it?', a: 'Any team that needs insight from unstructured data — customer service, contract and tender teams, operations, quality, finance. One platform, role-specific dashboards.' },
        { q: 'Is the platform ISO certified?', a: 'Yes — ISO 27001-2 compliant, with detailed security documentation available on request.' },
      ],
    },
    cta: {
      title: 'Let us show you what your data can tell you.',
      lead: 'We will run a free 24-hour proof-of-concept on a sample of your data — and let you decide if it is worth taking further.',
      primary: 'Request a demo',
      secondary: 'Email us directly',
      form: {
        name: 'Your name',
        email: 'Work email',
        company: 'Company',
        message: 'What data would you like insight from?',
        submit: 'Request demo',
        success: 'Thank you! We’ll be in touch within 24 hours.',
      },
    },
    footer: {
      tagline: 'Turn unstructured business data into actionable insight.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms',
      rights: 'All rights reserved.',
    },
    lang: { en: 'EN', no: 'NO' },
    theme: { light: 'Light', dark: 'Dark' },
  },
  no: {
    nav: {
      problem: 'Problemet',
      solution: 'Slik fungerer det',
      useCases: 'Bruksområder',
      security: 'Sikkerhet',
      pricing: 'Pris',
      testimonials: 'Kunder',
      faq: 'FAQ',
      bookDemo: 'Be om demo',
    },
    hero: {
      eyebrow: 'Intelligent dataplattform for innsikt',
      titleLead: 'Hent ut verdifull innsikt fra',
      titleAccent: 'ustrukturerte bedriftsdata.',
      titleTail: '',
      subtitle: 'Handlingsrettet innsikt — på sekunder.',
      description:
        'MasterEmployee gjør ustrukturerte data om til handlingsrettet innsikt. På sekunder finner plattformen frem det som betyr noe — og presenterer det i intuitive dashboards, rapporter og handlingslister, for hvert team som trenger å forstå hva dataene egentlig sier.',
      primaryCta: 'Be om demo',
      secondaryCta: 'Se hvordan det fungerer',
      trustBadge1: 'ISO 27001-2 sertifisert',
      trustBadge2: 'Gratis 24t proof-of-concept',
      trustBadge3: 'Fast månedspris',
      dashboardTitle: 'Innsikts-dashboard',
      dashboardSubtitle: 'Live på tvers av datakildene dine',
      kpiChurn: 'Churn-risiko',
      kpiUpsell: 'Mersalg-potensial',
      kpiContract: 'Handlingssignaler',
      kpiLiveLabel: 'Live',
      kpiAnalyzed: 'dokumenter analysert',
      kpiSignals: 'innsiktssignaler',
      activityFeed: [
        { time: 'akkurat nå', text: 'Acme Corp — kontrakt fornyes automatisk om 28 dager', tag: 'Kontrakt' },
        { time: '2m', text: 'Northwind — gjentagende reklamasjoner oppdaget', tag: 'Kvalitet' },
        { time: '5m', text: 'Globex — mersalg-signal i support-saker', tag: 'Mersalg' },
      ],
    },
    trustStrip: {
      label: 'Hva kunder ser i sin første uke',
      metrics: [
        { value: '24t', label: 'fra opplasting til første innsikt' },
        { value: '4.8M', label: 'dokumenter analysert i drift' },
        { value: '6+', label: 'bruksområder per kunde' },
        { value: 'ISO 27001', label: 'sikkerhet i bedriftsklasse' },
      ],
    },
    problem: {
      eyebrow: 'Problemet',
      title: 'Kritisk forretningsinnsikt ligger gjemt i ustrukturerte data.',
      lead: 'De fleste selskaper lagrer verdifull informasjon i operative systemer, dokumenter og kommunikasjonskanaler. Få klarer å få samlet innsikt og bruke den til å utvikle virksomheten.',
      body: 'Denne informasjonen inneholder viktige signaler om operativ ytelse, kundeadferd og potensielle risikoer. Men fordi dataene er ustrukturerte og spredt på tvers av systemer, er de vanskelige å analysere og blir sjelden brukt effektivt.',
      sources: [
        'Kundekontrakter',
        'Møtenotater',
        'E-post og kundekommunikasjon',
        'Ordre- og leveransedokumentasjon',
        'Support-saker og servicerapporter',
        'Reklamasjoner og kvalitetsrapporter',
        'Faktura-informasjon',
      ],
      outcome:
        'Resultatet: selskaper går glipp av tidlige signaler om kundefrafall, vekstmuligheter og driftsproblemer.',
    },
    steps: {
      eyebrow: 'Slik fungerer det',
      title: 'Fra ustrukturerte data til forretningsinnsikt i tre steg.',
      lead: 'Koble til dataene, la plattformen analysere, og teamene dine får innsikt rangert etter viktighet.',
      items: [
        {
          step: '01',
          title: 'Koble til dataene dine',
          body: 'MasterEmployee kobler seg sikkert til kontrakter, møtenotater, e-post, operative systemer og kundedokumentasjon. Vi integrerer med de fleste datakilder — og bruker robotisert prosessautomatisering for systemer som er vanskelige å integrere med. De fleste oppsett tar dager, ikke måneder.',
        },
        {
          step: '02',
          title: 'KI analyserer informasjonen',
          body: 'Private KI-modeller prosesserer ustrukturerte data automatisk — og identifiserer mønstre, signaler, risikoer og muligheter på tvers av dokumenter, kommunikasjon og operative systemer.',
        },
        {
          step: '03',
          title: 'Innsikt i tydelige dashboards',
          body: 'Resultatene presenteres i intuitive dashboards og skreddersydde rapporter — som løfter frem det som betyr noe om kunder, kontrakter og drift. Teamene dine ser umiddelbart hva som krever oppmerksomhet og hvor mulighetene ligger.',
        },
      ],
    },
    useCases: {
      eyebrow: 'Bruksområder',
      title: 'Én plattform. Mange bruksområder.',
      lead: 'Kunder bruker MasterEmployee til flere bruksområder samtidig — hver fane under er et reelt kundecase som kjører på samme plattform.',
      tabs: [
        {
          id: 'churn',
          label: 'Kundefrafall',
          headline: 'Se churn-signalene før de slår inn.',
          body: 'Saker, e-poster og møtenotater inneholder alle churn-signalene du trenger. Plattformen rangerer kunder etter risiko med dokumentasjon vedlagt — så teamet ditt handler før kunden er på vei ut.',
          bullets: [
            'Churn-risiko-score med dokumentasjon per kunde',
            'Eskalerings-mønstre på tvers av support og e-post',
            'Fornyelses-nedtelling med risikojustert prognose',
            'Tidlig-varsel på utsatte kunder',
          ],
        },
        {
          id: 'upsell',
          label: 'Mersalg & vekst',
          headline: 'Finn ekspansjonen som allerede ligger i dataene.',
          body: 'Eksisterende kundeaktivitet viser hvem som er klare for vekst, hvem som nevner konkurrenter, og hvor nye innkjøpskontakter dukker opp — uten at noen må lese hver e-post.',
          bullets: [
            'Kundescore basert på signalstyrke og potensial',
            'Pre-meeting brief satt sammen av alle berøringspunkter',
            'Konkurrentinformasjon fra innkommende kommunikasjon',
            'Nye interessenter oppdaget på tvers av systemer',
          ],
        },
        {
          id: 'contracts',
          label: 'Kontrakter & anbud',
          headline: 'Husk alt dere noensinne har skrevet.',
          body: 'Tidligere anbudssvar, kontrakter og møtenotater blir et søkbart kunnskapsgrunnlag. Still hvilket som helst spørsmål; få svar med kildehenvisninger — og spor hver forpliktelse på tvers av aktive kontrakter.',
          bullets: [
            'Søkbare svar på tvers av alle tidligere anbud',
            'Auto-utkast med kildehenvisninger',
            'Forpliktelses-sporing på tvers av aktive kontrakter',
            'Risiko-flagg på aggressive forpliktelser',
          ],
        },
        {
          id: 'quality',
          label: 'Kvalitet & drift',
          headline: 'Slutt å oppdage kvalitetsproblemer i styrepresentasjonen.',
          body: 'Reklamasjoner, leveranseavvik og kvalitetsrapporter klustres automatisk. Du ser mønsteret uker før det havner i en kvartalsgjennomgang — og hvilke kunder som er i risiko.',
          bullets: [
            'Cluster-deteksjon på tvers av reklamasjoner og kvalitet',
            'Kundepåvirkning per driftsproblem',
            'SLA-prognose ut fra nåværende trend',
            'Rotårsak satt sammen på tvers av systemer',
          ],
        },
        {
          id: 'invoicing',
          label: 'Fakturapotensial',
          headline: 'Fang fakturering som ellers glipper.',
          body: 'Sammenlign leveranser, kontrakter og fakturaer for å avdekke fakturerbar aktivitet som ikke ble fakturert, kontraktsvilkår som ikke ble håndhevet, og prisingslekkasje på tvers av kundesegmenter.',
          bullets: [
            'Deteksjon av ikke-fakturert aktivitet',
            'Rapporter på håndhevelse av kontraktsvilkår',
            'Prisingslekkasje på tvers av kundesegmenter',
            'Sporbarhet med kildedokumentasjon',
          ],
        },
      ],
    },
    features: {
      eyebrow: 'Det du får',
      title: 'Avansert analyse som føles som et enkelt dashboard.',
      lead: 'Designet for forretningsteam — ikke dataforskere. Utforsk, filtrer og still spørsmål direkte til dataene.',
      items: [
        { title: 'Automatisk dataanalyse', body: 'Analyserer dataene umiddelbart og løfter frem signalene som betyr noe.' },
        { title: 'Intuitive dashboards & visualiseringer', body: 'Tydelige visualiseringer som gjør komplekse data enkle å forstå.' },
        { title: 'Interaktiv datautforskning', body: 'Strukturerte menyer og filtre — naviger på kunde, tema eller segment.' },
        { title: 'Skreddersydde uttrekk & rapporter', body: 'Tilpass uttrekk, dashboards og rapporter til behovet i din organisasjon.' },
        { title: 'Direkte spørsmål', body: 'Still eksplisitte og detaljerte spørsmål direkte til dataene for dypere innsikt.' },
        { title: 'Enkel eksport', body: 'Eksporter til Excel eller Word — klart for analyse, rapportering eller deling.' },
      ],
    },
    security: {
      eyebrow: 'Flerlags sikkerhet & personvern',
      title: 'Sikkerhet og datavern i bedriftsklasse.',
      lead: 'MasterEmployee er designet med sikkerhet og datavern som kjerneprinsipper. Plattformen er ISO 27001-2 sertifisert — etter internasjonalt anerkjente standarder for informasjonssikkerhet.',
      points: [
        'Data lagres og prosesseres i et lukket miljø',
        'All prosessering på kontrollert, isolert infrastruktur',
        'Innsikt genereres uten å eksponere eller dele dine data',
        'KI-modellene kjører i et avgrenset, sikkert miljø',
        'Informasjonen din analyseres sikkert og brukes aldri til å trene KI-modeller',
      ],
      footer:
        'Flere lag av sikkerhet og personvern gir deg fordelene av avansert KI-innsikt uten å gi slipp på kontrollen over egne data. Allerede tatt i bruk av organisasjoner som krever sikker KI-drevet innsikt. Detaljert sikkerhetsdokumentasjon på forespørsel.',
      badge1: 'ISO 27001-2',
      badge2: 'Private KI-modeller',
      badge3: 'Isolert infrastruktur',
    },
    pricing: {
      eyebrow: 'Rask utrulling. Fast pris.',
      title: 'Raske resultater med minimal innsats.',
      lead: 'Enkel å ta i bruk. Raskt utrullet. Ingen skjulte KI- eller supportkostnader.',
      cardTitle: 'Inkludert i abonnementet',
      cardPrice: 'Fast månedspris',
      cardSub: 'Full kostnadsoversikt — ingen overraskelser.',
      includes: [
        'Gratis 24-timers proof-of-concept',
        'Full integrasjon på få dager',
        'Automatiske innsikts-dashboards',
        'Skreddersydde rapporter for din case',
        'Innebygget tilgangsstyring per bruker og datasett',
        'Ingen skjulte KI- eller supportkostnader',
      ],
      cta: 'Be om demo',
      note: 'Fortell oss hva du trenger, vis oss dataene — vi ruller ut plattformen og analyserer umiddelbart.',
    },
    testimonials: {
      eyebrow: 'Kunder',
      title: 'Hva brukerne våre faktisk sier.',
      lead: 'Ekte ord fra kunderepresentanter, anbudsfolk og kundeservice-team.',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Raske svar før du bestiller.',
      lead: 'Hvis spørsmålet ditt ikke står her, still det på demoen.',
      items: [
        { q: 'Hvor raskt ser vi reell innsikt fra våre egne data?', a: 'Innen 24 timer etter at vi har fått et datautvalg. 24t proof-of-concept er gratis — du ser ekte resultater fra dine data før en kommersiell beslutning.' },
        { q: 'Brukes dataene våre til å trene KI-modeller?', a: 'Nei. Informasjonen din brukes aldri til å trene KI-modeller. All prosessering skjer i et kontrollert, isolert miljø.' },
        { q: 'Hvor lang tid tar full integrasjon?', a: 'De fleste kunder er fullt integrert på få dager. Vanskelige systemer håndteres med robotisert prosessautomatisering ved behov.' },
        { q: 'Hva koster det?', a: 'Fast månedspris med full kostnadsoversikt. Ingen skjulte KI-prosesseringsavgifter, ingen per-dokument-kostnader, ingen overraskelser på support.' },
        { q: 'Hvilke team i selskapet bruker dette?', a: 'Alle team som trenger innsikt fra ustrukturerte data — kundeservice, kontrakts- og anbudsteam, drift, kvalitet, økonomi. Én plattform, rolle-spesifikke dashboards.' },
        { q: 'Er plattformen ISO-sertifisert?', a: 'Ja — ISO 27001-2 sertifisert, med detaljert sikkerhetsdokumentasjon på forespørsel.' },
      ],
    },
    cta: {
      title: 'La oss vise deg hva dataene dine kan fortelle.',
      lead: 'Vi kjører et gratis 24-timers proof-of-concept på et datautvalg — og du bestemmer om det er verdt å ta videre.',
      primary: 'Be om demo',
      secondary: 'Send oss en e-post',
      form: {
        name: 'Navnet ditt',
        email: 'Jobb-e-post',
        company: 'Selskap',
        message: 'Hvilke data ønsker du innsikt fra?',
        submit: 'Be om demo',
        success: 'Takk! Vi tar kontakt innen 24 timer.',
      },
    },
    footer: {
      tagline: 'Gjør ustrukturerte data om til handlingsrettet innsikt.',
      product: 'Produkt',
      company: 'Selskap',
      legal: 'Juridisk',
      contact: 'Kontakt',
      privacy: 'Personvern',
      terms: 'Vilkår',
      rights: 'Alle rettigheter reservert.',
    },
    lang: { en: 'EN', no: 'NO' },
    theme: { light: 'Lys', dark: 'Mørk' },
  },
};

export const testimonials: { quote_no: string; quote_en: string; role_en: string; role_no: string }[] = [
  { quote_no: 'Vi er strålende fornøyd', quote_en: 'We are absolutely satisfied.', role_en: 'Client representative', role_no: 'Kunderepresentant' },
  { quote_no: 'Det er veldig gøy å bruke verktøyet', quote_en: 'It is very fun to use the tool.', role_en: 'Tender client user', role_no: 'Anbudsbruker' },
  { quote_no: 'Jeg bruker det masse. Jeg bruker det også til å få innspill og ideer når jeg skriver anbud.', quote_en: 'I use it a lot. I also use it to get input and ideas when I write tenders.', role_en: 'Tender client user', role_no: 'Anbudsbruker' },
  { quote_no: 'Dette er mer enn det vi hadde håpet på', quote_en: 'This is more than we had hoped for.', role_en: 'Client representative', role_no: 'Kunderepresentant' },
  { quote_no: 'Det er utrolig digg å ha et slikt verktøy', quote_en: 'It is incredibly great to have such a tool.', role_en: 'Tender professional', role_no: 'Anbudsspesialist' },
  { quote_no: 'Ikke la konkurrentene våre få tilgang til dette verktøyet', quote_en: 'Don’t let our competitors gain access to this tool.', role_en: 'Client representative', role_no: 'Kunderepresentant' },
  { quote_no: 'Dette er gull verd', quote_en: 'This is worth its weight in gold.', role_en: 'Customer service lead', role_no: 'Kundeservice-ansvarlig' },
  { quote_no: 'Plattformen og tjenesten dere leverer er nesten for billig', quote_en: 'The platform and service you provide are almost too cheap.', role_en: 'Client lead', role_no: 'Kundeansvarlig' },
  { quote_no: 'Dette er dritbra!', quote_en: 'This is really great!', role_en: 'Customer service manager', role_no: 'Kundeservice-leder' },
  { quote_no: 'Denne løsningen er jo fantastisk!', quote_en: 'This platform is just fantastic!', role_en: 'Client user', role_no: 'Bruker' },
];
