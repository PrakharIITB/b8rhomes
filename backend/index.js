import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth.js";
import propertyRoutes from "./routes/property.js";

// import PROPERTY from "./models/property.js";
// import propertyDetails from "./data/index.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());


//MONGO DB CONNECTION
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
}).then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((err) => {
    console.log(err, "MongoDB connection failed");
});

//routes
app.use("/auth", authRoutes);
app.use("/property", propertyRoutes);