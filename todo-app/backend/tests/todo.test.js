const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Todo = require('../models/Todo');

describe('Todo API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await Todo.deleteMany();
  });

  it('should create a new todo', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({
        title: 'Test Todo',
        description: 'Test Description'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'Test Todo');
  });

  it('should fetch all todos', async () => {
    await Todo.create({ title: 'Test Todo', description: 'Test Description' });
    const res = await request(app).get('/api/todos');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should update a todo', async () => {
    const todo = await Todo.create({ title: 'Test Todo', description: 'Test Description' });
    const res = await request(app)
      .patch(`/api/todos/${todo._id}`)
      .send({
        title: 'Updated Title'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('title', 'Updated Title');
  });

  it('should delete a todo', async () => {
    const todo = await Todo.create({ title: 'Test Todo', description: 'Test Description' });
    const res = await request(app).delete(`/api/todos/${todo._id}`);
    expect(res.statusCode).toEqual(200);
    const deletedTodo = await Todo.findById(todo._id);
    expect(deletedTodo).toBeNull();
  });
});
