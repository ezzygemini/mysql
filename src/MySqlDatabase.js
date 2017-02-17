const mySql = require('mysql');
const MySqlConfiguration = require('./MySqlConfiguration').config();

mySql.createConnection();
