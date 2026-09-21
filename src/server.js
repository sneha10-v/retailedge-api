const express = require('express');
const app = express();
app.get('/health', (req, res) => res.json({ status: 'healthy', version: process.env.IMAGE_TAG || 'local' }));
app.get('/', (req, res) => res.send('RetailEdge API is running - full pipeline test'));
app.listen(3000, () => console.log('Listening on port 3000'));