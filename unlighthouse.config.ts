export default {
  site: 'https://www.drive.com.au/',
  urls: [
    '/cars-for-sale/',
    '/showrooms/',
    '/drive-car-of-the-year/2024/'
   ],
  // debug: true,
  // puppeteerClusterOptions: {
  //   only run 1 worker at a time
  //   maxConcurrency: 1
  // },
  scanner: {
    device: 'desktop',
    throttle: false,
    samples: 3,
  },
  // Exclude performance scores since they are not correct.
  lighthouseOptions: {
    onlyCategories: ['seo','accessibility','best-practices'],
  }
}