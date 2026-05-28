export type NavItem = {
  href: string;
  label: string;
};

export type ContactPerson = {
  name: string;
  role: string;
  phone: string;
  phoneHref: string;
  email: string;
};

export type TableData = {
  columns: string[];
  rows: string[][];
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type ContentSection = {
  title?: string;
  body?: string;
  bullets?: string[];
  table?: TableData;
  gallery?: GalleryImage[];
};

export type Service = {
  slug: string;
  href: string;
  title: string;
  menuLabel: string;
  category: string;
  summary: string;
  intro: string;
  heroImage: string;
  previewImage: string;
  highlights: string[];
  sections: ContentSection[];
};

export type Certificate = {
  slug: string;
  title: string;
  summary: string;
  previewImage: string;
  pdfUrl: string;
};

export type ReferenceProject = {
  slug: string;
  title: string;
  location: string;
  yearLabel: string;
  summary: string;
  lead?: string;
  scope?: string[];
  tags: string[];
  coverImage: string;
  gallery: GalleryImage[];
  archiveOnly?: boolean;
  featured?: boolean;
};

export type ApartmentOffer = {
  label: string;
  href: string;
};

export type MediaCollection = {
  title: string;
  description?: string;
  items: GalleryImage[];
};

export type ApartmentProject = {
  title: string;
  intro: string;
  summary: string;
  saleLinks: ApartmentOffer[];
  videos: { title: string; src: string }[];
  galleries: MediaCollection[];
};

const legacyUpload = (relativePath: string) => `/legacy/uploads/${relativePath}`;

const referenceImage = (filename: string) => legacyUpload(`2020/07/${filename}`);

const reconstructionImage = (filename: string) => legacyUpload(`2020/07/${filename}`);

const apartmentImage = (filename: string, month = "08") => legacyUpload(`2023/${month}/${filename}`);

const apartmentVideo = (filename: string) => legacyUpload(`2023/07/${filename}`);

const certificatePdf = (filename: string, yearMonth: string) => legacyUpload(`${yearMonth}/${filename}`);

const certificateImage = (filename: string, yearMonth: string) => legacyUpload(`${yearMonth}/${filename}`);

export const navItems: NavItem[] = [
  { href: "/", label: "Domov" },
  { href: "/nase-sluzby", label: "Služby" },
  { href: "/referencie", label: "Referencie" },
  { href: "/certifikaty", label: "Certifikáty" },
  { href: "/byty-strazske", label: "Byty Strážske" },
];

export const company = {
  name: "BSL TRADING s.r.o.",
  tagline: "Stavebná spoločnosť",
  heroTitle: "Vaša stavba, náš cieľ",
  heroText:
    "Komplexné stavebné riešenia od rekonštrukcií po novostavby na kľúč, doplnené o referencie, certifikáty a projektové portfólio firmy BSL TRADING.",
  address: ["Suchý Jarok 1299/1", "066 01 Humenné"],
  businessInfo: {
    ico: "51787202",
    dic: "2120791849",
  },
  phone: "+421 905 723 897",
  phoneHref: "tel:+421905723897",
  email: "bilsak@bsltrading.sk",
  mapHref: "https://www.google.com/maps/search/?api=1&query=Such%C3%BD%20Jarok%201299%2F1%2C%20066%2001%20Humenn%C3%A9",
  facebook: "https://www.facebook.com/bsvstavhumenne/",
  foundedLabel: "2009",
  teamLabel: "33+",
  serviceCountLabel: "5",
  story: [
    "Osvedčeným receptom na úspech sú schopnosti, trpezlivosť a ťažká práca. V prvých rokoch súčasného storočia začínala firma pri drobných rekonštrukciách bytov a domov v regióne Humenné.",
    "Rastúci dopyt postupne posunul firmu od menších zákaziek k novostavbám rodinných domov, priemyselným objektom a komplexným obnovám bytových domov. V roku 2009 vznikla spoločnosť BSV STAV s.r.o., z ktorej sa neskôr stala dnešná BSL TRADING.",
    "Portfólio sa rozšírilo o murárske práce, sádrokartónové konštrukcie, potery, keramické dlažby a obklady, zatepľovanie fasád, spevnené plochy a zemné práce.",
    "Dnes spoločnosť stojí na kombinácii dlhoročných skúseností, vlastných tímov a realizácií, ktoré zahŕňajú bytové domy, občianske stavby, komerčné priestory aj developerské projekty.",
  ],
};

export const contacts: ContactPerson[] = [
  {
    name: "Vincent Bilšák",
    role: "Konateľ",
    phone: "0905 723 897",
    phoneHref: "tel:+421905723897",
    email: "bilsak@bsltrading.sk",
  },
  {
    name: "Marek Dudrák",
    role: "Obchodný zástupca",
    phone: "0917 458 618",
    phoneHref: "tel:+421917458618",
    email: "bsldudrak@gmail.com",
  },
  {
    name: "Mgr. Peter Savkanič",
    role: "Projektový manažér",
    phone: "0908 323 627",
    phoneHref: "tel:+421908323627",
    email: "bslsavkanic@gmail.com",
  },
  {
    name: "Ing. Maria Gaľová",
    role: "Asistentka obchodu",
    phone: "0907 723 897",
    phoneHref: "tel:+421907723897",
    email: "bslmgalova@gmail.com",
  },
];

export const services: Service[] = [
  {
    slug: "rekonstrukcne-prace",
    href: "/nase-sluzby/rekonstrukcne-prace",
    title: "Rekonštrukčné práce",
    menuLabel: "Rekonštrukčné práce",
    category: "Interiér a obnova budov",
    summary:
      "Kompletné rekonštrukcie rodinných domov, bytových domov, striech, fasád, interiérov, balkónov a vchodov.",
    intro:
      "Uvažujete o rekonštrukcii rodinného domu alebo bytového domu? BSL TRADING zastrešuje poradenstvo, projektovú dokumentáciu, odhad nákladov aj samotnú realizáciu zákazky.",
    heroImage: "/images/service1.jpg",
    previewImage: "/services/rekonstrukcne.jpg",
    highlights: [
      "kompletné rekonštrukcie domov a bytových domov",
      "opravy striech vrátane nadstavieb a strešných okien",
      "obnova fasád, interiérov, balkónov, terás a vstupov",
    ],
    sections: [
      {
        title: "Kompletná rekonštrukcia",
        body:
          "Ak zvažujete čiastočné alebo komplexné rekonštrukčné práce, tím BSL TRADING pripraví technické riešenie, rozpočet a následne zabezpečí kompletnú realizáciu.",
      },
      {
        title: "Rekonštrukcia strechy",
        body:
          "Strecha je základ. V lete bráni prehrievaniu domu, v zime izoluje od mrazu a po celý rok chráni objekt pred vlhkosťou. Firma realizuje opravy strešných konštrukcií, zateplenie, výmenu krytiny, klampiarske práce aj výmenu strešných okien.",
      },
      {
        title: "Rekonštrukcie fasád a interiérov",
        body:
          "Od rodinného domu až po panelový dom. Súčasťou realizácií sú obvodové plášte budov, dlažby, obnovy stien, maľovanie aj ďalšie interiérové stavebné práce.",
      },
      {
        gallery: [
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_1.jpg"),
            alt: "Rekonštrukcia balkónov a terás 1",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_2.jpg"),
            alt: "Rekonštrukcia balkónov a terás 2",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_3.jpg"),
            alt: "Rekonštrukcia balkónov a terás 3",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_4.jpg"),
            alt: "Rekonštrukcia balkónov a terás 4",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_5.jpg"),
            alt: "Rekonštrukcia balkónov a terás 5",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_6.jpg"),
            alt: "Rekonštrukcia balkónov a terás 6",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_7.jpg"),
            alt: "Rekonštrukcia balkónov a terás 7",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_8.jpg"),
            alt: "Rekonštrukcia balkónov a terás 8",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_9.jpg"),
            alt: "Rekonštrukcia balkónov a terás 9",
          },
          {
            src: reconstructionImage("20140204-rek_balkonov_teras_10.jpg"),
            alt: "Rekonštrukcia balkónov a terás 10",
          },
          {
            src: reconstructionImage("20140204-rek_domov_bytov_1.jpg"),
            alt: "Rekonštrukcia domov a bytov 1",
          },
          {
            src: reconstructionImage("20140204-rek_domov_bytov_2.jpg"),
            alt: "Rekonštrukcia domov a bytov 2",
          },
          {
            src: reconstructionImage("20140204-rek_domov_bytov_3.jpg"),
            alt: "Rekonštrukcia domov a bytov 3",
          },
          {
            src: reconstructionImage("20140204-rek_domov_bytov_4.jpg"),
            alt: "Rekonštrukcia domov a bytov 4",
          },
          {
            src: reconstructionImage("20140204-rek_domov_bytov_5.jpg"),
            alt: "Rekonštrukcia domov a bytov 5",
          },
          {
            src: reconstructionImage("20140204-rek_domov_bytov_6.jpg"),
            alt: "Rekonštrukcia domov a bytov 6",
          },
          {
            src: reconstructionImage("20140204-rek_vchodov_byt_domov_1.jpg"),
            alt: "Rekonštrukcia vstupov bytových domov 1",
          },
          {
            src: reconstructionImage("20140204-rek_vchodov_byt_domov_2.jpg"),
            alt: "Rekonštrukcia vstupov bytových domov 2",
          },
          {
            src: reconstructionImage("20140204-rek_vchodov_byt_domov_3.jpg"),
            alt: "Rekonštrukcia vstupov bytových domov 3",
          },
          {
            src: reconstructionImage("20140204-rek_vchodov_byt_domov_4.jpg"),
            alt: "Rekonštrukcia vstupov bytových domov 4",
          },
          {
            src: reconstructionImage("20140204-rek_vchodov_byt_domov_5.jpg"),
            alt: "Rekonštrukcia vstupov bytových domov 5",
          },
          {
            src: reconstructionImage("20140204-rek_vchodov_byt_domov_6.jpg"),
            alt: "Rekonštrukcia vstupov bytových domov 6",
          },
          {
            src: reconstructionImage("20140204-rek_vchodov_byt_domov_7.jpg"),
            alt: "Rekonštrukcia vstupov bytových domov 7",
          },
          {
            src: reconstructionImage("20140204-rek_vchodov_byt_domov_8.jpg"),
            alt: "Rekonštrukcia vstupov bytových domov 8",
          },
        ],
      },
    ],
  },
  {
    slug: "vykopove-prace",
    href: "/nase-sluzby/vykopove-prace",
    title: "Výkopové práce",
    menuLabel: "Výkopové práce",
    category: "Zemné práce",
    summary:
      "Výkop jám, základov, zárezov, hrubé terénne úpravy, skrývky a hutnenie plôch pod odborným dohľadom.",
    intro:
      "Dostatočná kapacita mechanizácie umožňuje firme realizovať veľkoobjemové zákazky v krátkom čase, vrátane práce v stiesnených podmienkach.",
    heroImage: "/images/service3.jpg",
    previewImage: "/services/vykopove.jpg",
    highlights: [
      "výkop jám, základov domu a zárezov",
      "hrubé terénne úpravy a skrývky",
      "hutnenie plôch a realizácia pod odborným dohľadom",
    ],
    sections: [
      {
        title: "Rozsah výkopových prác",
        bullets: [
          "výkop jám",
          "výkop zárezov",
          "hrubé terénne úpravy",
          "skrývky",
          "výkop základov domu",
          "práca v stiesnených priestoroch",
          "hutnenie plôch",
        ],
      },
      {
        title: "Kapacita a dohľad",
        body:
          "Dostatočná kapacita prostriedkov umožňuje realizovať veľkoobjemové zákazky v extrémne krátkom čase. Samozrejmosťou je realizácia pod odborným dohľadom.",
      },
      {
        title: "Dostupná technika",
        body:
          "Firma nasadzuje techniku a kapacity podľa rozsahu zákazky a podmienok stavby.",
      },
    ],
  },
  {
    slug: "zateplovanie-budov",
    href: "/nase-sluzby/zateplovanie-budov",
    title: "Zatepľovanie budov",
    menuLabel: "Zatepľovanie budov",
    category: "Fasády a obvodové plášte",
    summary:
      "Zatepľovanie budov, domov a bytoviek s využitím systémov Weber, Baumit, Stomix, Cemix a ďalších.",
    intro:
      "BSL TRADING realizuje zateplenie budov, domov a bytoviek s použitím kvalitných zatepľovacích systémov podľa výberu a možností zákazníka.",
    heroImage: "/images/service4.jpg",
    previewImage: "/services/zateplovanie.jpg",
    highlights: [
      "Weber, Baumit, Stomix, Cemix a ďalšie systémy",
      "nižšia energetická spotreba budovy",
      "ochrana proti plesniam a predĺženie životnosti fasády",
    ],
    sections: [
      {
        title: "Najpoužívanejšie systémy",
        bullets: ["Weber", "Baumit", "Stomix", "Cemix", "ďalšie certifikované riešenia"],
      },
      {
        title: "Prečo zatepľovať",
        body:
          "Kvalitné zateplenie znižuje energetickú spotrebu budovy o desiatky percent a vytvára tepelnoizolačnú vrstvu s minimálnym množstvom tepelných mostov.",
      },
      {
        title: "Dlhodobá ochrana objektu",
        body:
          "Zateplenie budovy chráni pred vznikom plesní a zároveň obvodový plášť budovy pred poveternostnými vplyvmi, čím značne predlžuje jeho životnosť.",
      },
    ],
  },
  {
    slug: "stavebne-prace",
    href: "/nase-sluzby/stavebne-prace",
    title: "Stavebné práce",
    menuLabel: "Stavebné práce",
    category: "Komplexná výstavba",
    summary:
      "Komplexné dodávky stavebných prác a rekonštrukcií vrátane domov na kľúč, fasád, nadstavieb a dokončovacích prác.",
    intro:
      "Vďaka dlhoročným skúsenostiam v obore firma odvádza prácu v najvyššej kvalite a pod odborným dohľadom.",
    heroImage: "/images/service5.jpg",
    previewImage: "/services/stavebne.jpg",
    highlights: [
      "rodinné domy na kľúč a nadstavby domov",
      "stavebné práce v bytových aj nebytových priestoroch",
      "rozpočet, harmonogram, subdodávky a koordinácia",
    ],
    sections: [
      {
        title: "Komplexné dodávky prác",
        body:
          "Stavebné práce zahŕňajú novostavby aj rekonštrukcie. Firma zabezpečuje fasády, bytové a nebytové priestory, dokončovacie práce a murárske profesie.",
      },
      {
        title: "Koordinácia projektu",
        body:
          "Pre klienta sa pripraví reálny rozpočet, časový harmonogram, subdodávky a koordinácia tak, aby celý proces prebehol čo najprehľadnejšie.",
      },
      {
        title: "Typické realizácie",
        bullets: [
          "stavba rodinných domov na kľúč",
          "nadstavby domov",
          "stavebné práce v bytových priestoroch",
          "stavebné práce v nebytových priestoroch",
          "dokončovacie práce a murárske profesie",
        ],
      },
    ],
  },
  {
    slug: "buracie-prace",
    href: "/nase-sluzby/buracie-prace",
    title: "Buracie práce",
    menuLabel: "Buracie práce",
    category: "Demolácie a príprava objektov",
    summary:
      "Interiérové búracie práce, demolácie objektov, odvoz stavebnej sute a ekologická likvidácia materiálu.",
    intro:
      "Firma realizuje interiérové búracie práce aj väčšie demolície. Strojovú činnosť kombinuje s ručnými metódami ako rezanie, trhanie a zbíjanie.",
    heroImage: "/images/service6.jpg",
    previewImage: "/services/buracie-right-1.jpg",
    highlights: [
      "búracie práce pri rekonštrukciách a prestavbách",
      "demolácie priemyselných hál a železobetónových prvkov",
      "odvoz a likvidácia stavebnej sute s ohľadom na životné prostredie",
    ],
    sections: [
      {
        title: "Interiérové búracie práce",
        body:
          "Pokročilá technika a technológie zaručujú bezpečné vykonanie búracích prác s dôrazom na obmedzenie prašnosti a ochranu okolia.",
      },
      {
        title: "Demoličné práce",
        bullets: [
          "priemyselné areály",
          "priemyselné haly",
          "betónové a železobetónové prvky",
          "murované stavby v ľubovoľnom rozsahu",
          "práce bez zbytočného šírenia prachu a sute",
        ],
      },
      {
        title: "Likvidácia a logistika",
        body:
          "Súčasťou búracích prác je odvoz a ekologická likvidácia stavebnej sute vrátane prípravy priestorov na ďalšiu etapu stavby alebo rekonštrukcie.",
      },
    ],
  },
];

