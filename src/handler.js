const { nanoid } = require('nanoid');
const todos = require('./todo');

const addTodoHandler = (request, h) => {
  const { todo, isCompleted } = request.payload;
  const id = nanoid(5);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newTodo = { id, todo, isCompleted, createdAt, updatedAt };

  todos.push(newTodo);
  const isSuccess = todos.some((todo)=> todo.id === id);
  if (isSuccess){
    const response = h.response({
      status: 'success',
      data: {
        id,
        todo,
        isCompleted,
        createdAt,
        updatedAt
      }
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal menambahkan todo'
  });
  response.code(500);
  return response;
};

const getAllTodosHandler = () => ({
  todos
});

const getTodoByIdHandler = (request, h) => {
  const { id } = request.params;
  const todo = todos.filter((todo) => todo.id === id)[0];
  if (todo !== undefined) {
    const response = h.response({
      status: 'success',
      data: {
        todo
      }
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Todo tidak ditemukan!'
  });
  response.code(404);
  return response;
};

const editTodoByIdHandler = (request, h) => {
  const { id } = request.params;
  const { todo, isCompleted } = request.payload;
  const updatedAt = new Date().toDateString();
  const index = todos.findIndex((todo)=> todo.id === id);

  if (index !== -1){
    todos[index] = {
      ...todos[index],
      todo,
      isCompleted,
      updatedAt
    };

    const response = h.response({
      status: 'success',
      message: 'Todo berhasil diperbarui'
    });
    response.code(200);
    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui todo. Id todo tidak ditemukan!'
  });
  response.code(404);
  return response;

};

const deleteTodoByIdHandler = (request, h) => {
  const { id } = request.params;
  const index = todos.filter((todo) => todo.id === id)[0];
  todos.splice(index, 1);

  if (!index){
    const response = h.response({
      status: 'fail',
      message: 'Gagal menghapus todo. Id todo tidak ditemukan!'
    });
    response.code(404);
    return response;
  }
  const response = h.response({
    status: 'success',
    message: 'Todo berhasil dihapus'
  });
  response.code(200);
  return response;
};
module.exports = { addTodoHandler, getAllTodosHandler, getTodoByIdHandler, editTodoByIdHandler, deleteTodoByIdHandler };