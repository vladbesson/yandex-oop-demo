class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getTasks() {
    return fetch(`${this.baseUrl}`, {
      headers: this.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  delTask(id) {
    return fetch(`${this.baseUrl}/${id}`, {
      method: "DELETE",
      headers: this.headers
    });
  }

  createTask(data) {
    return fetch(`${this.baseUrl}`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.ok) {
          return Promise.resolve(res.json());
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
};
