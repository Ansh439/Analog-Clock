import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    () => {
        console.log("mongoose Connected!!")
    }
).catch((err) => {
    console.log(err);
});


const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome at port")
})

app.listen('8080', () => {
    console.log("server starts running at port 8080");
})


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);