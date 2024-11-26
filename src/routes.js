const { addTodoHandler, getAllTodosHandler, getTodoByIdHandler, editTodoByIdHandler, deleteTodoByIdHandler } = require('./handler');

const routes = [
  {
    method: 'post',
    path: '/todos',
    handler: addTodoHandler,
  },
  {
    method: 'get',
    path: '/todos',
    handler: getAllTodosHandler
  },
  {
    method: 'get',
    path: '/todo/{id}',
    handler: getTodoByIdHandler
  },
  {
    method: 'put',
    path: '/todo/{id}',
    handler: editTodoByIdHandler,
  },
  {
    method: 'delete',
    path: '/todo/{id}',
    handler: deleteTodoByIdHandler,
  }
];

module.exports = routes;