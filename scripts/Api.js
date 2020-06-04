class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  getTasks() {
    return fetch(this.url, {
      headers: this.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("Произошла ошибка");
      })

  }

  createTask(data) {
    return fetch(this.url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("Произошла ошибка");
      });
  }

  deleteTask(id) {
    return fetch(`${this.url}/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("Произошла ошибка");
      });
  }
}
