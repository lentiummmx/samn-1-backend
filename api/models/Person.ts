/**
 * Person.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

// module.exports = {
//
//   attributes: {
//
//   }
// };

export class Person {
  connection: string = 'localMongodbServer';

  // connection: string = 'localMongodbServer';
  attributes: any = {
    id: {
      type: 'integer',
      primaryKey: true
    },
    name: {
      type: 'string',
      required: true,
      defaultsTo: 'default person'
    }
  }
}
