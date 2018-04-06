/**
 * PersonsController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
import express = require('express');
import util = require('util');
import {Person} from "../models/Person";
// import * as _ from 'lodash';
import _ = require('lodash');

declare const sails: any;

const PersonsController = {
  index: (req: express.Request, res: express.Response, next: Function) => {
    console.log('index() from PersonsController.ts');
    // sails.models.person.find().limit(1).then((persons) => {
    sails.models.person.find().then((people: Person[]) => {
    // sails.models.person.findOne({ 'name' : 'Daniel Ríos' }).then((person) => {
      console.log('persons', people);
      _.forEach(people, (person) =>{
        console.log(`person page rendering w/ message ${person.name ? person.name : person.id}`);
      });
      // return res.render('person', { person: persons[0].name });
      return res.status(200).json({ 'people': people });
    }).catch((err: Error) => {
      console.error(err.message);
      // return res.render('500', err);
      return res.status(500).json(err);
    });
  },

  config: (req: express.Request, res: express.Response, next: Function) => {
    console.log('config() from PersonsController.ts');
    return res.status(200).send(`<h1>sails.config :</h1><pre>${util.inspect(sails.config)}<pre>`);
  },

  create: (req: express.Request, res: express.Response, next: Function) => {
    console.log('create() from PersonsController.ts');
    console.log('create(req.body) ', req.body);
    sails.models.person.create(req.body.person).then((newPerson: Person) => {
      console.log('create(newPerson) ', newPerson);
      return res.json(newPerson);
    }).catch((err: Error) => {
      console.error(err.message);
      return res.status(500).json(err);
    });
  },

  update: (req: express.Request, res: express.Response, next: Function) => {
    console.log('update() from PersonsController.ts');
    console.log('update(req.params) ', req.params);
    console.log('update(req.body) ', req.body);
    sails.models.person.update({ id: req.params.id }, req.body.person).then((newPerson: Person) => {
      console.log('update(newPerson) ', newPerson);
      return res.json(newPerson);
    }).catch((err: Error) => {
      console.error(err.message);
      return res.status(500).json(err);
    });
  },

  delete: (req: express.Request, res: express.Response, next: Function) => {
    console.log('delete() from PersonsController.ts');
    console.log('delete(req.params) ', req.params);
    console.log('delete(req.body) ', req.body);
    sails.models.person.destroy({ id: req.params.id }).then((person) => {
      console.log('delete(person) ', person);
      return res.json(person);
    }).catch((err: Error) => {
      console.error(err.message);
      return res.status(500).json(err);
    });
  }
};

module.exports = PersonsController;
