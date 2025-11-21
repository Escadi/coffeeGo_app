require('dotenv').config();
const express = require('express');
const cors = require('cors');
var path = require('path');
const jwt = require('jsonwebtoken');
const app = express();




var corsOptions = {
  origin: [
    "http://localhost:8100",     // Ionic serve
    "capacitor://localhost",     // APK Android
    "ionic://localhost",         // APK Ionic WebView
    "http://192.168.0.100",       // tu PC (IMPORTANTE)
    "http://192.168.0.100:8080"   // backend
  ],
   methods: "GET,POST,PUT,DELETE,OPTIONS",
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/** -------------------------------------------------------------------
 * |              AUTHENTIFACTION BASIC 64 FOR ALL DATA                |
 *  ------------------------------------------------------------------- 
 */
app.use(function (req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.headers['authorization'];
  if (!token) return next(); //if no token, continue

  if(req.headers.authorization.indexOf('Basic ') === 0){
    // verify auth basic credentials
    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [email, password] = credentials.split(':');

    req.body.emailClient = email;
    req.body.passwordClient = password;

    return next();
  }

  token = token.replace('Bearer ', '');
  // .env should contain a line like JWT_SECRET=V3RY#1MP0RT@NT$3CR3T#
  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "Invalid user."
      });
    } else {
      req.user = user; //set the user to req so other routes can use it
      req.token = token;
      next();
    }
  });
});
/*
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
*/


const db = require('../Backend/models');


db.sequelize.sync();
/*
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db");
});
*/



app.get('/', (req, res) => {
    res.json('Hello my coffee!');
});

require("../Backend/routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0",() => {
    console.log(`Server is running on port ${PORT}`);
});