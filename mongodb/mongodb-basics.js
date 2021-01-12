//CRUD DOCS: http://mongodb.github.io/node-mongodb-native/3.5/api/Collection.html
//CURSOR: http://mongodb.github.io/node-mongodb-native/3.5/api/Cursor.html

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient

const connectionURL = "mongodb://127.0.0.1:27017"; //server url
const databaseName = "task-manager";

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (err, client)=>{ //connect to the db server
    if (err){
        return console.log("unable to conenct to db") 
    }

    const db = client.db(databaseName);

    /*INSERT ONE DOCUMENT
    db.collection("users").insertOne({ 
        name: "Thomas",
        age: 29
    }, (err, result)=>{
        if (err){
            return console.log("unable to insert user");
        }
        console.log(result.ops);
    })*/

    /*INSERT MANY DOCUMENTS
    db.collection("users").insertMany([
        {
            name: "Sam",
            age: 30
        },
        {
            name: "Harold",
            age: 28
        }
    ], (err, result)=>{
        if (err){
            return console.log("unable to insert user");
        }
        console.log(result.ops);
    })*/

    /*FIND DOCUMENTS
    //Note: When finding by id, remember that an id is an object and not string. Use {_id: new ObjectID("5efa4e910b07f015c02c4955")}. Also, done forget to declare it let ObjectID = require('mongodb').ObjectID;
    
    db.collection("users").findOne({ _id: new ObjectID("5efa4e910b07f015c02c4955") }, (err, res)=>{
        if(err){
            return console.log("error finding user");
        }
        return console.log(res);
    })
    
    let ObjectID = mongodb.ObjectID;
    db.collection("tasks").findOne({_id: new ObjectID("5efa54ae399fbb4c04f6d702")}, (err, res)=>{
        if(err){
            return console.log("error finding task");
        }
        return console.log(res);
    })

    db.collection("tasks").find({completed: true}).toArray((err, doc) =>{ //toArray is a cursor. Check documentation link above
        (err) ? console.log("to array failed") : console.log(doc);
    })*/

    //UPDATE DOCUMENT
    //Update operator: https://docs.mongodb.com/manual/reference/operator/update/
    //update is a promise. Check the doc: http://mongodb.github.io/node-mongodb-native/3.5/api/Collection.html#updateOne
    /*const updateNamePromise = db.collection("users").updateOne({_id: new mongodb.ObjectID("5efa4e910b07f015c02c4955")}, {$set:{name: "Robert"}});
    updateNamePromise
        .then(r => console.log(r))
        .catch(e => console.log(e))

    const UM = db.collection("tasks").updateMany(
        {completed: false},
        {$set: {completed: true}}
    );
    UM.then(r => console.log(r)).catch(e => console.log(e))*/

    //DELETE DOCUMENT
    /*
    db.collection("users").deleteOne({age: 30})
        .then(r=>console.log(r.deletedCount)) //note that result is an object and it has a lot of helpful properties for us to use. 
        .catch(e=>console.log(e))

    db.collection("tasks").deleteMany({completed: true})
        .then(r=>console.log(r.deletedCount)) //note that result is an object and it has a lot of helpful properties for us to use. 
        .catch(e=>console.log(e))
    */
});