const ADVERTS_NUMBER = 10;

const RERENDER_DELAY = 500;

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const MAX_ROOM_NUMBER = 100;
const MIN_CAPACITY = 0;

const DEFAULT_FILTER = 'any';

const ESC_KEY = {
  Escape: 'Escape',
  Esc: 'Esc',
};

const ACCURACY = 5;
const ZOOM = 12;

const DEFAULT_AVATAR_URL = 'img/muffin-grey.svg';

const AccomodationTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const MinAccomodationPrices = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const PriceCategories = {
  middle: 'middle',
  low: 'low',
  high: 'high',
};

const MaxArrangePrices = {
  maxLow: 10000,
  maxMiddle: 50000,
};

const IconSizes = {
  mainPinWidth: 52,
  mainPinHeight: 52,
  pinWidth: 40,
  pinHeight: 40,
};

const MAIN_PIN_URL = 'img/main-pin.svg';
const PIN_URL = 'img/pin.svg';

const MainCoordinates = {
  lat: 35.68553153747553,
  lng: 139.75276363268588,
};

export {
  ADVERTS_NUMBER,
  RERENDER_DELAY,
  DEFAULT_FILTER,
  ESC_KEY,
  TYPES,
  MAX_ROOM_NUMBER,
  MIN_CAPACITY,
  ACCURACY,
  ZOOM,
  DEFAULT_AVATAR_URL,
  MAIN_PIN_URL,
  PIN_URL,
  AccomodationTypes,
  MinAccomodationPrices,
  PriceCategories,
  MaxArrangePrices,
  IconSizes,
  MainCoordinates
};
