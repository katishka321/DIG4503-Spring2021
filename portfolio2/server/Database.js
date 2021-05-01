import MongoClient from 'mongodb';

const URL = "mongodb+srv://KatishkaWalton:7rpTTs1cuHImjfQv@cluster0.yuzwq.mongodb.net";

class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect(){
        this.connection = await MongoClient.connect(URL, {useUnifiedTopology: true})
        this.database = this.connection.db("sample_mflix");
        this.collection = this.database.collection("movies");
    }

    createOne(_id, query){
        var result = this.collection.insertOne(
            {
                "_id": _id,
                "title": query.title,
                "genres": query.genres,
                "directors": query.directors,
                "writers": query.writers,
                "plot": query.plot
            });

            return result;
    }

    close(){
       this.connection.close(); 
    }

    readOne(_id){
        var result = this.collection.findOne(
            {
                "_id": _id
            });

        return result;
    }
        
    readMany(query){
        var result = this.collection.find(
            {
                "title": query.title,
                "genre": query.genre
            });

        return result;
    }

    movieSearch(query){
        var result = this.collection.find(
            {
                "title": new RegExp(query, 'i')
            });
        
        return result;
    }

    updateOne(_id, query){
        var result = this.collection.updateOne({"_id":_id},{$set: query});

        return result;
    }

    deleteOne(_id){
        var result = this.collection.deleteOne({"_id":_id});

        return result;
    }

}

export default Database;