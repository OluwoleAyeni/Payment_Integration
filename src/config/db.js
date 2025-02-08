const mongoose = require("mongoose"); 
mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log (`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${err.message}`); 
        process.exit(1)
    }
}

module.exports = connectDB; 

