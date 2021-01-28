class Api {
    constructor(config) {
      /** тело конструктора*/
      this.baseUrl = config.baseUrl;
      this.headers = config.headers;
    }
  
      //test comments
    _getResponseData(value) {
      if (value.ok) {
        return value.json();
      } else {
        return Promise.reject(`Ошибка: ${value.status}`);
      }
    }
  
    getProfileInfo() {
      return fetch(`${this.baseUrl}/users/me`, {
        headers: this.headers,
      }).then((res) => {
        return this._getResponseData(res);
      });
    }
  
    getInitialCards() {
      return fetch(`${this.baseUrl}/cards`, {
        headers: this.headers,
      }).then((res) => {
        return this._getResponseData(res);
      });
    }
  
    setNewProfile(profileInfo) {
      return fetch(`${this.baseUrl}/users/me`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify(profileInfo),
      }).then((res) => {
        return this._getResponseData(res);
      });
    }
  
    postCardOnTheServer(newCard) {
      return fetch(`${this.baseUrl}/cards`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(newCard),
      }).then((res) => {
        return this._getResponseData(res);
      });
    }
  
    changeAvatar(link) {
      return fetch(`${this.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify(link),
      }).then((res) => {
        return this._getResponseData(res);
      });
    }
  
    deleteCard(cardID) {
      return fetch(`${this.baseUrl}/cards/${cardID}`, {
        method: "DELETE",
        headers: this.headers,
      });
    }
  
    putLike(cardId) {
      return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: this.headers,
      })
        .then((res) => {
          return this._getResponseData(res);
        })
        .then((data) => {
          return data;
        });
    }
  
    deleteLike(cardId) {
      return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: this.headers,
      })
        .then((res) => {
          return this._getResponseData(res);
        })
        .then((data) => {
          return data;
        });
    }
  }
  
  const apiPraktikum = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-17",
    headers: {
      authorization: "2be0f169-5c86-4181-b303-3b009feba466",
      "Content-Type": "application/json",
    },
  });
  
  export default apiPraktikum;
  