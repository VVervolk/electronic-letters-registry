import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
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
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));
