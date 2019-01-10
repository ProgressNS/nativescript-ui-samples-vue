import { TokenModel } from 'nativescript-ui-autocomplete';

export const countries = [
  'Australia',
  'Albania',
  'Austria',
  'Argentina',
  'Maldives',
  'Bulgaria',
  'Belgium',
  'Cyprus',
  'Italy',
  'Japan',
  'Denmark',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Hungary',
  'Ireland',
  'Latvia',
  'Luxembourg',
  'Macedonia',
  'Moldova',
  'Monaco',
  'Netherlands',
  'Norway',
  'Poland',
  'Romania',
  'Russia',
  'Sweden',
  'Slovenia',
  'Slovakia',
  'Turkey',
  'Ukraine',
  'Vatican City',
  'Chad',
  'China',
  'Chile'
];

export const getCountry = (i: number) => {
  const country = countries[i];
  return new TokenModel(country, null);
};

export const getCountryWithImage = (i: number) => {
  const country = countries[i];
  return new TokenModel(country, `res://${country.toLowerCase()}`);
};

export const getCountriesCount = () => {
  return countries.length;
};