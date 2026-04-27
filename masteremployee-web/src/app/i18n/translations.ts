export type Lang = 'en' | 'no';

export interface Dictionary {
  nav: {
    problem: string;
    solution: string;
    features: string;
    security: string;
    pricing: string;
    testimonials: string;
    requestDemo: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleGradient: string;
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
  };
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
  features: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; body: string }[];
  };
  dashboards: {
    eyebrow: string;
    title: string;
    lead: string;
    items: string[];
    note: string;
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
  testimonials: {
    eyebrow: string;
    title: string;
    lead: string;
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
  lang: {
    en: string;
    no: string;
  };
}

export const dictionaries: Record<Lang, Dictionary> = {
  en: {
    nav: {
      problem: 'Problem',
      solution: 'Solution',
      features: 'Features',
      security: 'Security',
      pricing: 'Pricing',
      testimonials: 'Customers',
      requestDemo: 'Request a demo',
    },
    hero: {
      eyebrow: 'Intelligent data insight platform',
      titleLead: 'Unlock valuable insight from your',
      titleGradient: 'unstructured data',
      subtitle: 'Actionable insight — in seconds.',
      description:
        'MasterEmployee transforms contracts, emails, meeting notes and operational documents into actionable insight. Within seconds, the platform surfaces what matters — in intuitive dashboards, reports and action lists.',
      primaryCta: 'Get a free 24h proof-of-concept',
      secondaryCta: 'See how it works',
      trustBadge1: 'ISO 27001-2 compliant',
      trustBadge2: 'Free 24h PoC',
      trustBadge3: 'Fixed monthly price',
      dashboardTitle: 'Customer Insight Dashboard',
      dashboardSubtitle: 'Live signals across your data',
      kpiChurn: 'Churn risk',
      kpiUpsell: 'Upsell potential',
      kpiContract: 'Contract signals',
      kpiLiveLabel: 'Live',
      kpiAnalyzed: 'documents analyzed',
      kpiSignals: 'signals identified',
    },
    problem: {
      eyebrow: 'The problem',
      title: 'Critical business insight is hidden in unstructured data',
      lead: 'Most companies store valuable information across different operational systems, documents and communication channels — but few manage to turn that data into a complete view of their business.',
      body: 'This information holds important signals about operational performance, customer behaviour and potential risks. But because the data is unstructured and scattered across systems, it is difficult to analyze and rarely used effectively.',
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
      title: 'From unstructured data to business insight — in three steps',
      lead: 'Connect your data, let the platform analyze it, and see the insight directly in intuitive dashboards.',
      items: [
        {
          step: '01',
          title: 'Connect and collect your data',
          body: 'MasterEmployee securely connects to your relevant business information — contracts, meeting notes, emails, operational systems and customer documentation. We integrate fast, even with systems that are hard to reach. Robotic process automation is available for the most challenging sources.',
        },
        {
          step: '02',
          title: 'AI analyzes the information',
          body: 'The platform automatically processes unstructured data using advanced AI models. It identifies patterns, signals, risks and opportunities across documents, communication and operational information.',
        },
        {
          step: '03',
          title: 'Insight and actions — instantly',
          body: 'Results are presented through intuitive dashboards and tailored reports that highlight the most important insights about your customers, contracts and operations. Your teams immediately see what matters, what requires attention and where opportunities exist.',
        },
      ],
    },
    features: {
      eyebrow: 'Key features',
      title: 'Advanced data analysis — simple and accessible',
      lead: 'Designed to make advanced analysis feel effortless. Explore, filter and ask directly of your data.',
      items: [
        {
          title: 'Automatic data analysis',
          body: 'Instantly analyzes your data and surfaces the signals that matter.',
        },
        {
          title: 'Intuitive dashboards',
          body: 'Clear visualizations that make complex data easy to understand.',
        },
        {
          title: 'Interactive exploration',
          body: 'Structured menus and buttons to navigate, filter and focus on specific customers or segments.',
        },
        {
          title: 'Tailored reports',
          body: 'Customize extractions, dashboards and reports to your organization\u2019s needs.',
        },
        {
          title: 'Direct questions',
          body: 'Ask explicit, detailed questions directly to your data for deeper insight.',
        },
        {
          title: 'Easy export',
          body: 'Export insights to Excel or Word — ready to share, analyze or present.',
        },
      ],
    },
    dashboards: {
      eyebrow: 'Insight dashboards',
      title: 'See what your data has been trying to tell you',
      lead: 'Dashboards are generated automatically and can be tailored to specific themes.',
      items: [
        'Customer churn risk',
        'Upsell and growth opportunities',
        'Contract obligations and commitments',
        'Operational and quality issues',
        'Critical follow-up actions',
        'Claims and dispute patterns',
      ],
      note: 'The platform also generates tailored reports, making it easy to share insight across teams and management.',
    },
    security: {
      eyebrow: 'Enterprise security',
      title: 'Built on multi-level security & data privacy',
      lead: 'Security and data protection are core principles. The platform is ISO 27001-2 compliant — internationally recognized information security practices.',
      points: [
        'Data is stored and processed in a confined environment',
        'All processing takes place in a controlled and isolated infrastructure',
        'Insights are generated without exposing or sharing your data',
        'AI models operate in a constricted and secure environment',
        'Your information is never used to train AI models',
      ],
      footer:
        'Multiple layers of security and privacy give you the benefit of advanced AI insight while keeping full control of your data. Trusted by organizations that require secure AI-powered insight. Detailed platform security documentation is available on request.',
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
      cta: 'Start your free 24h proof-of-concept',
      note: 'Contact us, tell us what you need, show us the data — we deploy the platform to analyze it immediately.',
    },
    testimonials: {
      eyebrow: 'Customers',
      title: 'What our users actually say',
      lead: 'Real words from client representatives, tender professionals and customer service teams.',
    },
    cta: {
      title: 'Let us demonstrate what your data can tell you.',
      lead: 'Free proof-of-concept within 24 hours. Contact us to gain immediate insight.',
      primary: 'Request a demo',
      secondary: 'Email us directly',
      form: {
        name: 'Your name',
        email: 'Work email',
        company: 'Company',
        message: 'Briefly, what data would you like insight from?',
        submit: 'Request demo',
        success: 'Thank you! We\u2019ll be in touch within 24 hours.',
      },
    },
    footer: {
      tagline: 'Intelligent data insight — turning unstructured data into actionable insight.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms',
      rights: 'All rights reserved.',
    },
    lang: {
      en: 'EN',
      no: 'NO',
    },
  },
  no: {
    nav: {
      problem: 'Problemet',
      solution: 'L\u00f8sning',
      features: 'Funksjoner',
      security: 'Sikkerhet',
      pricing: 'Pris',
      testimonials: 'Kunder',
      requestDemo: 'Be om demo',
    },
    hero: {
      eyebrow: 'Intelligent innsiktsplattform',
      titleLead: 'Frigj\u00f8r verdifull innsikt fra dine',
      titleGradient: 'ustrukturerte data',
      subtitle: 'Handlingsrettet innsikt \u2014 p\u00e5 sekunder.',
      description:
        'MasterEmployee gj\u00f8r kontrakter, e-post, m\u00f8tenotater og driftsdokumenter om til handlingsrettet innsikt. P\u00e5 sekunder l\u00f8fter plattformen frem det som betyr noe \u2014 i intuitive dashboards, rapporter og handlingslister.',
      primaryCta: 'F\u00e5 en gratis 24t proof-of-concept',
      secondaryCta: 'Se hvordan det fungerer',
      trustBadge1: 'ISO 27001-2 sertifisert',
      trustBadge2: 'Gratis 24t PoC',
      trustBadge3: 'Fast m\u00e5nedspris',
      dashboardTitle: 'Kundedashboard',
      dashboardSubtitle: 'Signaler p\u00e5 tvers av dine data \u2014 i sanntid',
      kpiChurn: 'Churn-risiko',
      kpiUpsell: 'Mersalg-potensial',
      kpiContract: 'Kontraktssignaler',
      kpiLiveLabel: 'Live',
      kpiAnalyzed: 'dokumenter analysert',
      kpiSignals: 'signaler funnet',
    },
    problem: {
      eyebrow: 'Problemet',
      title: 'Kritisk forretningsinnsikt er gjemt i ustrukturerte data',
      lead: 'De fleste selskaper lagrer verdifull informasjon p\u00e5 tvers av driftssystemer, dokumenter og kommunikasjonskanaler \u2014 men f\u00e5 klarer \u00e5 omsette dataene til et helhetsbilde av virksomheten.',
      body: 'Denne informasjonen inneholder viktige signaler om driftsytelse, kundeatferd og risiko. Men fordi dataene er ustrukturerte og spredt p\u00e5 tvers av systemer, er de vanskelige \u00e5 analysere \u2014 og sjelden utnyttet effektivt.',
      sources: [
        'Kundekontrakter',
        'M\u00f8tenotater',
        'E-post og kundekommunikasjon',
        'Ordre- og leveransedokumentasjon',
        'Support-saker og tjenesterapporter',
        'Reklamasjoner og kvalitetsrapporter',
        'Faktura-informasjon',
      ],
      outcome:
        'Resultatet er at selskaper g\u00e5r glipp av tidlige signaler om kundefrafall, vekstmuligheter og driftsproblemer.',
    },
    steps: {
      eyebrow: 'Slik fungerer det',
      title: 'Fra ustrukturerte data til innsikt \u2014 i tre steg',
      lead: 'Koble til dataene dine, la plattformen analysere \u2014 og se innsikten i intuitive dashboards.',
      items: [
        {
          step: '01',
          title: 'Koble til og hent inn data',
          body: 'MasterEmployee kobler seg sikkert til relevant forretningsinformasjon \u2014 kontrakter, m\u00f8tenotater, e-post, driftssystemer og kundedokumentasjon. Vi integrerer raskt, selv med systemer som er vanskelige \u00e5 n\u00e5. For de tyngste datakildene tilbyr vi robotisert prosessautomatisering.',
        },
        {
          step: '02',
          title: 'KI analyserer informasjonen',
          body: 'Plattformen analyserer ustrukturerte data automatisk med avanserte KI-modeller. Den identifiserer m\u00f8nstre, signaler, risiko og muligheter p\u00e5 tvers av dokumenter, kommunikasjon og driftsdata.',
        },
        {
          step: '03',
          title: 'Innsikt og tiltak \u2014 umiddelbart',
          body: 'Resultatene presenteres i intuitive dashboards og skreddersydde rapporter som l\u00f8fter frem det viktigste om kunder, kontrakter og drift. Teamene dine ser umiddelbart hva som betyr noe, hva som krever oppmerksomhet og hvor mulighetene ligger.',
        },
      ],
    },
    features: {
      eyebrow: 'Viktige funksjoner',
      title: 'Avansert dataanalyse \u2014 enkelt og tilgjengelig',
      lead: 'Designet for at avansert analyse skal f\u00f8les enkelt. Utforsk, filtrer og still sp\u00f8rsm\u00e5l direkte til dine data.',
      items: [
        {
          title: 'Automatisk analyse',
          body: 'Analyserer dataene dine umiddelbart og l\u00f8fter frem signalene som betyr noe.',
        },
        {
          title: 'Intuitive dashboards',
          body: 'Tydelige visualiseringer som gj\u00f8r komplekse data enkle \u00e5 forst\u00e5.',
        },
        {
          title: 'Interaktiv utforskning',
          body: 'Strukturert navigasjon med menyer og knapper \u2014 filtrer p\u00e5 kunder, temaer eller segmenter.',
        },
        {
          title: 'Skreddersydde rapporter',
          body: 'Tilpass uttrekk, dashboards og rapporter til din organisasjons behov.',
        },
        {
          title: 'Direkte sp\u00f8rsm\u00e5l',
          body: 'Still eksplisitte og detaljerte sp\u00f8rsm\u00e5l direkte til dataene for dypere innsikt.',
        },
        {
          title: 'Enkel eksport',
          body: 'Eksporter innsikt til Excel eller Word \u2014 klart til \u00e5 deles, analyseres eller presenteres.',
        },
      ],
    },
    dashboards: {
      eyebrow: 'Innsikts-dashboards',
      title: 'Se hva dataene dine egentlig har fors\u00f8kt \u00e5 fortelle deg',
      lead: 'Dashboards genereres automatisk og kan skreddersys til spesifikke temaer.',
      items: [
        'Churn-risiko p\u00e5 kunder',
        'Mersalg og vekstmuligheter',
        'Kontraktsforpliktelser og \u00e5panede krav',
        'Drifts- og kvalitetsproblemer',
        'Kritiske oppf\u00f8lgingspunkter',
        'Reklamasjons- og tvistem\u00f8nstre',
      ],
      note: 'Plattformen genererer ogs\u00e5 skreddersydde rapporter \u2014 enkelt \u00e5 dele p\u00e5 tvers av team og ledelse.',
    },
    security: {
      eyebrow: 'Sikkerhet i bedriftsklasse',
      title: 'Bygget p\u00e5 flerlags sikkerhet og personvern',
      lead: 'Sikkerhet og datavern er kjerneprinsipper. Plattformen er ISO 27001-2 sertifisert \u2014 i tr\u00e5d med internasjonalt anerkjente standarder for informasjonssikkerhet.',
      points: [
        'Data lagres og prosesseres i et lukket milj\u00f8',
        'All prosessering skjer p\u00e5 kontrollert og isolert infrastruktur',
        'Innsikt genereres uten \u00e5 eksponere eller dele dine data',
        'KI-modellene kj\u00f8rer i et avgrenset og sikkert milj\u00f8',
        'Informasjonen din brukes aldri til \u00e5 trene KI-modeller',
      ],
      footer:
        'Flere lag av sikkerhet og personvern gir deg fordelene av avansert KI-innsikt uten \u00e5 gi slipp p\u00e5 kontrollen over egne data. Allerede valgt av organisasjoner som stiller strenge krav til sikker KI-basert innsikt. Detaljert sikkerhetsdokumentasjon er tilgjengelig p\u00e5 foresp\u00f8rsel.',
      badge1: 'ISO 27001-2',
      badge2: 'Private KI-modeller',
      badge3: 'Isolert infrastruktur',
    },
    pricing: {
      eyebrow: 'Rask utrulling. Fast pris.',
      title: 'Resultater p\u00e5 timer. Full integrasjon p\u00e5 dager.',
      lead: 'Enkel \u00e5 ta i bruk. Raskt utrullet. Ingen skjulte KI- eller supportkostnader.',
      cardTitle: 'Inkludert i abonnementet',
      cardPrice: 'Fast m\u00e5nedspris',
      cardSub: 'Full kostnadsoversikt \u2014 ingen overraskelser.',
      includes: [
        'Gratis 24-timers proof-of-concept',
        'Full integrasjon p\u00e5 f\u00e5 dager',
        'Automatiske innsikts-dashboards',
        'Skreddersydde rapporter for din case',
        'Innebygget tilgangsstyring per bruker og datasett',
        'Ingen skjulte KI- eller supportkostnader',
      ],
      cta: 'Start din gratis 24t proof-of-concept',
      note: 'Kontakt oss, fortell oss hva du trenger, vis oss dataene \u2014 vi ruller ut plattformen og analyserer umiddelbart.',
    },
    testimonials: {
      eyebrow: 'Kunder',
      title: 'Hva brukerne v\u00e5re faktisk sier',
      lead: 'Ekte ord fra kunderepresentanter, anbudsfolk og kundeservice-team.',
    },
    cta: {
      title: 'La oss vise deg hva dine data egentlig kan fortelle.',
      lead: 'Gratis proof-of-concept innen 24 timer. Ta kontakt for umiddelbar innsikt.',
      primary: 'Be om demo',
      secondary: 'Send oss en e-post',
      form: {
        name: 'Navnet ditt',
        email: 'Jobb-e-post',
        company: 'Selskap',
        message: 'Kort \u2014 hvilke data \u00f8nsker du innsikt fra?',
        submit: 'Be om demo',
        success: 'Takk! Vi tar kontakt innen 24 timer.',
      },
    },
    footer: {
      tagline: 'Intelligent datainnsikt \u2014 gj\u00f8r ustrukturerte data om til handlingsrettet innsikt.',
      product: 'Produkt',
      company: 'Selskap',
      legal: 'Juridisk',
      contact: 'Kontakt',
      privacy: 'Personvern',
      terms: 'Vilk\u00e5r',
      rights: 'Alle rettigheter reservert.',
    },
    lang: {
      en: 'EN',
      no: 'NO',
    },
  },
};

export const testimonials: { quote_no: string; quote_en: string; role_en: string; role_no: string }[] = [
  {
    quote_no: 'Vi er str\u00e5lende forn\u00f8yd',
    quote_en: 'We are absolutely satisfied.',
    role_en: 'Client representative',
    role_no: 'Kunderepresentant',
  },
  {
    quote_no: 'Det er veldig g\u00f8y \u00e5 bruke verkt\u00f8yet',
    quote_en: 'It is very fun to use the tool.',
    role_en: 'Tender client user',
    role_no: 'Anbudsbruker',
  },
  {
    quote_no: 'Jeg bruker det masse. Jeg bruker det ogs\u00e5 til \u00e5 f\u00e5 innspill og ideer n\u00e5r jeg skriver anbud.',
    quote_en: 'I use it a lot. I also use it to get input and ideas when I write tenders.',
    role_en: 'Tender client user',
    role_no: 'Anbudsbruker',
  },
  {
    quote_no: 'Dette er mer enn det vi hadde h\u00e5pet p\u00e5',
    quote_en: 'This is more than we had hoped for.',
    role_en: 'Client representative',
    role_no: 'Kunderepresentant',
  },
  {
    quote_no: 'Det er utrolig digg \u00e5 ha et slikt verkt\u00f8y',
    quote_en: 'It is incredibly great to have such a tool.',
    role_en: 'Tender professional',
    role_no: 'Anbudsspesialist',
  },
  {
    quote_no: 'Ikke la konkurrentene v\u00e5re f\u00e5 tilgang til dette verkt\u00f8yet',
    quote_en: 'Don\u2019t let our competitors gain access to this tool.',
    role_en: 'Client representative',
    role_no: 'Kunderepresentant',
  },
  {
    quote_no: 'Dette er gull verd',
    quote_en: 'This is worth its weight in gold.',
    role_en: 'Customer service lead',
    role_no: 'Kundeservice-ansvarlig',
  },
  {
    quote_no: 'Plattformen og tjenesten dere leverer er nesten for billig',
    quote_en: 'The platform and service you provide are almost too cheap.',
    role_en: 'Client lead',
    role_no: 'Kundeansvarlig',
  },
  {
    quote_no: 'Dette er dritbra!',
    quote_en: 'This is really great!',
    role_en: 'Customer service manager',
    role_no: 'Kundeservice-leder',
  },
  {
    quote_no: 'Denne l\u00f8sningen er jo fantastisk!',
    quote_en: 'This platform is just fantastic!',
    role_en: 'Client user',
    role_no: 'Bruker',
  },
];
