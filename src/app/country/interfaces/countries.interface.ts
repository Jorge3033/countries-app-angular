export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc?: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: Gini;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Gini {
  '2018'?: number;
  '2017'?: number;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Translations {
  ara: Spa;
  bre: Spa;
  ces: Spa;
  cym: Spa;
  deu: Spa;
  est: Spa;
  fin: Spa;
  fra: Spa;
  hrv: Spa;
  hun: Spa;
  ita: Spa;
  jpn: Spa;
  kor: Spa;
  nld: Spa;
  per: Spa;
  pol: Spa;
  por: Spa;
  rus: Spa;
  slk: Spa;
  spa: Spa;
  swe: Spa;
  tur: Spa;
  urd: Spa;
  zho: Spa;
}

export interface Languages {
  spa?: string;
  eng?: string;
  swa?: string;
  ara?: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Currencies {
  MXN?: MXN;
  TZS?: MXN;
  USD?: MXN;
  AED?: MXN;
  GBP?: MXN;
}

export interface MXN {
  name: string;
  symbol: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  spa?: Spa;
  eng?: Spa;
  swa?: Spa;
  ara?: Spa;
}

export interface Spa {
  official: string;
  common: string;
}
