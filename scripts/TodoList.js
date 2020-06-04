class TodoList {

  static _template = document.querySelector('#todolist-template').content;

  constructor(data, createTodoListForm, createTodoListItem, api) {
    this._data = data;
    this._createTodoListForm = createTodoListForm;
    this._createTodoListItem = createTodoListItem;
    this._api = api;
  }

  _addItem = (data) => {
    this._createTodoListItem(data, this._addItem, this._api).render(this._view);
  }

  _saveItem = (data) => {
    this._api.createTask(data)
      .then((obj) => {
        this._createTodoListItem(obj, this._addItem, this._api).render(this._view);
      })
      .catch(err => console.log(err));
  }

  render = (container) => {
    this._view = TodoList._template.cloneNode(true).children[0];
    this._createTodoListForm(this._saveItem).render(this._view);
    this._data.forEach(item => this._addItem(item));
    container.append(this._view);
  }

}
