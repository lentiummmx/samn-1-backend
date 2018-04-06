/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  connections: {
    localMongodbServer: {
      adapter: 'sails-mongo',
      host: 'localhost',
      port: 27017,
      user: 'myTester', //optional
      password: 'a1s2d3f4g5h6', //optional
      database: 'test' //optional
    },
    exigoSqlServer: {
      adapter: 'sails-sqlserver',
      user: 'SankiSandbox',
      password: 'J2n1%bavgF@3',
      host: 'sandbox.bi.exigo.com', // azure database
      port: 1433,
      database: 'SankiReportingSandbox3',
      options: {
        encrypt: true   // use this for Azure databases
      }
    }
  },

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }
  models: {
    // connection: 'localMongodbServer',
    migrate: 'safe'
  }

};
