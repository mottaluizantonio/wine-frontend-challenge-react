const withImages = require('next-images');

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/page/1',
        permanent: true
      },
      {
        source: '/page',
        destination: '/page/1',
        permanent: true
      }
    ];
  }
};

module.exports = withImages({
  esModule: true
});
