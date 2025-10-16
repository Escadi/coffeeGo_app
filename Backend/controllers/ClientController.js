const db = require("../models");
const Client = db.client;
const Op = db.Sequelize.Op;

//Creamos una nueva bicicleta y la guardamos
//Esta parte es para validar la request del GET
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Contend can not be empty"
        });
        return;
    }

    //CREAMOS LA BICICLETA
    const client = { 
        name: req.body.nameClient,
        username: req.body.usernameClient,
        email: req.body.emailClient};

    //GUARDAMOS LA BICICLETA EN LA DB
    Client.create(client)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating the bicycle."
            });
        });
};

//vemos todas las bicicletas de la base de datos
exports.findAll = (req, res) => {
    Client.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating the bicycle."
            })
        })
};

//busca una bicicleta por su id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Client.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Bicycle with id=${id} not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error retrieving bicycle with id=" + id
      });
    });
};

//actualiza una bicicleta a razon de su id
exports.update = (req, res) => {
    const id = req.params.id;
    
    Client.update(req.body, { where: {id: id} })
    .then(num => {
        if(num[0] === 1){
            res.send({
                message: "Bicycle update correct"
            });
        }else{
            res.send({
                message: "Biclyte don´t update maybe not exist"
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error for updating"
        });
    });
};


//elimina una bicicleta por su id especifica en la request
exports.delete = (req, res) => {
    const id = req.params.id;

    Client.destroy({ where: {id:id}})
    .then(num => {
        if(num === 1 ){
            res.send({
                message: "Delete correct"
            });
        }else{
            res.send({
                message: "Not Delete correct"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete bicycle"
        });
    });

};




