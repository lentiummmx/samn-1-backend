/**
 * BaseController
 *
 * @description :: Server-side logic for managing bases
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
import express = require('express');

declare const sails: any;

export interface BaseController {
  index(req: express.Request, res: express.Response, next: Function): any,
  config(req: express.Request, res: express.Response, next: Function): any
}
