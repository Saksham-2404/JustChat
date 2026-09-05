import express from 'express';
import authRoutes from './routes/auth.js';
import messageRoutes from './routes/message.js';
import path from 'path';
import {connectDB} from './lib/db.js';
import {ENV} from './lib/env.js';
import cookieParser from 'cookie-parser';

const app = express();
const __dirname = path.resolve();
const PORT = ENV.PORT;

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
if(ENV.NODE_ENV === 'production') {
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