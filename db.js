import mongoose from "mongoose";


const mongoURL = "mongodb+srv://sarwat:sarwat09@cluster0.y4og21s.mongodb.net/eventbooking?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("connected", () => {
    console.log("MongoDB Connection Successful");
});
db.on("error", () => {
    console.log("MongoDB Connection Failed");
});

export default mongoose;









