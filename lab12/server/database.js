import MongoClient from "mongodb";

const url = "mongodb+srv://KatishkaWalton:7rpTTs1cuHImjfQv@cluster0.yuzwq.mongodb.net";

class Database {
    constructor() {
        this.connection = null;

        this.database = null;

        this.collection = null;
    }

    async connect () {
        this.connection = await MongoClient.connect(url, {useUnifiedTopology: true});

        this.database = this.connection.db("lab11");

        this.collection = this.database.collection("books");
    }

    async createOne(newISBN, newTitle, newAuthor, newDesc) {
        if (this.collection != null) {
            let newBook = {
                ISBN: newISBN,
                title: newTitle,
                author: newAuthor,
                description: newDesc,
            };

            await this.collection.insertOne(newBook);

            return newBook;
        }   
    }

    async readMany(urlTitle, urlAuthor) {
        if (this.collection != null) {
            let newArray = [];

            let multiSearch = this.collection.find(
                {
                    $or: [
                        { author: urlAuthor, title: {$ne: null}},

                        { title: utlTitle, author: {$ne: null}},
                    ],
                });
            
            await multiSearch.forEach((documents) => {
                newArray.push(documents);
            });

            return {books: newArray};
        }
    }

    async updateOne(updateURL, updateTitle, updateAuthor, updateDesc) {
        if (this.collection != null) {
            let completeUpdate = {book: "Could Not Be Found or Updated... Please Try Again!"};

            let newUpdate = {};

            if (updateTitle) {
                newUpdate.title = updateTitle;
            }

            if (updateAuthor) {
                newUpdate.author = updateAuthor;
            }

            if (updateDesc) {
                newUpdate.description = updateDesc;
            }

            let updatedDoc = await this.collection.updateOne(
                {ISBN: updatedUrl},

                {$set: newUpdate}
            );

            if (updatedDoc != null) {
                completeUpdate = newUpdate;
            }

            return completeUpdate;
        }
    }

    async deleteOne(deleteBook) {
        if (this.collection != null) {
            let confirmDelete = {books: 0};

            let results = await this.collection.deleteOne(
                {ISBN: deleteBook}
            );

            if (results != null) {
                confirmDelete = {books: results.deletedCount};
            }

            return confirmDelete;
        }
    }

    close() {
        if (this.connection != null) {
            this.connection.close();
        }
    }
}

export default Database; 