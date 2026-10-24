export const locales = ['hu', 'sr'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'hu'

export const localeMeta: Record<Locale, { htmlLang: string; ogLocale: string; short: string; name: string }> = {
  hu: { htmlLang: 'hu', ogLocale: 'hu_HU', short: 'HU', name: 'Magyar' },
  sr: { htmlLang: 'sr-Latn', ogLocale: 'sr_RS', short: 'SRB', name: 'Srpski' },
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

const hu = {
  meta: {
    title: 'Happy Játszóház Zenta – Privát játszóház és rendezvényterem',
    description:
      'Bérelhető játszóház és különálló rendezvénypince Zentán szülinapokra, bulikra, elsőáldozásra és családi összejövetelekre. Játszóvár, trambulin, labdatenger, konyha és Happy Pince.',
  },
  brand: {
    name: 'Happy Játszóház',
    fullName: 'Happy Játszóház Zenta',
    logoSubtitle: 'Játszóház',
    logoAria: 'Happy Játszóház – vissza az oldal tetejére',
    address: 'Ađanska 5, 24400 Senta (Zenta)',
  },
  nav: {
    links: [
      { href: '#rolunk', label: 'Rólunk' },
      { href: '#galeria', label: 'Galéria' },
      { href: '#foglalas', label: 'Foglalás' },
    ],
    mainAria: 'Fő navigáció',
    mobileAria: 'Mobil navigáció',
    booking: 'Időpontfoglalás:',
    callAria: 'Hívás:',
    openMenu: 'Menü megnyitása',
    closeMenu: 'Menü bezárása',
    languageAria: 'Nyelv kiválasztása',
  },
  hero: {
    badge: 'Szülinapok, bulik, családi ünnepek',
    titleStart: 'Happy Játszóház Zenta –',
    titleHighlight: 'Ahol a játék és az ünneplés otthonra talál',
    intro: {
      before: 'Két külön bérelhető helyiség: a',
      playhouse: 'játszóház',
      middle: 'a kicsiknek, a',
      cellar: 'Happy Pince',
      after: 'a nagy bulikhoz. Születésnap, elsőáldozás vagy családi összejövetel – nálunk mindenre van hely.',
    },
    ctaPrimary: 'Időpontot foglalok',
    ctaSecondary: 'Hogyan működik?',
    imageAlt: 'A Happy Játszóház színes, tiszta játszótere játszóvárral és csúszdákkal',
    cardTitle: '2 külön helyiség',
    cardText: 'Játszóház + Happy Pince',
    ownPhotoAlt: 'Happy Játszóház – saját fotó',
    slideAria: 'Kép',
  },
  concept: {
    eyebrow: 'Rólunk',
    title: 'Kicsiknek és nagyoknak is tökéletes helyszín',
    text: 'Nálunk a fiatalok és az idősebbek is megtalálják a tökéletes helyet a kikapcsolódásra és a szórakozásra. Két külön bérelhető helyiség – válaszd azt, amelyik jobban illik az alkalomhoz!',
    occasions: ['Születésnapok', 'Privát bulik', 'Elsőáldozás, keresztelő', 'Családi összejövetelek'],
    seePhotos: 'Fotók és videók',
    spaces: [
      {
        eyebrow: '1. helyiség',
        title: 'Játszóház',
        text: 'Itt a kisebbeké a főszerep! A szülők egy légtérben, kényelmesen beszélgetve figyelhetik a gyerekeket – így a felügyelet is gyerekjáték.',
        items: ['Hatalmas játszóvár', 'Trambulin', 'Labdatenger', 'Rengeteg játék', 'Saját konyha a vendéglátáshoz'],
      },
      {
        eyebrow: '2. helyiség',
        title: 'Happy Pince',
        text: 'Teljesen különálló pincehelyiség, amelyet kifejezetten rendezvényekre terveztünk – szülinapokra és privát bulikra a haverokkal.',
        items: ['Óriási hangfalak', 'Látványos fénytechnika', 'Zártkörű tér', 'Nem kell a szomszédok miatt aggódni'],
      },
    ],
    highlights: [
      {
        title: 'Egy légtérben a gyerekekkel',
        text: 'A szülők kényelmesen beszélgethetnek, miközben végig látják a játszó gyerekeket.',
      },
      {
        title: 'Konyha a játszóházban',
        text: 'Felszerelt konyha áll rendelkezésre, így a torta, a falatkák és az italok is kéznél vannak.',
      },
      {
    title: 'Kinti terasz és szórakozás',
    text: 'Az udvaron hinta és csúszda várja a kicsiket. Vár titeket még: ping-pong asztal, csocsó, trambulin, és felár ellenében mászófal is foglalható. A teraszon található asztalok és székek szép időben tökéletes helyszínt biztosítanak a szabadtéri ünneplésekhez.',
      },
    ],
  },
  perks: {
    srTitle: 'Amiért nálunk ünnepelni a legkönnyebb',
    imageAlt: 'Gyerekek másznak a kinti mászófalon',
    badge: 'Extra program',
    title: 'Mászófal',
    text: 'Felár ellenében mászófalat is biztosítunk az udvaron – a gyerekek számára ez szokott lenni a buli fénypontja, igazi óriási élmény! Foglaláskor jelezd, és mi mindent előkészítünk.',
    cta: 'Kérem a mászófalat is',
    seeReal: 'Így néz ki nálunk',
    cleaningBadge: 'A takarítással mi foglalkozunk',
    cleaningTitle: 'Ti csak bulizzatok!',
    cleaningText:
      'Érkezéskor maximális tisztaság vár, utánatok pedig mi rendet rakunk – csak az ünneplésre kell koncentrálnotok.',
    cleaningPoints: ['Ragyogó tisztaság fogad érkezéskor', 'A buli után mi takarítunk'],
  },
  gallery: {
    eyebrow: 'Galéria',
    title: 'Nézz körül nálunk!',
    text: 'Három helyszín, egy felhőtlen nap. Válaszd ki, melyiket néznéd meg közelebbről – rákattintva a saját fotóinkat és videóinkat is láthatod.',
    honestTitle: 'Valódi képek, filter nélkül',
    honestText:
      'A borítók csak hangulatképek – mögöttük viszont a saját fotóink és videóink vannak, hogy pontosan tudd, mi vár rátok.',
    open: 'Képek és videók',
    soon: 'Képek hamarosan',
    photos: 'fotó',
    videos: 'videó',
    areas: {
      jatszohaz: {
        title: 'Játszóház',
        label: 'Fel a várba!',
        text: 'Játszóvár, trambulin, labdatenger és saját konyha – a szülők egy légtérben a gyerekekkel.',
        alt: 'Színes, puha játszóvár csúszdával a játszóházban',
      },
      pince: {
        title: 'Happy Pince',
        label: 'Koccintsunk!',
        text: 'Különálló pincehelyiség óriási hangfalakkal és fénytechnikával a nagy bulikhoz.',
        alt: 'Boltíves pince megterített hosszú asztallal és fényfüzérrel',
      },
      terasz: {
        title: 'Kinti terasz',
        label: 'Irány a napsütés!',
        text: 'Mászófal, ping-pong, csocsó, hinta és csúszda – asztalokkal, székekkel a szabadtéri ünnepléshez.',
        alt: 'Napos kinti terasz asztalokkal, ping-pong asztallal és hintával',
      },
    },
    viewer: {
      dialogLabel: 'Képek és videók',
      tabsAria: 'Helyszín kiválasztása',
      close: 'Bezárás',
      prev: 'Előző',
      next: 'Következő',
      thumbsAria: 'Bélyegképek',
      photoAlt: 'valós fotó',
      video: 'Videó',
      empty: 'Ide hamarosan feltöltjük a saját képeinket és videóinkat.',
    },
  },
  booking: {
    eyebrow: 'Foglalás',
    title: 'Foglalj időpontot telefonon!',
    text: 'Hívj minket, és egyeztessük a részleteket: melyik helyiséget szeretnéd (játszóház vagy Happy Pince), mikorra, és hány fővel érkeztek, esetleg szeretnétek-e mászófalazni is.',
    tapToCall: 'Koppints a híváshoz',
    steps: [
      'Hívj fel minket telefonon',
      'Válaszd ki a helyiséget és az időpontot',
      'Érkezzetek – mi már várunk titeket!',
    ],
    addressTitle: 'Címünk',
    mapAria: 'Útvonaltervezés a Google Térképen:',
    directions: 'Útvonaltervezés',
  },
  footer: {
    rights: 'Minden jog fenntartva.',
  },
}

export type Dictionary = typeof hu

const sr: Dictionary = {
  meta: {
    title: 'Happy Igraonica Senta – Privatna igraonica i sala za proslave',
    description:
      'Igraonica i poseban podrumski prostor za proslave u Senti – za rođendane, žurke, prvu pričest i porodična okupljanja. Dvorac za igru, trambolina, bazen s lopticama, kuhinja i Happy Podrum.',
  },
  brand: {
    name: 'Happy Igraonica',
    fullName: 'Happy Igraonica Senta',
    logoSubtitle: 'Igraonica',
    logoAria: 'Happy Igraonica – nazad na vrh stranice',
    address: 'Ađanska 5, 24400 Senta',
  },
  nav: {
    links: [
      { href: '#rolunk', label: 'O nama' },
      { href: '#galeria', label: 'Galerija' },
      { href: '#foglalas', label: 'Rezervacija' },
    ],
    mainAria: 'Glavna navigacija',
    mobileAria: 'Mobilna navigacija',
    booking: 'Rezervacija termina:',
    callAria: 'Pozovi:',
    openMenu: 'Otvori meni',
    closeMenu: 'Zatvori meni',
    languageAria: 'Izbor jezika',
  },
  hero: {
    badge: 'Rođendani, žurke, porodična slavlja',
    titleStart: 'Happy Igraonica Senta –',
    titleHighlight: 'Mesto gde igra i slavlje nalaze svoj dom',
    intro: {
      before: 'Dva odvojena prostora za iznajmljivanje:',
      playhouse: 'igraonica',
      middle: 'za mališane i',
      cellar: 'Happy Podrum',
      after: 'za velike žurke. Rođendan, prva pričest ili porodično okupljanje – kod nas ima mesta za sve.',
    },
    ctaPrimary: 'Rezervišem termin',
    ctaSecondary: 'Kako funkcioniše?',
    imageAlt: 'Šarena i čista igraonica Happy sa dvorcem za igru i toboganima',
    cardTitle: '2 odvojena prostora',
    cardText: 'Igraonica + Happy Podrum',
    ownPhotoAlt: 'Happy Igraonica – naša fotografija',
    slideAria: 'Slika',
  },
  concept: {
    eyebrow: 'O nama',
    title: 'Savršeno mesto i za male i za velike',
    text: 'Kod nas i mlađi i stariji pronalaze savršeno mesto za opuštanje i zabavu. Dva odvojena prostora za iznajmljivanje – izaberi onaj koji najbolje odgovara prilici!',
    occasions: ['Rođendani', 'Privatne žurke', 'Prva pričest, krštenje', 'Porodična okupljanja'],
    seePhotos: 'Slike i snimci',
    spaces: [
      {
        eyebrow: '1. prostor',
        title: 'Igraonica',
        text: 'Ovde su mališani u glavnoj ulozi! Roditelji u istom prostoru mogu opušteno da ćaskaju i prate decu – tako je i čuvanje dece prava dečja igra.',
        items: [
          'Ogroman dvorac za igru',
          'Trambolina',
          'Bazen s lopticama',
          'Mnoštvo igračaka',
          'Sopstvena kuhinja za posluženje',
        ],
      },
      {
        eyebrow: '2. prostor',
        title: 'Happy Podrum',
        text: 'Potpuno odvojen podrumski prostor, osmišljen posebno za proslave – za rođendane i privatne žurke sa društvom.',
        items: ['Ogromni zvučnici', 'Atraktivna svetlosna tehnika', 'Zatvoren, privatan prostor', 'Bez brige zbog komšija'],
      },
    ],
    highlights: [
      {
        title: 'U istom prostoru sa decom',
        text: 'Roditelji mogu opušteno da razgovaraju, a da sve vreme vide decu dok se igraju.',
      },
      {
        title: 'Kuhinja u igraonici',
        text: 'Na raspolaganju je opremljena kuhinja, tako da su torta, grickalice i pića uvek pri ruci.',
      },
      {
    title: 'Spoljna terasa i zabava',
    text: 'U dvorištu ljuljaška i tobogan čekaju najmlađe. Na raspolaganju su i sto za stoni tenis, stoni fudbal i trambolina. Za još više zabave, uz doplatu je moguće rezervisati i zid za penjanje. Stolovi i stolice na terasi, po lepom vremenu, pružaju savršeno mesto za proslave na otvorenom.',
      },
    ],
  },
  perks: {
    srTitle: 'Zašto je kod nas najlakše slaviti',
    imageAlt: 'Deca se penju na spoljnom zidu za penjanje',
    badge: 'Dodatni program',
    title: 'Zid za penjanje',
    text: 'Uz doplatu u dvorištu obezbeđujemo i zid za penjanje – za decu je to obično vrhunac žurke, pravi nezaboravan doživljaj! Javi nam prilikom rezervacije i sve ćemo pripremiti.',
    cta: 'Želim i zid za penjanje',
    seeReal: 'Ovako izgleda kod nas',
    cleaningBadge: 'Čišćenje prepustite nama',
    cleaningTitle: 'Vi se samo zabavljajte!',
    cleaningText:
      'Po dolasku vas čeka besprekorna čistoća, a posle vas mi sve sredimo – vi treba samo da uživate u slavlju.',
    cleaningPoints: ['Blistava čistoća po dolasku', 'Posle žurke mi čistimo'],
  },
  gallery: {
    eyebrow: 'Galerija',
    title: 'Razgledaj kod nas!',
    text: 'Tri prostora, jedan bezbrižan dan. Izaberi koji želiš da pogledaš izbliza – klikom vidiš i naše fotografije i video snimke.',
    honestTitle: 'Slike, bez filtera',
    honestText:
      'Naslovne slike samo dočaravaju atmosferu – iza njih su naše sopstvene fotografije i snimci, da tačno znaš šta vas čeka.',
    open: 'Slike i snimci',
    soon: 'Slike uskoro',
    photos: 'foto',
    videos: 'video',
    areas: {
      jatszohaz: {
        title: 'Igraonica',
        label: 'Pravo u dvorac!',
        text: 'Dvorac za igru, trambolina, bazen s lopticama i sopstvena kuhinja – roditelji u istom prostoru sa decom.',
        alt: 'Šareni mekani dvorac za igru sa toboganom u igraonici',
      },
      pince: {
        title: 'Happy Podrum',
        label: 'Nazdravimo!',
        text: 'Odvojen podrumski prostor sa ogromnim zvučnicima i svetlosnom tehnikom za velike žurke.',
        alt: 'Zasvođeni podrum sa postavljenim dugačkim stolom i svetlećim girlandama',
      },
      terasz: {
        title: 'Spoljna terasa',
        label: 'Napolje, na sunce!',
        text: 'Zid za penjanje, stoni tenis, stoni fudbal, ljuljaška i tobogan – uz stolove i stolice za slavlje na otvorenom.',
        alt: 'Sunčana spoljna terasa sa stolovima, stolom za stoni tenis i ljuljaškom',
      },
    },
    viewer: {
      dialogLabel: 'Slike i snimci',
      tabsAria: 'Izbor prostora',
      close: 'Zatvori',
      prev: 'Prethodna',
      next: 'Sledeća',
      thumbsAria: 'Sličice',
      photoAlt: 'prava fotografija',
      video: 'Video',
      empty: 'Uskoro ćemo ovde postaviti naše fotografije i video snimke.',
    },
  },
  booking: {
    eyebrow: 'Rezervacija',
    title: 'Rezerviši termin telefonom!',
    text: 'Pozovi nas i dogovorićemo detalje: koji prostor želiš (igraonicu ili Happy Podrum), za kada i koliko vas dolazi, kao i da li biste želeli i zid za penjanje.',
    tapToCall: 'Dodirni za poziv',
    steps: ['Pozovi nas telefonom', 'Izaberi prostor i termin', 'Dođite – mi vas već čekamo!'],
    addressTitle: 'Naša adresa',
    mapAria: 'Kako do nas na Google mapama:',
    directions: 'Kako do nas',
  },
  footer: {
    rights: 'Sva prava zadržana.',
  },
}

const dictionaries: Record<Locale, Dictionary> = { hu, sr }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
