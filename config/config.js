const milieu = require('milieu');

const config = milieu('https//bongeats.com/api', {
  environment: 'dev',
  server: {
    port: 8080
  },
  mongo: {
    url: 'mongodb://localhost/bongeats'
  }
});


module.exports = config;
