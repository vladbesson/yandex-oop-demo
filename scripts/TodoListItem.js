class TodoListItem {

  static _template = document.querySelector('#todolist-item-template').content;

  constructor(data, addItem, api) {
    this._data = data;
    this._addItem = addItem;
    this._api = api;
  }

  _delClickHandler = () => {
    this._api.deleteTask(this._data.id)
      .then(() => {
        this._view.remove();
      })
      .catch(err => console.log(err));
  }

  _copyClickHandler = () => {
    this._addItem(this._data);
  }

  render = (container) => {
    this._view = TodoListItem._template.cloneNode(true).children[0];
    this._view.querySelector('.todolist-item__text').textContent = this._data.name;
    this._view.querySelector('.todolist-item__id').textContent = this._data.id;
    this._view.querySelector('.todolist-item__del').addEventListener('click', this._delClickHandler);
    this._view.querySelector('.todolist-item__copy').addEventListener('click', this._copyClickHandler);
    container.append(this._view);
  }

}
