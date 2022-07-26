// exports.getAllUsers = (req, res) => {
//    console.log("je suis la");
// };

// getAllUsers: (req,	res)	=>	{

//     models.Pizza.findAll({
//                     attributes:	[],
//     }).then((xxxx)	=>	{
//                     if	(xxxx)	{
//                             res.status(201).json(xxxx);
//                     }	else	{
//                             res.status(404).json({	'error':	});
//                     }
//     }).catch((err)	=>	{
//                     console.log(err)
//                     res.status(500).json({	'error':	'cannot	fetch	'	});
//     });
// }

// Importations
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models');
const asyncLib = require('async');

// Routes
module.exports = {
    addUser: (req, res) => {
        
        // paramètres
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

// Vérification d'un élément manquant
        if (name == null || email == null || password == null) {
            return res.status(400).json({ 'error': 'manque des paramètres'});
        } 
    }
}

