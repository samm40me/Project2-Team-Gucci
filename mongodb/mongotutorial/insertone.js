const { MongoClient } = require("mongodb");

// Connect to MongDB
async function main() {
  const url =
    "mongodb+srv://sam:1046@shelter.pibny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  const client = new MongoClient(url);

  try {
    await client.connect();

    await createListing(client, {
      date: "2021-01-14T00:00:00.000",
      year: "2021",
      month: "Jan",
      city: "Calgary",
      sheltertype: "Adult Emergency",
      sheltername: "River Front",
      organization: "Calgary Drop-In Centre",
      shelter: "River Front",
      capacity: "0",
      overnight: "0",
    });
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}
main().catch(console.error);


async function createListing(client, newListing) {
  const result = await client
    .db("shelter_occupancy")
    .collection("LocationAndCapacity")
    .insertOne(newListing);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}
