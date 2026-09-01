import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import path from 'path';
import {connectDB} from './lib/db.js';

dotenv.config();
const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/auth", authRoutes);
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../FrontEnd/dist')));
    app.get('*', (_, res) => {
        res.sendFile(path.join(__dirname, '../FrontEnd', 'dist', 'index.html'));
    });
}  

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error('Failed to connect to the database:', err);
    process.exit(1);
});