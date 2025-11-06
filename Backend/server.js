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
app.use(function (req, res, next) {
  var token = req.headers['authorization'];
  if (!token) return next(); 

  if(req.headers.authorization.indexOf('Basic ') === 0){
   
    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [email, password] = credentials.split(':');

    req.body.email = email;
    req.body.password = password;

    return next();
  }

  token = token.replace('Bearer ', '');
 
  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "Invalid user."
      });
    } else {
      req.user = user; 
      req.token = token;
      next();
    }
  });
});




const db = require('./models');


db.sequelize.sync();

//db.sequelize.sync({ force: true }).then(() => {
//    console.log("Drop and re-sync db");
//});


app.get('/', (req, res) => {
    res.json('Hello my coffee!');
});

require("../Backend/routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});