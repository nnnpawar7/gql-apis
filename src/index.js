import express from  "express";
import { ApolloServer } from "apollo-server-express";
import http from "http"

import {typeDefs} from './typeDefs'
import {resolvers} from './resolvers'
const app = express();



let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();
const httpserver = http.createServer(app);

app.get("/rest", function (req, res) {
    res.json({ data: "api working" });
});

app.listen(4000, function () {
    console.log(`server running on port 4000`);
    console.log(`gql path is ${apolloServer}`);
}); 