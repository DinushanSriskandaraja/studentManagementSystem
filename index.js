var express = require('express');
var app = express();
app.use(express.json());
// const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

// const app = express();
const port = 8080;

const uri = "mongodb+srv://dinu:dinushan@cluster0.hqhawtk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
// Get all students
app.get('/students', async(req, res) => {
    try {
        await client.connect();
        const collection = client.db("sms").collection("students");

        const students = await collection.find().toArray();
        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    } finally {
        await client.close();
    }
});

// Get Student By SID

app.get('/student/:sid', async(req, res) => {
    console.log(parseInt(req.params.sid));
    try {
        await client.connect();
        // console.log("Connected to MongoDB");
        const collection = client.db("sms").collection("students");
        const students = await collection.findOne({ SID: parseInt(req.params.sid) });
        if (students) {
            res.json(students);
        } else {
            res.status(404).json({ message: "Student not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    } finally {
        await client.close();
    }
});
// Add a new student
app.post('/students', async(req, res) => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const collection = client.db("sms").collection("students");
        const result = await collection.insertOne(req.body);
        // Use index 0 to get the inserted document
        if (result && result.ops && result.ops.length > 0) {
            res.json(result.ops[0]);
        } else {
            res.status(500).json({ message: "Unexpected response from the database" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    } finally {
        // await client.close();
    }
});

app.listen(8080);