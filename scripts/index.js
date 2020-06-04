const config = {
  url: 'http://localhost:3000/tasks',
  headers: {
    'Content-Type': 'application/json'
  }
};

const page = document.querySelector('.page');
const createTodoListForm = (...arg) => new TodoListForm(...arg);
const createTodoListItem = (...arg) => new TodoListItem(...arg);


const api = new Api(config);
api.getTasks().then(res => {
  const todoList = new TodoList(res, createTodoListForm, createTodoListItem, api);
  todoList.render(page);
});
