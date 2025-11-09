const express = require('express');
const cors = require('cors');
var path = require('path');


const app = express();
var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/** -------------------------------------------------------------------
 * |              AUTHENTIFACTION BASIC 64 FOR ALL DATA                |
 *  ------------------------------------------------------------------- 
 */
app.use((req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return next();

  if (auth.startsWith('Basic ')) {
    const [email, password] = Buffer.from(auth.split(' ')[1], 'base64').toString().split(':');
    req.body.email = email;
    req.body.password = password;
  }

  next();
});


const db = require('../Backend/models');


//db.sequelize.sync();

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db");
});


app.get('/', (req, res) => {
    res.json('Hello my coffee!');
});

require("../Backend/routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});