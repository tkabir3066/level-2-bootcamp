import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://tutulkabir:Tk3066abd%40@cluster0.vzz24au.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
