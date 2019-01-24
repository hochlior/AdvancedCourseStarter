const redis = require('redis');

const redisUrl = 'redis://127.0.0.1:6379';

const client = redis.createClient(redisUrl);

// client.set('hi', 'there');
// client.get('hi', (err, value) => {
//   return console.log(value);
// });

client.hset('german', 'red', 'rot');
client.hget('german', 'red', console.log);
