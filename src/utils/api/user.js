import { instance } from "./instance/instance.js";
const endpoint = "/users";
const users = {
  getByEmail: function (add, email) {
    return instance.get(endpoint + add, { email });
  },
  getAll: function (add) {
    return instance.get(endpoint + add)
  },
  addUser: function (add, user) {
    return instance.post(endpoint + add, { user });
  },
  getLogin: function (add, userLogin) {
    return instance.post(endpoint + add, { userLogin });
  },
};
export { users };
