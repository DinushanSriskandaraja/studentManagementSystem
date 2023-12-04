const { MongoClient, ServerApiVersion } = require('mongodb');

const credentials = '<path_to_certificate>'

const client = new MongoClient('mongodb+srv://cluster0.hqhawtk.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
    tlsCertificateKeyFile: credentials,
    serverApi: ServerApiVersion.v1
});

async function run() {
    try {
        await client.connect();
        const database = client.db("testDB");
        const collection = database.collection("testCol");
        const docCount = await collection.countDocuments({});
        console.log(docCount);
        // perform actions using client
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);