export const referenceProjects: ReferenceProject[] = [
  {
    slug: "bytovy-dom-hrnciarska-humenne",
    title: "Bytový dom Hrnčiarska",
    location: "Humenné",
    yearLabel: "2024",
    summary: "",
    tags: ["bytový dom", "zateplenie", "rekonštrukcia", "Humenné"],
    coverImage: "/BD_Humenné_Hrnčiarska/68a24c09-9cdf-465a-a235-fe482dff9c72.JPG",
    gallery: [
      { src: "/BD_Humenné_Hrnčiarska/68a24c09-9cdf-465a-a235-fe482dff9c72.JPG", alt: "Bytový dom Hrnčiarska - zrekonštruovaný objekt" },
      { src: "/BD_Humenné_Hrnčiarska/0ef7e5d0-c993-45dc-a047-256c4df3eadf.JPG", alt: "Bytový dom Hrnčiarska - pohľad na fasádu" },
      { src: "/BD_Humenné_Hrnčiarska/3dc1680f-14c2-4fe6-b8c0-4af12a24dcb0.JPG", alt: "Bytový dom Hrnčiarska - detail vchodu" },
      { src: "/BD_Humenné_Hrnčiarska/59fc64a6-249a-46ba-8b96-d6cafebffd98.JPG", alt: "Bytový dom Hrnčiarska - zatepľovacie práce" },
      { src: "/BD_Humenné_Hrnčiarska/718231de-000f-4326-9e13-2711bba935f4.JPG", alt: "Bytový dom Hrnčiarska - pohľad zo zadnej strany" },
      { src: "/BD_Humenné_Hrnčiarska/74f754c0-f0ab-401a-b79c-22c45a4a1b5b.JPG", alt: "Bytový dom Hrnčiarska - detail balkónov" },
      { src: "/BD_Humenné_Hrnčiarska/9abcb430-449a-4eea-9117-7056fab8bf0c.JPG", alt: "Bytový dom Hrnčiarska - dokončená fasáda" },
      { src: "/BD_Humenné_Hrnčiarska/ab362735-7e60-4241-bfe7-0dd1fca9edbe.JPG", alt: "Bytový dom Hrnčiarska - pohľad z boku" },
      { src: "/BD_Humenné_Hrnčiarska/ac38c2fe-01b2-48b8-b2e9-a5ba29253723.JPG", alt: "Bytový dom Hrnčiarska - celkový pohľad" },
      { src: "/BD_Humenné_Hrnčiarska/bb8814b6-6547-476c-b6a4-9afd5804bafc.JPG", alt: "Bytový dom Hrnčiarska - rekonštrukcia sokla" },
      { src: "/BD_Humenné_Hrnčiarska/dba18922-48cc-4e45-a85b-84c271700c5d.JPG", alt: "Bytový dom Hrnčiarska - detailný pohľad na roh" },
      { src: "/BD_Humenné_Hrnčiarska/f492a02d-eaa5-46c2-a855-13deefe3971a.JPG", alt: "Bytový dom Hrnčiarska - zrekonštruované priečelie" }
    ],
    featured: true
  },
  {
    slug: "bytovy-dom-strazske",
    title: "Bytový dom Strážske",
    location: "Strážske",
    yearLabel: "2023",
    summary: "",
    tags: ["bytový dom", "rekonštrukcia", "zateplenie", "Strážske"],
    coverImage: "/Bytový_dom_strážske/a57276fd-fff1-4a44-81be-95dba500e0b0.JPG",
    gallery: [
      { src: "/Bytový_dom_strážske/a57276fd-fff1-4a44-81be-95dba500e0b0.JPG", alt: "Bytový dom Strážske - hotová fasáda" },
      { src: "/Bytový_dom_strážske/4092b5a5-34f6-4a60-a284-2afccc924b20.JPG", alt: "Bytový dom Strážske - stavebné úpravy" },
      { src: "/Bytový_dom_strážske/42291892-0eb3-4162-bca3-c72443828649.JPG", alt: "Bytový dom Strážske - priebeh rekonštrukcie" },
      { src: "/Bytový_dom_strážske/43a99c7f-eb44-41bd-86f8-753e259c9d6a.JPG", alt: "Bytový dom Strážske - dokončovanie interiéru" },
      { src: "/Bytový_dom_strážske/553ff555-3e92-4079-9bf1-dcda7f648cf3.JPG", alt: "Bytový dom Strážske - omietkárske práce" },
      { src: "/Bytový_dom_strážske/72fb2c8c-010a-44b3-b173-c5bc118a6aee.JPG", alt: "Bytový dom Strážske - pohľad z ulice" },
      { src: "/Bytový_dom_strážske/7ab2b463-f2dd-48e3-885a-cf9f1d6c984c.JPG", alt: "Bytový dom Strážske - nová fasáda" },
      { src: "/Bytový_dom_strážske/80886eb0-feed-4bd3-9ca7-b17b48458cff.JPG", alt: "Bytový dom Strážske - zrekonštruovaný objekt" },
      { src: "/Bytový_dom_strážske/867b1c79-7769-4d50-a1cd-006c595e703e.JPG", alt: "Bytový dom Strážske - rekonštrukcia vchodu" },
      { src: "/Bytový_dom_strážske/c4a35355-108b-47b9-bdab-18ac4e50950b.JPG", alt: "Bytový dom Strážske - modernizovaný vzhľad" },
      { src: "/Bytový_dom_strážske/d6ed5827-2898-4617-917d-3cc43128d0f1.JPG", alt: "Bytový dom Strážske - zatepľovanie" },
      { src: "/Bytový_dom_strážske/ec02c7c1-bc79-4451-9729-57e404e5d34f.JPG", alt: "Bytový dom Strážske - pohľad z bočnej strany" },
      { src: "/Bytový_dom_strážske/faea43ae-b416-4422-aeae-92d4b11d50eb.JPG", alt: "Bytový dom Strážske - hotová realizácia" }
    ],
    featured: true
  },
  {
    slug: "mestsky-urad-humenne",
    title: "Mestský úrad Humenné",
    location: "Humenné",
    yearLabel: "2024",
    summary: "",
    tags: ["občianska stavba", "rekonštrukcia", "stavebné práce", "Humenné"],
    coverImage: "/Mestský_Úrad_Humenné/cd0599b8-d201-495f-8100-579f5ddc52b7.JPG",
    gallery: [
      { src: "/Mestský_Úrad_Humenné/cd0599b8-d201-495f-8100-579f5ddc52b7.JPG", alt: "Mestský úrad Humenné - celkový pohľad po modernizácii" },
      { src: "/Mestský_Úrad_Humenné/12ca1d6b-12d8-46d5-aee2-624aafa79155.JPG", alt: "Mestský úrad Humenné - rekonštrukcia interiéru" },
      { src: "/Mestský_Úrad_Humenné/15e5800b-6b44-41b2-ade0-bfc814419daf.JPG", alt: "Mestský úrad Humenné - stavebné úpravy chodieb" },
      { src: "/Mestský_Úrad_Humenné/16650a54-a18e-4a5b-9505-eec0a8f6615c.JPG", alt: "Mestský úrad Humenné - pokládka dlažby" },
      { src: "/Mestský_Úrad_Humenné/31c73bfe-835f-4294-a7fa-78e4906625af.JPG", alt: "Mestský úrad Humenné - omietky a stierky" },
      { src: "/Mestský_Úrad_Humenné/330fa93c-5ebd-45bb-87be-7dbe91be8357.JPG", alt: "Mestský úrad Humenné - montáž sadrokartónov" },
      { src: "/Mestský_Úrad_Humenné/3d13d233-4422-4578-ac27-3aeb7d68bc09.JPG", alt: "Mestský úrad Humenné - práce na vnútornej inštalácii" },
      { src: "/Mestský_Úrad_Humenné/4dcac7a3-5722-4225-b691-6e867100fb9d.JPG", alt: "Mestský úrad Humenné - modernizovaná kancelária" },
      { src: "/Mestský_Úrad_Humenné/73c97754-713b-41ff-a724-85d853a8a732.JPG", alt: "Mestský úrad Humenné - dokončené priestory" },
      { src: "/Mestský_Úrad_Humenné/8cadf14b-6f73-40eb-865d-cb701b76dd1b.JPG", alt: "Mestský úrad Humenné - rekonštrukcia vchodu" },
      { src: "/Mestský_Úrad_Humenné/968e5c7f-9e42-46f9-8237-5701e4ff601a.JPG", alt: "Mestský úrad Humenné - detaily obkladov" },
      { src: "/Mestský_Úrad_Humenné/b610bbfe-fb77-4500-a0a3-0806b72dd98b.JPG", alt: "Mestský úrad Humenné - obnova stien" },
      { src: "/Mestský_Úrad_Humenné/bee4818e-513d-4ab8-9b6f-92663428f70b.JPG", alt: "Mestský úrad Humenné - stavebné detaily" }
    ],
    featured: true
  },
  {
    slug: "predajna-cba-kamenak",
    title: "Predajňa CBA Kameňák",
    location: "Humenné - Kameňák",
    yearLabel: "2023",
    summary: "",
    tags: ["komerčný objekt", "rekonštrukcia", "stavebné práce", "Humenné"],
    coverImage: "/Predajnňa_CBA_Kameňák/3d7969de-7e48-4a56-905d-e7bc89cb039d.JPG",
    gallery: [
      { src: "/Predajnňa_CBA_Kameňák/3d7969de-7e48-4a56-905d-e7bc89cb039d.JPG", alt: "CBA Kameňák - omietky v skladoch" },
      { src: "/Predajnňa_CBA_Kameňák/00053d76-8b9a-412d-88ff-4aa3b3afea73.JPG", alt: "CBA Kameňák - stavebná pripravenosť" },
      { src: "/Predajnňa_CBA_Kameňák/12a1daac-f58c-4309-bad6-697604329fc1.JPG", alt: "CBA Kameňák - búracie práce a príprava" },
      { src: "/Predajnňa_CBA_Kameňák/33354b69-6552-4b1e-a3e3-10b7e8a1a009.JPG", alt: "CBA Kameňák - realizácia interiéru" },
      { src: "/Predajnňa_CBA_Kameňák/38c07ae1-004d-4bbe-b93c-63fdbc6d6896.JPG", alt: "CBA Kameňák - potery a podlahy" },
      { src: "/Predajnňa_CBA_Kameňák/3c6dc5fb-e997-42ae-9259-e46aaee0aa14.JPG", alt: "CBA Kameňák - elektroinštalácia" },
      { src: "/Predajnňa_CBA_Kameňák/5b789f68-13a6-47ec-96c5-c818cafd7276.JPG", alt: "CBA Kameňák - zateplenie fasády" },
      { src: "/Predajnňa_CBA_Kameňák/625aef04-4432-4490-ad43-369ca65cc720.JPG", alt: "CBA Kameňák - príprava spevnených plôch" },
      { src: "/Predajnňa_CBA_Kameňák/6b09d406-ba5d-4bb3-a770-1475f8a11bae.JPG", alt: "CBA Kameňák - oplotenie a okolie" },
      { src: "/Predajnňa_CBA_Kameňák/704683c3-d8a0-408c-a6cc-1d766866e616.JPG", alt: "CBA Kameňák - dokončovacie interiérové detaily" },
      { src: "/Predajnňa_CBA_Kameňák/b9831e1e-785b-4b81-8514-6610e0953409.JPG", alt: "CBA Kameňák - hotová prevádzka" },
      { src: "/Predajnňa_CBA_Kameňák/c1e2027b-8f3e-45bb-ad86-1f9d97a8825f.JPG", alt: "CBA Kameňák - spevnená plocha a parking" },
      { src: "/Predajnňa_CBA_Kameňák/ce179066-737e-4f51-8f01-3dc05299e38f.JPG", alt: "CBA Kameňák - celkový exteriér" }
    ],
    featured: true
  },
  {
    slug: "rodinny-dom-dubnik",
    title: "Rodinný dom, Dubník",
    location: "Humenné - Dubník",
    yearLabel: "2024",
    summary: "",
    tags: ["rodinný dom", "novostavba", "stavebné práce", "Humenné"],
    coverImage: "/RD_Humenné_Dubník/fd1fd40c-2d9f-4063-ad50-a6a16b42e75b.JPG",
    gallery: [
      { src: "/RD_Humenné_Dubník/fd1fd40c-2d9f-4063-ad50-a6a16b42e75b.JPG", alt: "RD Dubník - priebeh stavebných prác" },
      { src: "/RD_Humenné_Dubník/3c0a394e-90b5-4916-a206-5e2ab540f743.JPG", alt: "RD Dubník - stavebný pozemok a výkopy" },
      { src: "/RD_Humenné_Dubník/cd333ad4-4477-409e-9650-9afe8969f610.JPG", alt: "RD Dubník - murovanie hrubej stavby" }
    ],
    featured: true
  }
];

