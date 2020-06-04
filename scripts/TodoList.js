class TodoList {

  static _template = document.querySelector('#todolist-template').content;

  constructor(items, createTodoListForm, createTodoListItem, api) {
    this._items = items;
    this._createTodoListForm = createTodoListForm;
    this._createTodoListItem = createTodoListItem;
    this._api = api;
  }

  _addItem = (data) => {
    this._createTodoListItem(data, this._addItem, this._api).render(this._view);
  }

  //Сохраняем на сервер
  _saveItem = (data) => {
    api.createTask(data)
      .then((item) => {
        this._createTodoListItem(item, this._addItem, this._api).render(this._view);
      })
      .catch(err => console.log(err));
  }

  render = (container) => {
    this._view = TodoList._template.cloneNode(true).children[0];
    this._createTodoListForm(this._saveItem).render(this._view);
    this._items.forEach(item => this._addItem(item));
    container.append(this._view);
  }
}
