const mysql = require('mysql');
const con = require('../connection');
const axios = require('axios');

const getData = async(req,res) =>{
    con.query('select*from trialTable', (err,result) =>{
        console.log(result);
       return res.status(200).json({
        data:result
       });
    })
}

const getUserData = async(req,res) =>{
    const response = await axios.get('http://localhost:9500/user/getData');
    console.log(response.data);
    res.status(200).json({
        data:response.data
       });
}

const addUser = async(req,res) =>{
   const a = req.body;
   console.log(a);

     let query = `insert into trialTable(name,contact) values(\'${a.name}\', ${a.contact})`

  con.query(
    query,
    (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(result);
      }
    }
  );
}

const addUserData = async(req,res) =>{
    const a = req.body
    const response = await axios.post('http://localhost:9500/user/addUser',{name:a.name, contact:a.contact})

    console.log(response);

    res.send(response.data)
}

module.exports =
{ getData ,
  getUserData,
  addUser,
  addUserData
};