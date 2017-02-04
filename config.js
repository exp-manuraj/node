var config = {};
if(process.env.ENVIRONMENT == "production") {
  config.consumer_key = process.env.LS_CONSUMER_KEY;
  config.secret_key = process.env.LS_SECRET_KEY;
  config.domain_url = 'proctest-demo.bitballoon.com';
  console.log('Loaded production keys', process.env);
} else { // DEBUG Keys
  config.consumer_key = 'yis0TYCu7U9V4o7M';
  config.secret_key = '74c5fd430cf1242a527f6223aebd42d30464be22';
  console.log('Loaded debug keys');
  config.domain_url = 'localhost';
}

module.exports = config;
