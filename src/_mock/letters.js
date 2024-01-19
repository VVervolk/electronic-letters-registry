import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const letters = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  number: faker.finance.accountNumber(5),
  name: faker.person.fullName(),
  address: faker.location.streetAddress(false),
}));
