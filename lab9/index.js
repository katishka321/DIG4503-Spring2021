import MongoClient from 'mongodb';

//Example URL
const URL = "mongodb+srv://KatishkaWalton:7rpTTs1cuHImjfQv@cluster0.yuzwq.mongodb.net";

MongoClient.connect(URL, { useUnifiedTopology: true })
.then(connection => {
    //Do something with connection!
    let database = connection.db("sample_airbnb");
    let collection = database.collection("listingsAndReviews");

    let cursor = collection.find({"review_scores.review_scores_rating": {$gte: 99}, beds: {$gte: 5}, price: {$lte: 200}});

    cursor.forEach(document => {
        console.log(document);
    }, () => {
        //Close the connection when done.
        connection.close();
    });
})

.catch(error => {
    console.log("Error " + error);
});