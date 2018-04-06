/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
import util = require('util');
import express = require('express');

declare var sails: any;

export function index(req: express.Request, res: express.Response, next: Function): any {
    console.log('index() from UsersController.ts');
    res.status(200).send('Hello fromTypescript!');
}

export function config(req: express.Request, res: express.Response, next: Function) {
    console.log('config() from UsersController.ts');
    res.status(200)
        .send('<h1>sails.config :</h1><pre>' + util.inspect(sails.config) + '<pre>');
}

export function customerForSampleById(req: express.Request, res: express.Response, next: Function) {
  console.log('customerForSampleById() from UsersController.ts');
  // console.log('customerForSampleById().req', req);
  console.log('customerForSampleById().req.body', req.body);
  console.log('customerForSampleById().req.params', req.params);
  console.log('customerForSampleById().req.query', req.query);

  ExigoService.customerForSampleById(req.params.idCustomer, req.query.customerType)
    .then((result) => {
      sails.log.debug('result', result[0]);
      return res.json(result[0]);
  }).catch((err: Error) => {
    sails.log.error('err', err.message);
    return res.status(500).json(err);
  });
}
