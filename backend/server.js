import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import todojdRoutes from './routes/todojdRoutes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

app.use('/todos', todojdRoutes);

mongoose.connect(MONGO_URL)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('mongodb connection failed :', err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})