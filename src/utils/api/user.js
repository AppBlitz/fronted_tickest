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
    return instance.post(endpoint + add, {
      email: user.email,
      password: user.password,
      fullName: user.fullName,
      address: user.address,
      state: "ASSET",
      phoneNumber: user.phoneNumber,
      identificationNumber: user.identificationNumber,
      rol: "USER"
    });
  },
  getLogin: function (add, userLogin) {
    return instance.post(endpoint + add, {
      email: userLogin.email,
      password: userLogin.password
    });
  },
  updateUsers: function (add, updateUser) {
    return instance.post(endpoint + add, updateUser);
  },
};
export { users };
