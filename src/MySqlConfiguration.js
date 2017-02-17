const environment = require('environment');
const argument = require('argument');
const host =
  argument('MYSQL_HOST', argument(['RDS_HOSTNAME', 'RDS_HOST']) || 'localhost');
const user =
  argument('MYSQL_USER', argument(['RDS_USERNAME', 'RDS_USER']) || 'root');
const password =
  argument('MYSQL_PASSWORD', argument('RDS_PASSWORD') || 'undefined');
const database =
  argument('MYSQL_DATABASE', argument(['RDS_DATABASE', 'RDS_SCHEMA']) || 'sys');
const port =
  argument('MYSQL_PORT', argument('RDS_PORT') || 3306);
let defaultInstance;

class MySqlConfiguration {

  constructor() {

    /**
     * @type {Environment}
     */
    this.environment = environment;

    /**
     * The hostname of the database.
     */
    this.host = host;

    /**
     * The password of the database
     */
    this.password = password;

    /**
     * The user of the database.
     */
    this.user = user;

    /**
     * The database name.
     */
    this.database = database;

    /**
     * The default port.
     */
    this.port = port;

  }

  static environment() {
    return environment;
  }

  static config() {
    if (!defaultInstance) {
      defaultInstance = new MySqlConfiguration();
    }
    return defaultInstance;
  }

}

module.exports = MySqlConfiguration;
