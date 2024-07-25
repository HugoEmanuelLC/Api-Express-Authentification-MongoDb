import mongoose  from "mongoose";
import {} from "dotenv/config";

const urlExterne = process.env.MONGODB_URI_HEBERGE;
const urlCloud = process.env.MONGODB_URI_CLOUD;

const url = urlCloud;

const connectionMongodb = mongoose.connect(url)
.then((res) => {
    console.log('MONGODB Connection to the database established');
    return true
})
.catch((err) => {
    return {message: "MONGODB Error connecting to the database"}
});

export { connectionMongodb };