export const certificates: Certificate[] = [
  {
    slug: "certifikat-1",
    title: "Certifikát 1",
    summary: "Odborný certifikát spoločnosti BSL TRADING.",
    previewImage: certificateImage("cer1.jpg", "2020/07"),
    pdfUrl: certificatePdf("certifikat1.pdf", "2020/07"),
  },
  {
    slug: "certifikat-2",
    title: "Certifikát 2",
    summary: "Odborný certifikát spoločnosti BSL TRADING.",
    previewImage: certificateImage("cer2.jpg", "2020/07"),
    pdfUrl: certificatePdf("certifikat2.pdf", "2020/07"),
  },
  {
    slug: "certifikat-3",
    title: "Certifikát 3",
    summary: "Odborný certifikát spoločnosti BSL TRADING.",
    previewImage: certificateImage("cer3.jpg", "2020/07"),
    pdfUrl: certificatePdf("certifikat3.pdf", "2020/07"),
  },
  {
    slug: "certifikat-4",
    title: "Certifikát 4",
    summary: "Odborný certifikát spoločnosti BSL TRADING.",
    previewImage: certificateImage("cer4.jpg", "2020/07"),
    pdfUrl: certificatePdf("certifikat4.pdf", "2020/07"),
  },
  {
    slug: "certifikat-5",
    title: "Certifikát 5",
    summary: "Odborný certifikát spoločnosti BSL TRADING.",
    previewImage: certificateImage("cer5.jpg", "2020/07"),
    pdfUrl: certificatePdf("certifikat5.pdf", "2020/07"),
  },
  {
    slug: "licencia-etics",
    title: "Licencia ETICS",
    summary: "Licencia ETICS pre zatepľovacie systémy.",
    previewImage: certificateImage("etics.jpg", "2020/07"),
    pdfUrl: certificatePdf("Licencia_ETICS.PDF", "2020/07"),
  },
  {
    slug: "certifikat-2025-1",
    title: "Certifikát 2025 / 1",
    summary: "Certifikát spoločnosti BSL TRADING z roku 2025.",
    previewImage: certificateImage("1_page-0001.jpg", "2025/02"),
    pdfUrl: certificatePdf("1.pdf", "2025/02"),
  },
  {
    slug: "certifikat-2025-2",
    title: "Certifikát 2025 / 2",
    summary: "Certifikát spoločnosti BSL TRADING z roku 2025.",
    previewImage: certificateImage("2_page-0001.jpg", "2025/02"),
    pdfUrl: certificatePdf("2.pdf", "2025/02"),
  },
  {
    slug: "certifikat-2025-3",
    title: "Certifikát 2025 / 3",
    summary: "Certifikát spoločnosti BSL TRADING z roku 2025.",
    previewImage: certificateImage("3_page-0001.jpg", "2025/02"),
    pdfUrl: certificatePdf("3.pdf", "2025/02"),
  },
  {
    slug: "certifikat-cenecon",
    title: "CENECON certifikát",
    summary: "Certifikát spoločnosti BSL TRADING s priloženým PDF dokumentom.",
    previewImage: certificateImage("cert-cenecon.jpg", "2025/05"),
    pdfUrl: certificatePdf("Certifikat.pdf", "2025/05"),
  },
  {
    slug: "certifikat-etics-inspekcia",
    title: "Certifikát ETICS inšpekcia",
    summary: "ETICS certifikát pre odbornú inšpekciu a realizáciu systémov.",
    previewImage: certificateImage("inspCertifikat.jpg", "2025/12"),
    pdfUrl: certificatePdf("F-06-17-04-25-certifikat-ETICS-inspekcia.pdf", "2025/12"),
  },
  {
    slug: "licencia-etics-v",
    title: "Licencia na základe inšpekcie ETICS V",
    summary: "Doplňujúca licencia k ETICS dokumentom spoločnosti.",
    previewImage: certificateImage("licenciaETICs.jpg", "2025/12"),
    pdfUrl: certificatePdf("A-Licencia-na-zaklade-inspekcie-ETICs-V.pdf", "2025/12"),
  },
];

