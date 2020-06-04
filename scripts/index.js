const items = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars'
];

const page = document.querySelector('.page');
const createTodoListForm = (...arg) => new TodoListForm(...arg);
const createTodoListItem = (...arg) => new TodoListItem(...arg);
// const todoList = new TodoList(items, createTodoListForm, createTodoListItem);
// todoList.render(page);

const api = new Api({
  baseUrl: 'https://api-test.pa7lux.ru/streams',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.getTasks().then(data => {
  const todoList = new TodoList(data.map(item => ({name: item.name, id: item.id})), createTodoListForm, createTodoListItem, api);
  todoList.render(page);
}).catch(err => console.log(err));
