import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        console.log("db connection started");
        if (process.env.MONGODB_URL) {

            console.log("db connection ready for use");
            return await mongoose.connect(process.env.MONGODB_URL)

        } else {
            throw new Error("MONGODB_URL not defined")
        }

    } catch (err) {
        console.log("db connection connection failed" + err);
    }
}