const prisma = require("../prisma");

const cryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');


exports.signup = async (req, res) => {
    try{
        const { lastname,firstname, email, password, phonenumber } = req.body;

    const user = await prisma.user.create({
        data: {
          lastname,
          firstname,
          phonenumber,
          email,
          password : cryptoJs.AES.encrypt(password, process.env.PASS_SEC),
        },
      });
      res.status(201).json(user);
    }catch(err){
        res.status(500).json(err);
    }
}


