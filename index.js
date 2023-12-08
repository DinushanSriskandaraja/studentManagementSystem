// Front-End Developers 
// Don't Touch
// This Code File 



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
// Define your routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
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
app.get('/student/SID/:sid', async(req, res) => {
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
// Get Student By email
app.get('/student/Email/:email', async(req, res) => {

    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const collection = client.db("sms").collection("students");
        const students = await collection.findOne({ Email: req.params.email });
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
// Get Student By FirstName
app.get('/student/FirstName/:fname', async(req, res) => {

    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const collection = client.db("sms").collection("students");
        const students = await collection.find({ FirstName: req.params.fname }).toArray();
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
// Get Student By lastName
app.get('/student/LastName/:lname', async(req, res) => {

    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const collection = client.db("sms").collection("students");
        const students = await collection.find({ LastName: req.params.lname }).toArray();
        if (students.length > 0) {
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
// Get Student By City
app.get('/student/NearCity/:city', async(req, res) => {

    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const collection = client.db("sms").collection("students");
        const students = await collection.find({ NearCity: req.params.city }).toArray();
        if (students.length > 0) {
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
        res.status(500).json({ message: "Internal Server Error", error });
    } finally {
        // await client.close();
    }
});
// Update Student By SID
app.put('/student/sid/:sid', async(req, res) => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const collection = client.db("sms").collection("students");
        const updatedStudent = await collection.findOne({ SID: parseInt(req.params.sid) });
        console.log(updatedStudent);

        // Assuming req.body contains the updated data
        const updatedData = req.body;
        console.log(updatedData);
        const result = await collection.updateOne({ SID: parseInt(req.params.sid) }, { $set: updatedData });

        if (result.modifiedCount > 0) {
            res.json({ message: "Student updated successfully" });
        } else {
            res.status(404).json({ message: "Student not found or no changes were made" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    } finally {
        await client.close();
    }
});
// Delete Student By SID
app.delete('/student/sid/:sid', async(req, res) => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const collection = client.db("sms").collection("students");

        const result = await collection.deleteOne({ SID: parseInt(req.params.sid) });

        if (result.deletedCount > 0) {
            res.json({ message: "Student deleted successfully" });
        } else {
            res.status(404).json({ message: "Student not found or no changes were made" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    } finally {
        await client.close();
    }
});


app.listen(8080);