export const apartmentProject: ApartmentProject = {
  title: "Byty Strážske",
  intro:
    "Projekt Byty Strážske predstavuje modernizované byty v Strážskom s kompletnou obrazovou a video prezentáciou.",
  summary:
    "Ponuka projektu zahŕňa predajné odkazy, videoprehliadky, pôdorysy, exteriéry a interiéry bytov.",
  saleLinks: [
    {
      label: "Predaj byt H",
      href: "https://www.megarealitka.sk/nehnutelnost/3106-predaj-moderne-zrekonstruovanych-bytov-v-strazskom-byt-h",
    },
    {
      label: "Predaj byt E",
      href: "https://www.megarealitka.sk/nehnutelnost/3109-predaj-moderne-zrekonstruovanych-bytov-v-strazskom-byt-e",
    },
    {
      label: "Predaj byt I",
      href: "https://www.megarealitka.sk/nehnutelnost/3108-predaj-moderne-zrekonstruovanych-bytov-v-strazskom-byt-i",
    },
  ],
  videos: [
    {
      title: "Predaj byt H",
      src: apartmentVideo("VID-20230727-WA0001.mp4"),
    },
    {
      title: "Predaj byt E",
      src: apartmentVideo("VID-20230727-WA0002.mp4"),
    },
    {
      title: "Predaj byt I",
      src: apartmentVideo("VID-20230727-WA0003.mp4"),
    },
  ],
  galleries: [
    {
      title: "Exteriéry projektu",
      description: "Výber exteriérových záberov projektu.",
      items: Array.from({ length: 15 }, (_, index) => ({
        src: apartmentImage(`Exterier_${index + 1}.png`),
        alt: `Exteriér projektu Byty Strážske ${index + 1}`,
      })),
    },
    {
      title: "Pôdorysy",
      description: "Pôdorysy dvoch bytov a ich variantov.",
      items: [
        { src: apartmentImage("BD_1.png", "07"), alt: "Byt 1 – náhľad" },
        { src: apartmentImage("BD_2.png", "07"), alt: "Byt 2 – náhľad" },
        { src: apartmentImage("Podorys-Byt-1.png"), alt: "Pôdorys bytu 1" },
        { src: apartmentImage("Podorys-Byt-1_000.png"), alt: "Pôdorys bytu 1 – variant 1" },
        { src: apartmentImage("Podorys-Byt-1_001.png"), alt: "Pôdorys bytu 1 – variant 2" },
        { src: apartmentImage("Podorys-Byt-1_002.png"), alt: "Pôdorys bytu 1 – variant 3" },
        { src: apartmentImage("Podorys-Byt-2.png"), alt: "Pôdorys bytu 2" },
        { src: apartmentImage("Podorys-Byt-2_000.png"), alt: "Pôdorys bytu 2 – variant 1" },
        { src: apartmentImage("Podorys-Byt-2_001.png"), alt: "Pôdorys bytu 2 – variant 2" },
      ],
    },
    {
      title: "Interiér – byt 1",
      items: [
        { src: apartmentImage("1_Chodba.png"), alt: "Byt 1 – chodba" },
        { src: apartmentImage("1_Izba_1.png"), alt: "Byt 1 – izba 1" },
        { src: apartmentImage("1_Izba_2.png"), alt: "Byt 1 – izba 2" },
        { src: apartmentImage("1_Kuchyna_1.png"), alt: "Byt 1 – kuchyňa 1" },
        { src: apartmentImage("1_Kuchyna_2.png"), alt: "Byt 1 – kuchyňa 2" },
        { src: apartmentImage("1_Kupelna_1.png"), alt: "Byt 1 – kúpeľňa 1" },
        { src: apartmentImage("1_Kupelna_2.png"), alt: "Byt 1 – kúpeľňa 2" },
        { src: apartmentImage("1_Obyvacia-izba_1.png"), alt: "Byt 1 – obývacia izba 1" },
        { src: apartmentImage("1_Obyvacia-izba_2.png"), alt: "Byt 1 – obývacia izba 2" },
        { src: apartmentImage("1_Pracovna.png"), alt: "Byt 1 – pracovňa" },
        { src: apartmentImage("1_Spalna_1.png"), alt: "Byt 1 – spálňa 1" },
        { src: apartmentImage("1_Spalna_2.png"), alt: "Byt 1 – spálňa 2" },
        { src: apartmentImage("1_WC.png"), alt: "Byt 1 – WC" },
      ],
    },
    {
      title: "Interiér – byt 2",
      items: [
        { src: apartmentImage("2_Chodba.png"), alt: "Byt 2 – chodba" },
        { src: apartmentImage("2_Kuchyna_1.png"), alt: "Byt 2 – kuchyňa" },
        { src: apartmentImage("2_Kupelna_1.png"), alt: "Byt 2 – kúpeľňa 1" },
        { src: apartmentImage("2_Kupelna_2.png"), alt: "Byt 2 – kúpeľňa 2" },
        { src: apartmentImage("2_Obyvacia-izba_1.png"), alt: "Byt 2 – obývacia izba 1" },
        { src: apartmentImage("2_Obyvacia-izba_2.png"), alt: "Byt 2 – obývacia izba 2" },
        { src: apartmentImage("2_Spalna_1.png"), alt: "Byt 2 – spálňa 1" },
        { src: apartmentImage("2_Spalna_2.png"), alt: "Byt 2 – spálňa 2" },
        { src: apartmentImage("2_WC.png"), alt: "Byt 2 – WC" },
      ],
    },
  ],
};

export const featuredServices = services.slice(0, 6);
export const featuredReferences = referenceProjects.filter((project) => project.featured).slice(0, 6);

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getReferenceProject(slug: string) {
  return referenceProjects.find((project) => project.slug === slug);
}
