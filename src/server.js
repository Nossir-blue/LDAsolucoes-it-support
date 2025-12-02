import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    console.log("Test: home");
    res.sendFile(__dirname, 'public');
})

app.listen(PORT, HOST, () => console.log(`Eavesdroppin in http://${HOST}:${PORT}`));