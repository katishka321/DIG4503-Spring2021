import MongoClient from 'mongodb';

const url = "mongodb+srv://KatishkaWalton:7rpTTs1cuHImjfQv@cluster0.yuzwq.mongodb.net";

class Database {
    constructor() {
        //Setup a default value for connection
        this.connection = null;
        
        //Setup a default value for database
        this.database = null;

        //Setup a default value for collection
        this.collection = null;
    }

    async connect(){
        //Wait for the connect() method to finish.
        this.connection = await MongoClient.connect(url, {useUnifiedTopology: true});

        //Select a database.
        this.database = this.connection.db("lab10");

        //Select a collection.
        this.collection = this.database.collection("people");
    }

    async createOne(person){
        //adds new person
        await this.collection.insertOne(
            {
                "firstName": "Katishka",
                "lastName": "Walton",
                "favoriteColor": "black"
            }
        )
        return {person: person};
    }

    async readOne(person){
        //search for person
        let result = await this.collection.findOne(
            {
                "firstName": person,
                "lastName": person,
                "favoriteColor": person
            }
        )

        let result = {person: "Not Found! Please try again."};
        
        return result;
    }

    close(){
        if(this.collection != null){
            this.connection.close();
        }
    }
}

export default Database;