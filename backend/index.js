import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoutes from './route/book.route.js';

import userRoutes from './route/user.route.js';
const app = express();

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;


async function connectToDatabase() {
try {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
     
      
    });
    console.log('connected to MONGO DB');
} catch (error) {
    console.error('Error connecting to MongoDB:', error);
}
}
app.use(cors());
app.use(express.json()); //to parse json data
app.use(express.urlencoded({ extended: true })); //to parse urlencoded data


app.use("/book", bookRoutes);
app.use('/user',userRoutes);



connectToDatabase().then(() => {
  
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
});
