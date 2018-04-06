/**
 * RolesController
 *
 * @description :: Server-side logic for managing rols
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
import util = require('util');
import express = require('express');

declare const sails: any;

const RolesController = {
  index: function (req: express.Request, res: express.Response, next: Function) {
    console.log('index() from RolesController.ts');
    sails.models.rol.find().limit(1).then((roles) => {
      console.log(`rol page rendering w/ message ${roles[0].message}`);
      // return res.render('rol', { rol: roles[0].message });
      return res.status(200).json({ rol: roles[0].message });
    }).catch((err: Error) => {
      console.error(err.message);
      // return res.render('500', err);
      return res.status(500).json(err);
    });
  },

  config: function (req: express.Request, res: express.Response, next: Function) {
    console.log('config() from RolesController.ts');
    return res.status(200).send(`<h1>sails.config :</h1><pre>${util.inspect(sails.config)}<pre>`);
  }
};

module.exports = RolesController;
