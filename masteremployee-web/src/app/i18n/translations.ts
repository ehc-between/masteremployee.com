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
      bookDemo: 'Book a demo',
    },
    hero: {
      eyebrow: 'B2B Sales & Revenue Intelligence',
      titleLead: 'Turn the data you already have into',
      titleAccent: 'your next sales meeting.',
      titleTail: '',
      subtitle: 'Actionable insight — in seconds.',
      description:
        'MasterEmployee analyzes your contracts, emails, meeting notes and operational data to surface churn risk, upsell signals and renewal triggers before your competitors notice. Hit your number with the data you already own.',
      primaryCta: 'Book a 30-min demo',
      secondaryCta: 'See how it works',
      trustBadge1: 'ISO 27001-2 compliant',
      trustBadge2: 'Free 24h proof-of-concept',
      trustBadge3: 'Fixed monthly price',
      dashboardTitle: 'Revenue Signal Dashboard',
      dashboardSubtitle: 'Live across your data sources',
      kpiChurn: 'Churn risk',
      kpiUpsell: 'Upsell potential',
      kpiContract: 'Renewal signals',
      kpiLiveLabel: 'Live',
      kpiAnalyzed: 'documents analyzed',
      kpiSignals: 'revenue signals',
      activityFeed: [
        { time: 'just now', text: 'Acme Corp — contract auto-renews in 28 days', tag: 'Renewal' },
        { time: '2m', text: 'Northwind — new procurement contact identified', tag: 'Upsell' },
        { time: '5m', text: 'Globex — 3 unresolved tickets in 14 days', tag: 'Churn risk' },
      ],
    },
    trustStrip: {
      label: 'What customers see in their first week',
      metrics: [
        { value: '24h', label: 'from upload to first insight' },
        { value: '4.8M', label: 'documents analyzed in production' },
        { value: '17%', label: 'avg. uplift on at-risk renewals' },
        { value: 'ISO 27001', label: 'enterprise-grade security' },
      ],
    },
    problem: {
      eyebrow: 'The problem',
      title: 'Your next deal is buried in data your team will never read.',
      lead: 'Sales leaders, CS managers and revenue ops sit on contracts, emails, meeting notes and tickets that contain every signal they need — churn risk, upsell trigger, expansion opportunity. The signals exist. Nobody has time to find them.',
      body: 'The result: missed renewals, late upsells, surprised churn, and pipeline coverage that depends on a sales rep’s memory rather than the truth your data already holds.',
      sources: [
        'Customer contracts',
        'Meeting notes',
        'Email threads',
        'Order & delivery docs',
        'Support tickets',
        'Quality & claims reports',
        'Invoice information',
      ],
      outcome:
        'Companies miss early indicators of churn, growth opportunities and renewal risk — typically worth 3–7% of ARR every year.',
    },
    steps: {
      eyebrow: 'How it works',
      title: 'Three steps. From scattered data to revenue actions.',
      lead: 'Connect your data, let the platform analyze it, and your sales, CS and ops teams get the actions ranked by revenue impact.',
      items: [
        {
          step: '01',
          title: 'Connect your data',
          body: 'We securely ingest contracts, emails, meeting notes, support tickets, CRM exports and operational docs. Hard-to-reach systems? We use robotic process automation. Most setups take days, not months.',
        },
        {
          step: '02',
          title: 'AI surfaces the signals',
          body: 'Private AI models read everything your team produces and identify patterns across documents, communication and operational data — churn risk, upsell triggers, contract obligations, revenue leaks.',
        },
        {
          step: '03',
          title: 'Action lists ranked by revenue',
          body: 'Sales, CS and operations open one dashboard each. Every account is ranked by signal strength and revenue at risk — with the underlying evidence one click away.',
        },
      ],
    },
    useCases: {
      eyebrow: 'Use cases',
      title: 'One platform. Every revenue team.',
      lead: 'Pick the team your buyer cares about — each gets the dashboard tuned for their motion.',
      tabs: [
        {
          id: 'sales',
          label: 'Sales',
          headline: 'Prospect with the truth your data already holds.',
          body: 'Stop guessing which accounts are warm. The platform reads existing customer activity and surfaces who’s ready to expand, who’s slipping, and which accounts mention competitors in support tickets.',
          bullets: [
            'Account scoring by revenue impact, not gut feel',
            'Pre-meeting briefs auto-generated from every touchpoint',
            'Pipeline coverage that reflects reality',
            'Competitive intel surfaced from inbound communication',
          ],
        },
        {
          id: 'cs',
          label: 'Customer Success',
          headline: 'See churn 90 days before it happens.',
          body: 'Tickets, emails and meeting notes contain every churn signal you need. We rank accounts by churn risk with the evidence attached — so your CSMs intervene before renewal becomes a fire drill.',
          bullets: [
            'Churn risk score with underlying evidence per account',
            'Auto-detected escalation patterns across tickets and email',
            'Renewal countdowns with risk-adjusted forecast',
            'Upsell triggers based on usage and product mentions',
          ],
        },
        {
          id: 'ops',
          label: 'Operations',
          headline: 'Quality issues stop being a quarterly surprise.',
          body: 'Claims, delivery exceptions and quality reports get clustered automatically. You see the pattern weeks before it shows up in a board deck — and which customers are at risk because of it.',
          bullets: [
            'Cluster detection across claims and quality reports',
            'Customer-impact view per operational issue',
            'SLA breach forecasting from current trajectory',
            'Root-cause evidence assembled across systems',
          ],
        },
        {
          id: 'tender',
          label: 'Tender & Procurement',
          headline: 'Win more bids by remembering everything you ever wrote.',
          body: 'Past tender responses, contracts and meeting notes become a queryable knowledge base. Ask any question; get an answer with citations from the originals.',
          bullets: [
            'Searchable answers across every past tender',
            'Auto-drafted responses with cited evidence',
            'Obligation tracking across active contracts',
            'Risk flags on aggressive commitments',
          ],
        },
      ],
    },
    features: {
      eyebrow: 'What you get',
      title: 'Advanced analysis that feels like a simple dashboard.',
      lead: 'Designed for revenue teams — not data scientists. Explore, filter, and ask directly of your data.',
      items: [
        { title: 'Automatic data analysis', body: 'Instantly analyzes your data and surfaces the signals that matter.' },
        { title: 'Intuitive dashboards', body: 'Clear visualizations that make complex data easy to understand.' },
        { title: 'Interactive exploration', body: 'Structured menus and filters — navigate by customer, segment, or theme.' },
        { title: 'Tailored reports', body: 'Customize extractions, dashboards and reports to your organization’s needs.' },
        { title: 'Direct questions', body: 'Ask explicit, detailed questions directly to your data for deeper insight.' },
        { title: 'Easy export', body: 'Export to Excel or Word — ready to share, analyze, or present.' },
      ],
    },
    security: {
      eyebrow: 'Enterprise security',
      title: 'Multi-layered security & data privacy by design.',
      lead: 'Security and data protection are core principles. The platform is ISO 27001-2 compliant — internationally recognized information security practices.',
      points: [
        'Data is stored and processed in a confined environment',
        'All processing takes place in controlled, isolated infrastructure',
        'Insights are generated without exposing or sharing your data',
        'AI models operate in a constrained, secure environment',
        'Your information is never used to train AI models',
      ],
      footer:
        'Multiple layers of security and privacy give you the benefit of advanced AI insight while keeping full control of your data. Trusted by organizations that require secure AI-powered insight. Detailed security documentation available on request.',
      badge1: 'ISO 27001-2',
      badge2: 'Private AI models',
      badge3: 'Isolated infrastructure',
    },
    pricing: {
      eyebrow: 'Fast deployment. Fixed price.',
      title: 'Results in hours. Full integration in days.',
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
      cta: 'Book a 30-min demo',
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
        { q: 'Who in our company actually uses this?', a: 'Sales leaders for pipeline and account scoring; CS for churn and renewals; Operations for quality and SLA patterns; Tender teams for bid responses. One platform, role-specific dashboards.' },
        { q: 'Is it ISO certified?', a: 'Yes — ISO 27001-2 compliant, with detailed security documentation available on request.' },
      ],
    },
    cta: {
      title: 'See your own data tell its story.',
      lead: 'Book 30 minutes. We’ll show you the platform on real data — yours or a representative sample — and you decide if it’s worth a free 24h proof-of-concept.',
      primary: 'Book a 30-min demo',
      secondary: 'Email us directly',
      form: {
        name: 'Your name',
        email: 'Work email',
        company: 'Company',
        message: 'What data would you like insight from?',
        submit: 'Book demo',
        success: 'Thank you! We’ll be in touch within 24 hours.',
      },
    },
    footer: {
      tagline: 'Turn the data you already have into your next sales meeting.',
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
      bookDemo: 'Bestill demo',
    },
    hero: {
      eyebrow: 'B2B salgs- og inntektsinnsikt',
      titleLead: 'Gjør dataene du allerede har til',
      titleAccent: 'ditt neste salgsmøte.',
      titleTail: '',
      subtitle: 'Handlingsrettet innsikt — på sekunder.',
      description:
        'MasterEmployee analyserer kontrakter, e-poster, møtenotater og driftsdata for å løfte frem churn-risiko, mersalg-signaler og fornyelsestriggere før konkurrentene legger merke til dem. Treff budsjettet med dataene du allerede eier.',
      primaryCta: 'Bestill 30-min demo',
      secondaryCta: 'Se hvordan det fungerer',
      trustBadge1: 'ISO 27001-2 sertifisert',
      trustBadge2: 'Gratis 24t proof-of-concept',
      trustBadge3: 'Fast månedspris',
      dashboardTitle: 'Inntektssignal-dashboard',
      dashboardSubtitle: 'Live på tvers av datakildene dine',
      kpiChurn: 'Churn-risiko',
      kpiUpsell: 'Mersalg-potensial',
      kpiContract: 'Fornyelses-signaler',
      kpiLiveLabel: 'Live',
      kpiAnalyzed: 'dokumenter analysert',
      kpiSignals: 'inntektssignaler',
      activityFeed: [
        { time: 'akkurat nå', text: 'Acme Corp — kontrakt fornyes automatisk om 28 dager', tag: 'Fornyelse' },
        { time: '2m', text: 'Northwind — ny innkjøpskontakt identifisert', tag: 'Mersalg' },
        { time: '5m', text: 'Globex — 3 uløste saker på 14 dager', tag: 'Churn-risiko' },
      ],
    },
    trustStrip: {
      label: 'Hva kunder ser i sin første uke',
      metrics: [
        { value: '24t', label: 'fra opplasting til første innsikt' },
        { value: '4.8M', label: 'dokumenter analysert i drift' },
        { value: '17%', label: 'snittløft på risikofornyelser' },
        { value: 'ISO 27001', label: 'sikkerhet i bedriftsklasse' },
      ],
    },
    problem: {
      eyebrow: 'Problemet',
      title: 'Ditt neste avtale ligger gjemt i data ingen i teamet rekker å lese.',
      lead: 'Salgssjefer, CS-ledere og revenue ops sitter på kontrakter, e-poster, møtenotater og saker som inneholder alle signalene de trenger — churn-risiko, mersalg, ekspansjon. Signalene finnes. Ingen rekker å finne dem.',
      body: 'Resultatet: tapte fornyelser, sene mersalg, churn som overrasker, og pipeline-dømming som baserer seg på selgerens hukommelse i stedet for sannheten dine data allerede har.',
      sources: [
        'Kundekontrakter',
        'Møtenotater',
        'E-posttråder',
        'Ordre- og leveransedokumenter',
        'Support-saker',
        'Reklamasjoner og kvalitetsrapporter',
        'Faktura-informasjon',
      ],
      outcome:
        'Selskaper går glipp av tidlige signaler om kundefrafall, vekstmuligheter og fornyelser — typisk verdt 3–7% av ARR hvert år.',
    },
    steps: {
      eyebrow: 'Slik fungerer det',
      title: 'Tre steg. Fra spredte data til konkrete inntektsgrep.',
      lead: 'Koble til dataene, la plattformen analysere, og salg, CS og drift får handlinger rangert etter inntektsverdi.',
      items: [
        {
          step: '01',
          title: 'Koble til dataene',
          body: 'Vi henter inn kontrakter, e-post, møtenotater, support-saker, CRM-eksport og driftsdokumenter — sikkert. Vanskelige systemer? Vi bruker robotisert prosessautomatisering. De fleste oppsett tar dager, ikke måneder.',
        },
        {
          step: '02',
          title: 'KI finner signalene',
          body: 'Private KI-modeller leser alt teamet ditt produserer og identifiserer mønstre på tvers av dokumenter, kommunikasjon og driftsdata — churn-risiko, mersalg-triggere, kontraktsforpliktelser, inntektslekkasjer.',
        },
        {
          step: '03',
          title: 'Handlingslister rangert etter inntekt',
          body: 'Salg, CS og drift åpner ett dashboard hver. Hver kunde rangeres etter signalstyrke og inntekt i fare — med dokumentasjonen ett klikk unna.',
        },
      ],
    },
    useCases: {
      eyebrow: 'Bruksområder',
      title: 'Én plattform. Alle inntektsteam.',
      lead: 'Velg teamet kjøperen bryr seg om — hvert team får dashbordet tilpasset sin arbeidsflyt.',
      tabs: [
        {
          id: 'sales',
          label: 'Salg',
          headline: 'Prospekter med sannheten dataene allerede har.',
          body: 'Slutt å gjette hvilke kunder som er varme. Plattformen leser eksisterende kundeaktivitet og løfter frem hvem som er klare for ekspansjon, hvem som glir bort, og hvilke kunder som nevner konkurrenter i support-saker.',
          bullets: [
            'Kundescore basert på inntektsverdi, ikke magefølelse',
            'Pre-meeting brief autogenerert fra alle berøringspunkter',
            'Pipeline-dømming som speiler virkeligheten',
            'Konkurrentinformasjon hentet fra innkommende kommunikasjon',
          ],
        },
        {
          id: 'cs',
          label: 'Customer Success',
          headline: 'Se churn 90 dager før det skjer.',
          body: 'Saker, e-poster og møtenotater inneholder alle churn-signalene du trenger. Vi rangerer kunder etter churn-risiko med dokumentasjon vedlagt — så CSM-ene dine kan handle før fornyelse blir en brannslukking.',
          bullets: [
            'Churn-score med underliggende dokumentasjon per kunde',
            'Auto-detekterte eskalerings-mønstre på tvers av support og e-post',
            'Fornyelses-nedtelling med risikojustert prognose',
            'Mersalg-triggere basert på bruk og produktomtaler',
          ],
        },
        {
          id: 'ops',
          label: 'Drift',
          headline: 'Kvalitetsproblemer slutter å være kvartalets overraskelse.',
          body: 'Reklamasjoner, leveranseavvik og kvalitetsrapporter klustres automatisk. Du ser mønsteret uker før det havner i en styrepresentasjon — og hvilke kunder som er i risiko på grunn av det.',
          bullets: [
            'Cluster-deteksjon på tvers av reklamasjoner og kvalitetsrapporter',
            'Kundepåvirkning per driftsproblem',
            'SLA-prognose ut fra nåværende trend',
            'Rotårsak satt sammen på tvers av systemer',
          ],
        },
        {
          id: 'tender',
          label: 'Anbud & Innkjøp',
          headline: 'Vinn flere anbud ved å huske alt du noensinne har skrevet.',
          body: 'Tidligere anbudssvar, kontrakter og møtenotater blir et søkbart kunnskapsgrunnlag. Still hvilket som helst spørsmål; få svar med kildehenvisninger.',
          bullets: [
            'Søkbare svar på tvers av alle tidligere anbud',
            'Auto-utkast med kildehenvisninger',
            'Forpliktelses-sporing på tvers av aktive kontrakter',
            'Risiko-flagg på aggressive forpliktelser',
          ],
        },
      ],
    },
    features: {
      eyebrow: 'Det du får',
      title: 'Avansert analyse som føles som et enkelt dashboard.',
      lead: 'Designet for inntektsteam — ikke dataforskere. Utforsk, filtrer og still spørsmål direkte til dataene.',
      items: [
        { title: 'Automatisk analyse', body: 'Analyserer dataene umiddelbart og løfter frem signalene som betyr noe.' },
        { title: 'Intuitive dashboards', body: 'Tydelige visualiseringer som gjør komplekse data enkle å forstå.' },
        { title: 'Interaktiv utforskning', body: 'Strukturerte menyer og filtre — naviger på kunde, segment eller tema.' },
        { title: 'Skreddersydde rapporter', body: 'Tilpass uttrekk, dashboards og rapporter til behovet ditt.' },
        { title: 'Direkte spørsmål', body: 'Still eksplisitte og detaljerte spørsmål direkte til dataene.' },
        { title: 'Enkel eksport', body: 'Eksporter til Excel eller Word — klart til å deles eller presenteres.' },
      ],
    },
    security: {
      eyebrow: 'Sikkerhet i bedriftsklasse',
      title: 'Flerlags sikkerhet og personvern — by design.',
      lead: 'Sikkerhet og datavern er kjerneprinsipper. Plattformen er ISO 27001-2 sertifisert.',
      points: [
        'Data lagres og prosesseres i et lukket miljø',
        'All prosessering på kontrollert, isolert infrastruktur',
        'Innsikt genereres uten å eksponere eller dele dine data',
        'KI-modellene kjører i et avgrenset, sikkert miljø',
        'Informasjonen din brukes aldri til å trene KI-modeller',
      ],
      footer:
        'Flere lag av sikkerhet og personvern gir deg fordelene av avansert KI-innsikt uten å gi slipp på kontrollen over egne data. Detaljert sikkerhetsdokumentasjon på forespørsel.',
      badge1: 'ISO 27001-2',
      badge2: 'Private KI-modeller',
      badge3: 'Isolert infrastruktur',
    },
    pricing: {
      eyebrow: 'Rask utrulling. Fast pris.',
      title: 'Resultater på timer. Full integrasjon på dager.',
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
      cta: 'Bestill 30-min demo',
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
        { q: 'Hvor raskt ser vi reell innsikt fra våre egne data?', a: 'Innen 24 timer etter at vi har fått et datautvalg. 24t proof-of-concept er gratis — du ser ekte resultater før en kommersiell beslutning.' },
        { q: 'Brukes dataene våre til å trene KI-modeller?', a: 'Nei. Informasjonen din brukes aldri til å trene KI-modeller. All prosessering skjer i et kontrollert, isolert miljø.' },
        { q: 'Hvor lang tid tar full integrasjon?', a: 'De fleste kunder er fullt integrert på få dager. Vanskelige systemer håndteres med robotisert prosessautomatisering ved behov.' },
        { q: 'Hva koster det?', a: 'Fast månedspris med full kostnadsoversikt. Ingen skjulte KI-prosesseringsavgifter, ingen per-dokument-kostnader, ingen overraskelser på support.' },
        { q: 'Hvem i selskapet bruker dette?', a: 'Salgsledere for pipeline og kundescoring; CS for churn og fornyelser; Drift for kvalitet og SLA; Anbudsteam for tilbudssvar. Én plattform, rolle-spesifikke dashboards.' },
        { q: 'Er plattformen ISO-sertifisert?', a: 'Ja — ISO 27001-2 sertifisert, med detaljert sikkerhetsdokumentasjon på forespørsel.' },
      ],
    },
    cta: {
      title: 'La dataene dine fortelle sin egen historie.',
      lead: 'Bestill 30 minutter. Vi viser deg plattformen på ekte data — dine eller representative — og du bestemmer om det er verdt et gratis 24t proof-of-concept.',
      primary: 'Bestill 30-min demo',
      secondary: 'Send oss en e-post',
      form: {
        name: 'Navnet ditt',
        email: 'Jobb-e-post',
        company: 'Selskap',
        message: 'Hvilke data ønsker du innsikt fra?',
        submit: 'Bestill demo',
        success: 'Takk! Vi tar kontakt innen 24 timer.',
      },
    },
    footer: {
      tagline: 'Gjør dataene du allerede har til ditt neste salgsmøte.',
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
