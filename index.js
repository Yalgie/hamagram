require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const ENV = process.env.ENV;
const app = express();

if (ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, e => {
    if (e) throw e;
    console.log(`Hammin on ${PORT}`);
});