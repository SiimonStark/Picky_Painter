// import request from 'supertest';
// import app from './app';
const environment = process.env.NODE_ENV || 'test';
const configuration = require('./knexfile')[environment];
// const database = require('knex')(configuration);

describe('Server', () => {
  beforeEach(async () => {

  })


  describe('init', () => {
    it.skip('should return a 200 status', async () => {
      
    })
  })

  describe('GET /students', () => {
    it.skip('should return all the students in the DB', async () => {
      
    })
  })

  describe('GET /students/:id', () => {
    it.skip('should get a single student with the id in the params', async () => {
      
    })
  })

  describe('POST /students', () => {
    it.skip('should Post a single student to the database', async () => {
      
    })
  })

  describe('PUT /students/:id', () => {
    it('should change one of the current students in the database', async () => {
      
    })
  })

  describe('DELETE /students', () => {
    it('should remove the student from database by id', async () => {
      
    })
  })
})