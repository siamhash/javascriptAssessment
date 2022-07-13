/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

// Assertion style

chai.should();

chai.use(chaiHttp);

describe('user Api', () => {
  describe('POST /Register', () => {
    it('Should create an record', (done) => {
      data = {
        value: 2,
        createdAt: '2022-06-30',
        patientId: 3,
      };
      chai.request(app)
        .post('/Reading')
        .send(data)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          done();
        });
    });
  });
  describe('POST /Register', () => {
    it('Should not create an record', (done) => {
      data = {
        value: null,
        createdAt: '2022-06-30',
        patientId: 3,
      };
      chai.request(app)
        .post('/Reading')
        .send(data)
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });
});
