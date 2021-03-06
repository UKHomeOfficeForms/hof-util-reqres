'use strict';

const reqres = require('reqres');
const Model = require('hof-model');

module.exports = function request(opts) {
  opts = opts || {};
  const req = reqres.req(opts);
  req.form = req.form || {};
  req.form.values = req.form.values || {};
  req.form.options = req.form.options || {};
  req.sessionModel = new Model(opts.session);
  req.translate = key => key;
  req.log = () => {};
  return req;
};
