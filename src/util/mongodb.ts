/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MongoClient, Db } from "mongodb";

// const { MONGODB_URI: uri, MONGODB_DB: dbName } = process.env;

const uri =
  "mongodb://kentanaito:<0919kenta>@cluster0-shard-00-00.femxm.mongodb.net:27017,cluster0-shard-00-01.femxm.mongodb.net:27017,cluster0-shard-00-02.femxm.mongodb.net:27017/mydb?ssl=true&replicaSet=atlas-s08jfj-shard-0&authSource=admin&retryWrites=true&w=majority";
const dbName = "mydb";

// let cachedClient: MongoClient;
// let cachedDb: Db;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

if (!dbName) {
  throw new Error("Please define the MONGODB_DB environment variable inside .env.local");
}

export async function connectToDatabase() {
  //   if (cachedClient && cachedDb) {
  //     //キャッシュ変数が入力されているか確認
  //     return { client: cachedClient, db: cachedDb };
  //   }

  const client = await MongoClient.connect(
    uri /* , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } */
  );

  const db = client.db(dbName);

  //   cachedClient = client;
  //   cachedDb = db;

  return { client, db };
}
