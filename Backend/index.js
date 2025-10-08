const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = require('./models');

db.sequelize.sync();

app.get('/', (req, res) => {
    res.json('Hello my coffee!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});