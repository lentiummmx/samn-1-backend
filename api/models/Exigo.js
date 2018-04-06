/**
 * Exigo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'exigoSqlServer',

  attributes: {

  },

  queryContainer: function () {
    return {
      "personalCustomerInfoById": ["SELECT CustomerID, c.CustomerTypeID, ct.CustomerTypeDescription, FirstName, LastName, Field6 as SecondLastName,",
        "  BirthDate, Email, MobilePhone, Phone, c.TaxCodeTypeID, tct.TaxCodeDescription, Field5 as TaxId, Field7 as CURP,",
        "  MainCountry, MainState",
        "FROM Customers c, CustomerTypes ct, TaxCodeTypes tct",
        "WHERE",
        "  CustomerID = :customerId and",
        "  c.CustomerTypeID = :customerType and",
        "  ct.CustomerTypeID = c.CustomerTypeID and",
        "  tct.TaxCodeTypeID = c.TaxCodeTypeID"]
    };
  }
};

