# hof-util-reqres
Test helper to create dummy request/response objects for testing middleware methods

## Usage

In your tests you can use the provided `req` and `res` methods to create objects with additional properties that we would expect to exist on a request that had passed through a hof request pipeline.

```js
const request = require('hof-util-reqres').req;
const req = request();

it('provides a sessionModel property on the request', () => {
  expect(req.sessionModel).to.be.an.instanceOf(require('hof-model'));
});

it('provides a translate property on the request', () => {
  expect(req.translate).to.be.a('function');
});

it('provides a form property on the request with values', () => {
  expect(req.form).to.eql({ values: {} });
});
```

Additionally, the request and response objects will have all properties and methods exposed by express. Response methods will be instances of sinon stubs, and so can have assertions made against their calls.

See [reqres](https://npmjs.com/reqres) module for further details of default express behaviour.

## Session Data

The session model can be pre-populated by passing a `session` option.

```js
const request = require('hof-util-reqres').req;
const req = request({
  session: { name: 'Alice' }
});

it('populates session model with `session` parameter', () => {
  expect(req.sessionModel.get('name')).to.equal('Alice');
});
```
