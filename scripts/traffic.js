const autocannon = require('autocannon');

const host = process.argv.includes('--live')
  ? `https://layouts-playground.vercel.sh`
  : 'http://localhost:3000';

// 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟

const urls = [
  `${host}/layouts`,
  `${host}/layouts/electronics`,
  `${host}/layouts/electronics/phones`,
  `${host}/layouts/electronics/tablets`,
  `${host}/layouts/electronics/laptops`,
  `${host}/layouts/clothing`,
  `${host}/layouts/clothing/tops`,
  `${host}/layouts/clothing/shorts`,
  `${host}/layouts/clothing/shoes`,
  `${host}/layouts/books`,
  `${host}/layouts/books/fiction`,
  `${host}/layouts/books/biography`,
  `${host}/layouts/books/education`,
  `${host}/route-groups`,
  `${host}/route-groups/electronics`,
  `${host}/route-groups/electronics/phones`,
  `${host}/route-groups/electronics/tablets`,
  `${host}/route-groups/electronics/laptops`,
  `${host}/route-groups/clothing`,
  `${host}/route-groups/clothing/tops`,
  `${host}/route-groups/clothing/shorts`,
  `${host}/route-groups/clothing/shoes`,
  `${host}/route-groups/books`,
  `${host}/route-groups/books/fiction`,
  `${host}/route-groups/books/biography`,
  `${host}/route-groups/books/education`,
  `${host}/route-groups/checkout`,
  `${host}/route-groups/blog`,
  `${host}/loading`,
  `${host}/loading/electronics`,
  `${host}/loading/clothing`,
  `${host}/loading/books`,
  `${host}/error`,
  `${host}/error/electronics`,
  `${host}/error/electronics/phones`,
  `${host}/error/electronics/tablets`,
  `${host}/error/electronics/laptops`,
  `${host}/error/clothing`,
  `${host}/error/clothing/tops`,
  `${host}/error/clothing/shorts`,
  `${host}/error/clothing/shoes`,
  `${host}/error/books`,
  `${host}/error/books/fiction`,
  `${host}/error/books/biography`,
  `${host}/error/books/education`,
  `${host}/hooks`,
  `${host}/hooks/electronics`,
  `${host}/hooks/electronics/phones`,
  `${host}/hooks/electronics/tablets`,
  `${host}/hooks/electronics/laptops`,
  `${host}/hooks/clothing`,
  `${host}/hooks/clothing/tops`,
  `${host}/hooks/clothing/shorts`,
  `${host}/hooks/clothing/shoes`,
  `${host}/hooks/books`,
  `${host}/hooks/books/fiction`,
  `${host}/hooks/books/biography`,
  `${host}/hooks/books/education`,
  `${host}/context`,
  `${host}/context/electronics`,
  `${host}/context/electronics/phones`,
  `${host}/context/electronics/tablets`,
  `${host}/context/electronics/laptops`,
  `${host}/context/clothing`,
  `${host}/context/clothing/tops`,
  `${host}/context/clothing/shorts`,
  `${host}/context/clothing/shoes`,
  `${host}/context/books`,
  `${host}/context/books/fiction`,
  `${host}/context/books/biography`,
  `${host}/context/books/education`,
  `${host}/styling`,
  `${host}/styling/global-css`,
  `${host}/styling/css-modules`,
  `${host}/styling/styled-components`,
  `${host}/styling/styled-jsx`,
  `${host}/styling/tailwind`,
];

const traffic = {
  connections: urls.length * 2, // autocannon recommends multiple of urls
  duration: 45, // seconds
  overallRate: 20, // max number of requests to make per second from all connections
  url: urls,
};

// 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟 🌟

const instance = autocannon(
  {
    ...traffic,
    title: 'Next.js Conf Demo Traffic',
    headers: {
      'User-Agent': 'nextjs-conf-demo-traffic/0.0.0',
    },
  },
  (error, result) => {
    const { duration, errors, statusCodeStats } = result;

    console.log('errors:', error ? error : 'none');
    console.log('stats:', {
      duration,
      errors,
      statusCodeStats,
    });
  },
);

process.once('SIGINT', () => {
  instance.stop();
});

autocannon.track(instance, { renderResultsTable: false });
