export type Lang = 'en' | 'no';

export interface Dictionary {
  nav: {
    problem: string;
    solution: string;
    useCases: string;
    security: string;
    faq: string;
    bookDemo: string;
  };
  hero: {
    eyebrow: string;
    /* One entry per rendered line; each line is a list of styled segments.
       `tone` selects the gradient — omit it for plain ink. */
    titleLines: { text: string; tone?: 'accent' | 'blue' }[][];
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
    titleLead: string;
    titleAccent: string;
    lead: string;
    emphasisLead: string;
    emphasisStrong: string;
    coreTitle: string;
    coreSub: string;
    /** Small callouts floating around the core node. */
    hints: string[];
    /** Seven data sources ringing the core; `icon` selects the inline SVG. */
    sources: {
      icon: 'contract' | 'mail' | 'support' | 'meeting' | 'claim' | 'delivery' | 'invoice';
      title: string;
      body: string;
    }[];
    missedTitle: string;
    missedBody: string;
    missedItems: {
      icon: 'churn' | 'revenue' | 'ops' | 'compliance';
      title: string;
      body: string;
    }[];
  };
  steps: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    lead: string;
    items: {
      step: string;
      title: string;
      body: string;
      chip: string;
      /** Colour of the footnote chip under each column. */
      tone: 'neutral' | 'blue' | 'accent';
    }[];
    /** Step 01 visual: the sources feeding into the platform. */
    connectSources: {
      icon: 'contract' | 'mail' | 'support' | 'meeting' | 'system' | 'document';
      label: string;
    }[];
    /** Step 02 visual: what the models do. */
    aiCapabilities: {
      icon: 'patterns' | 'signals' | 'risks' | 'opportunities' | 'context';
      label: string;
    }[];
    /** Step 03 visual: the ranked insight list. */
    insights: {
      title: string;
      sortLabel: string;
      rows: {
        icon: 'risk' | 'growth' | 'action' | 'improvement' | 'document';
        title: string;
        sub: string;
        tag: string;
        tone: 'risk' | 'opportunity' | 'action' | 'improvement';
        score: string;
      }[];
    };
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
      faq: 'FAQ',
      bookDemo: 'Request a demo',
    },
    hero: {
      eyebrow: 'Intelligent data insight platform',
      titleLines: [
        [{ text: 'Turn scattered data,', tone: 'accent' }],
        [{ text: 'into business' }],
        [{ text: 'Intelligence' }],
      ],
      subtitle: 'Actionable insight — in seconds.',
      description:
        'MasterEmployee reads the contracts, emails and support cases your business already has — and shows every team what matters, in seconds.',
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
      titleLead: 'Your business already has the signals.',
      titleAccent: 'They’re just buried.',
      lead: 'Critical information is scattered across the systems your teams use every day. Individually, each source tells only part of the story.',
      emphasisLead: 'The problem is that',
      emphasisStrong: 'no single person — or system — sees the whole picture.',
      coreTitle: 'Buried data',
      coreSub: 'Scattered information = lost insight and opportunity',
      /* Order is positional: [top, left, right, bottom]. */
      hints: ['Opportunities missed', 'Context lost', 'Hidden signals', 'Risks unseen'],
      sources: [
        { icon: 'contract', title: 'Contracts', body: 'Terms, obligations and renewals' },
        { icon: 'mail', title: 'Emails & communications', body: 'Customer requests, feedback and issues' },
        { icon: 'support', title: 'Support cases', body: 'Tickets, chats and service reports' },
        { icon: 'meeting', title: 'Meetings', body: 'Notes, decisions and action items' },
        { icon: 'claim', title: 'Claims & quality', body: 'Returns, defects and investigations' },
        { icon: 'delivery', title: 'Orders & deliveries', body: 'Purchase orders, shipments and PODs' },
        { icon: 'invoice', title: 'Invoices', body: 'Billing, payments and adjustments' },
      ],
      missedTitle: 'What gets missed',
      missedBody: 'When data stays scattered, business-critical insights stay hidden.',
      missedItems: [
        { icon: 'churn', title: 'Customer churn', body: 'Early signs are missed until it’s too late.' },
        { icon: 'revenue', title: 'Revenue opportunities', body: 'Upsell, cross-sell and retention opportunities go unnoticed.' },
        { icon: 'ops', title: 'Operational issues', body: 'Risks and bottlenecks aren’t identified in time.' },
        { icon: 'compliance', title: 'Contract & compliance risk', body: 'Key obligations and renewal deadlines are overlooked.' },
      ],
    },
    steps: {
      eyebrow: 'How it works',
      titleLead: 'From unstructured data to business insight in',
      titleAccent: 'three steps.',
      lead: 'Connect your data, let the platform analyze it, and your teams get the insight ranked by importance.',
      items: [
        {
          step: '01',
          title: 'Connect your data',
          body: 'MasterEmployee securely connects to your contracts, emails, support cases and operational systems. We integrate with most data sources and use RPA for systems that are hard to connect.',
          chip: 'Secure. Private. Enterprise-grade.',
          tone: 'neutral',
        },
        {
          step: '02',
          title: 'AI analyzes the information',
          body: 'Private AI models process your unstructured data — identifying patterns, signals, risks and opportunities across documents, communications and operational systems.',
          chip: 'Your data stays private. Always.',
          tone: 'blue',
        },
        {
          step: '03',
          title: 'Insight in clear dashboards',
          body: 'Results land in intuitive dashboards and tailored reports — highlighting what matters about your customers, contracts and operations. Your teams see what needs attention and where the opportunities are.',
          chip: 'Insight ranked by importance.',
          tone: 'accent',
        },
      ],
      connectSources: [
        { icon: 'contract', label: 'Contracts' },
        { icon: 'mail', label: 'Emails' },
        { icon: 'support', label: 'Support cases' },
        { icon: 'meeting', label: 'Meetings' },
        { icon: 'system', label: 'Operational systems' },
        { icon: 'document', label: 'Documents' },
      ],
      aiCapabilities: [
        { icon: 'patterns', label: 'Identifies patterns' },
        { icon: 'signals', label: 'Finds hidden signals' },
        { icon: 'risks', label: 'Assesses risks' },
        { icon: 'opportunities', label: 'Uncovers opportunities' },
        { icon: 'context', label: 'Understands context' },
      ],
      insights: {
        title: 'Top insights',
        sortLabel: 'Ranked by importance',
        rows: [
          { icon: 'risk', title: 'At-risk customer', sub: 'Sunrise Industries', tag: 'Risk', tone: 'risk', score: '9.6' },
          { icon: 'growth', title: 'Expansion opportunity', sub: 'Northwind Traders', tag: 'Opportunity', tone: 'opportunity', score: '9.1' },
          { icon: 'action', title: 'Contract renewal', sub: 'Acme Corporation', tag: 'Action', tone: 'action', score: '8.7' },
          { icon: 'improvement', title: 'Process inefficiency', sub: 'Order to cash', tag: 'Improvement', tone: 'improvement', score: '7.9' },
          { icon: 'document', title: 'Compliance gap', sub: 'Data retention policy', tag: 'Risk', tone: 'risk', score: '7.3' },
        ],
      },
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
        { q: 'Is the platform ISO 27001-2 compliant?', a: 'Yes — ISO 27001-2 compliant, with detailed security documentation available on request.' },
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
      faq: 'FAQ',
      bookDemo: 'Be om demo',
    },
    hero: {
      eyebrow: 'Intelligent dataplattform for innsikt',
      titleLines: [
        [{ text: 'Gjør spredte data,', tone: 'accent' }],
        [{ text: 'om til business' }],
        [{ text: 'Intelligence' }],
      ],
      subtitle: 'Handlingsrettet innsikt — på sekunder.',
      description:
        'MasterEmployee leser kontraktene, e-postene og sakene dere allerede har — og viser hvert team hva som betyr noe, på sekunder.',
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
      titleLead: 'Bedriften din har allerede signalene.',
      titleAccent: 'De er bare begravd.',
      lead: 'Kritisk informasjon er spredt på tvers av systemene teamene bruker hver eneste dag. Hver kilde forteller bare en del av historien.',
      emphasisLead: 'Problemet er at',
      emphasisStrong: 'ingen person — eller system — ser hele bildet.',
      coreTitle: 'Begravde data',
      coreSub: 'Spredt informasjon = tapt innsikt og tapte muligheter',
      /* Order is positional: [top, left, right, bottom]. */
      hints: ['Muligheter går tapt', 'Kontekst går tapt', 'Skjulte signaler', 'Risiko forblir usett'],
      sources: [
        { icon: 'contract', title: 'Kontrakter', body: 'Vilkår, forpliktelser og fornyelser' },
        { icon: 'mail', title: 'E-post & kommunikasjon', body: 'Henvendelser, tilbakemeldinger og saker' },
        { icon: 'support', title: 'Supportsaker', body: 'Saker, chat og servicerapporter' },
        { icon: 'meeting', title: 'Møter', body: 'Notater, beslutninger og oppgaver' },
        { icon: 'claim', title: 'Reklamasjon & kvalitet', body: 'Returer, avvik og undersøkelser' },
        { icon: 'delivery', title: 'Ordre & leveranser', body: 'Innkjøpsordre, forsendelser og kvitteringer' },
        { icon: 'invoice', title: 'Fakturaer', body: 'Fakturering, betalinger og justeringer' },
      ],
      missedTitle: 'Hva som går tapt',
      missedBody: 'Når dataene forblir spredt, forblir forretningskritisk innsikt skjult.',
      missedItems: [
        { icon: 'churn', title: 'Kundefrafall', body: 'Tidlige tegn oppdages først når det er for sent.' },
        { icon: 'revenue', title: 'Inntektsmuligheter', body: 'Mersalg, kryssalg og lojalitet går ubemerket hen.' },
        { icon: 'ops', title: 'Driftsproblemer', body: 'Risiko og flaskehalser oppdages ikke i tide.' },
        { icon: 'compliance', title: 'Kontrakts- og etterlevelsesrisiko', body: 'Viktige forpliktelser og frister blir oversett.' },
      ],
    },
    steps: {
      eyebrow: 'Slik fungerer det',
      titleLead: 'Fra ustrukturerte data til forretningsinnsikt i',
      titleAccent: 'tre steg.',
      lead: 'Koble til dataene, la plattformen analysere, og teamene dine får innsikt rangert etter viktighet.',
      items: [
        {
          step: '01',
          title: 'Koble til dataene dine',
          body: 'MasterEmployee kobler seg sikkert til kontrakter, e-post, supportsaker og operative systemer. Vi integrerer med de fleste datakilder og bruker RPA for systemer som er vanskelige å koble til.',
          chip: 'Sikkert. Privat. Bedriftsklart.',
          tone: 'neutral',
        },
        {
          step: '02',
          title: 'KI analyserer informasjonen',
          body: 'Private KI-modeller prosesserer ustrukturerte data — og identifiserer mønstre, signaler, risikoer og muligheter på tvers av dokumenter, kommunikasjon og operative systemer.',
          chip: 'Dataene dine forblir private. Alltid.',
          tone: 'blue',
        },
        {
          step: '03',
          title: 'Innsikt i tydelige dashboards',
          body: 'Resultatene presenteres i intuitive dashboards og skreddersydde rapporter — som løfter frem det som betyr noe om kunder, kontrakter og drift. Teamene dine ser hva som krever oppmerksomhet og hvor mulighetene ligger.',
          chip: 'Innsikt rangert etter viktighet.',
          tone: 'accent',
        },
      ],
      connectSources: [
        { icon: 'contract', label: 'Kontrakter' },
        { icon: 'mail', label: 'E-post' },
        { icon: 'support', label: 'Supportsaker' },
        { icon: 'meeting', label: 'Møter' },
        { icon: 'system', label: 'Operative systemer' },
        { icon: 'document', label: 'Dokumenter' },
      ],
      aiCapabilities: [
        { icon: 'patterns', label: 'Identifiserer mønstre' },
        { icon: 'signals', label: 'Finner skjulte signaler' },
        { icon: 'risks', label: 'Vurderer risiko' },
        { icon: 'opportunities', label: 'Avdekker muligheter' },
        { icon: 'context', label: 'Forstår kontekst' },
      ],
      insights: {
        title: 'Viktigste innsikt',
        sortLabel: 'Rangert etter viktighet',
        rows: [
          { icon: 'risk', title: 'Kunde i faresonen', sub: 'Sunrise Industries', tag: 'Risiko', tone: 'risk', score: '9.6' },
          { icon: 'growth', title: 'Vekstmulighet', sub: 'Northwind Traders', tag: 'Mulighet', tone: 'opportunity', score: '9.1' },
          { icon: 'action', title: 'Kontraktsfornyelse', sub: 'Acme Corporation', tag: 'Handling', tone: 'action', score: '8.7' },
          { icon: 'improvement', title: 'Ineffektiv prosess', sub: 'Ordre til betaling', tag: 'Forbedring', tone: 'improvement', score: '7.9' },
          { icon: 'document', title: 'Etterlevelsesavvik', sub: 'Retningslinjer for datalagring', tag: 'Risiko', tone: 'risk', score: '7.3' },
        ],
      },
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
        { q: 'Er plattformen ISO 27001-2-sertifisert?', a: 'Ja — ISO 27001-2 sertifisert, med detaljert sikkerhetsdokumentasjon på forespørsel.' },
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

