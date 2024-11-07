import { instance } from "./instance/instance.js";
const endpoint = "/users";
const users = {
  getByEmail: function (add, email) {
    return instance.get(endpoint + add, { params: { email } });
  },
  getAll: function (add) {
    return instance.get(endpoint + add);
  },
  addUser: function (add, user) {
    return instance.post(endpoint + add, user);
  },
  getLogin: function (add, userLogin) {
    return instance.post(endpoint + add, userLogin);
  },
  updateUsers: function (add, updateUser) {
    return instance.post(endpoint + add, updateUser);
  },
};
export { users };
