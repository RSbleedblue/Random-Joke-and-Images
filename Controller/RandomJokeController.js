import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

class RandomJokeController {
    constructor() {}

    async getJokes(req, res) {
        const api_url = 'https://api.api-ninjas.com/v1/jokes';
        const api_key = 'b1H0TMuowc4OfIrwEDbCuw==NMlddTFt9YCYPsF6';
        try {
            const response = await axios.get(api_url, {
                headers: { 'X-Api-Key': api_key }
            });
            return res.status(200).json({ success: "True", jokes: response.data });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    async getRandomImages(req, res) {
        const api_url = 'https://api.api-ninjas.com/v1/randomimage';
        const api_key = 'b1H0TMuowc4OfIrwEDbCuw==NMlddTFt9YCYPsF6';
        try {
            const response = await axios.get(api_url, {
                headers: {
                    'X-Api-Key': api_key,
                    'Accept': 'image/jpg'
                },
                responseType: 'stream'
            });

            const fileName = `img-${uuidv4()}.jpg`;
            const filePath = path.resolve("./Images", fileName);
            const writer = fs.createWriteStream(filePath);

            response.data.pipe(writer);

            writer.on('finish', () => {
                res.status(200).sendFile(filePath);
            });

            writer.on('error', (err) => {
                res.status(500).json({ error: err.message });
            });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

export default RandomJokeController;
