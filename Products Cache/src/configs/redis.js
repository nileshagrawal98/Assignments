const redis = require('redis');

const client = redis.createClient({
    legacyMode: true
});

client.connect();

client.on('error', (err) => console.log('Redis Client Error', err));


module.exports = client;

// const redis = require('redis');
// const client = redis.createClient(6379);

// // const connectRedis = async() => {
//     await client.connect();
//     // console.log('Redis server connected')
// // }

// // connectRedis();

// client.on('error', (err) => 
// console.log('Redis'));

// module.exports = client;

