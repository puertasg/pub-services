const express = require('express');
const pubService = require("pub-services").services.pubService;
const app = express();
app.get('/pubs', function (req, res) {
    const pubs = pubService.allPubs();
    res.status(200).json(pubs);
})
app.listen(3000);