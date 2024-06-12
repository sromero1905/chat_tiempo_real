const express = require('express');
const cors = require('cors');
const axios = require('axios');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {
                username: username,
                secret: username,
                first_name: username
            },
            {
                headers: {
                    'private-key': 'e0d1ddf1-0390-4254-9903-c252f8440d5c'
                }
            }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        if (e.response) {
            return res.status(e.response.status).json(e.response.data);
        } else {
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
});

app.listen(port, () => {
    console.log(`El servidor está en funcionamiento en el puerto ${port}`);
});
