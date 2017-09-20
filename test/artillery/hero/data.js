'use strict';

module.exports = {
  generateRandomData
};

const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const name = `${Faker.name.firstName()} ${Faker.name.lastName()}`;
  const id = Faker.random.uuid()
  const saying = Faker.random.word()
  // add variables to virtual user's context:
  userContext.vars.name = name;
  userContext.vars.id = id;
  userContext.vars.saying = saying;
  // continue with executing the scenario:
  return done();
}