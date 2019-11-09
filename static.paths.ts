import { HEROES } from './src/app/mock-heroes';

export const ROUTES = [
  '/',
  '/dashboard',
  '/detail',
  '/heroes'
];

HEROES.forEach((hero) => {
  ROUTES.push(`/detail/${hero.id}`);
});

console.log('ROUTES', ROUTES);
