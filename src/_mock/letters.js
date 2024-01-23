import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const letters = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  unit: sample([
    'ГУНП',
    'Голосіївське',
    'Дарницьке',
    'Деснянське',
    'Дніпровське',
    'Оболонське',
    'Печерське',
    'Подільське',
    'Святошинське',
    "Солом'янське",
    'Шевченківське',
    'УП в метрополітені',
    'ВП в річковому порту',
  ]),
  number: faker.number.int({ min: 1000, max: 10000 }),
  name: faker.person.fullName(),
  address: faker.location.streetAddress(false),
  date: faker.date.anytime(),
}));
