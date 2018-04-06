/**
 * ExigoService
 *
 * @description :: Server-side logic for managing exigo
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Services
 */
// import Promise = require('sails/node_modules/bluebird');
import Promise = require('bluebird');
import CustomerQueryContainer = require('../queries/CustomerQueryContainer.json');

declare const sails: any;

const ExigoService = {
  customerForSampleById: function (customerId: number, customerType: number) {
    // sails.log('sails.models', sails.models.exigo);
    // sails.log('sails.models', sails.models);
    sails.log.debug('Exigo', Exigo);
    sails.log.debug('CustomerQueryContainer', CustomerQueryContainer);
    const exigoQueryAsync = Promise.promisify(Exigo.query);
    sails.log.debug('exigoQueryAsync', exigoQueryAsync);
    // const exigoQueryAsync = Promise.promisifyAll(exigo.query);
    return exigoQueryAsync((CustomerQueryContainer.personalCustomerInfoById.join(' ')
      .replace(':customerId', customerId).replace(':customerType', customerType))).then((results) => {
      sails.log.debug('results', results);
      return results;
    }).catch((err) => {
      sails.log.error(err);
      throw err;
    });
  }
};

module.exports = ExigoService;
