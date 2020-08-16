const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/beatles';
const connectOption = {
    useUnifiedTopology: true
}

MongoClient.connect(url, connectOption, (err, client) => {
  if (err) throw err;
  const db = client.db('beatles');

  db.collection('member').find().toArray((err, result) => {
    if (err) throw err;
    console.log(result);
  });
});