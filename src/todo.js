const { nanoid } = require('nanoid');

const todos = [
  { id: nanoid(5), todo: 'Do homework', isCompleted: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: nanoid(5), todo: 'Wash the dishes', isCompleted: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: nanoid(5), todo: 'Buy groceries', isCompleted: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: nanoid(5), todo: 'Clean the house', isCompleted: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: nanoid(5), todo: 'Prepare dinner', isCompleted: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: nanoid(5), todo: 'Read a book', isCompleted: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: nanoid(5), todo: 'Write email', isCompleted: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: nanoid(5), todo: 'Exercise', isCompleted: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: nanoid(5), todo: 'Call mom', isCompleted: true, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  { id: nanoid(5), todo: 'Plan trip', isCompleted: false, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
];


module.exports = todos;