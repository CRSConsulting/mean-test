const axios = require('axios');

module.exports = {
  getUser(username) {
    return axios
      .get(`https://api.github.com/users/${username}`)
      .then(res => res.data)
      .catch(error => console.log(error));
  },
};
