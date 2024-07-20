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

const PORT =  process.env.PORT || '8080';


const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Welcome at port")
})

app.listen(PORT, () => {
    console.log("server starts running at port 8080");
})


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})