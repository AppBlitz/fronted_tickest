import { instance } from "./instance/instance.js";
const endpoint = "event";

const events = {
  getAll: function (add) {
    return instance.get(`${endpoint}/${add}`);
  },
  getById: function (add) {
    return instance.get(endpoint + add);
  },
  addEvent: function (event, add) {
    instance({
      method: "POST",
      url: `${endpoint}/${add}`,
      data: {
        event,
      },
    }).catch((error) => {
      console.error(error);
    });
  },
  deleteEvent: function (add, id) {
    return instance({
      method: "DELETE",
      url: `${endpoint}/${add}/${id}`,
    });
  },
  editEvent: function (add, userUpdate) {
    return instance({
      method: "PUT",
      url: `${endpoint}/${add}`,
      data: { userUpdate },
    });
  },
  findByName: function (add, nameEvent) {
    return instance.get(`${endpoint}/${add}/${nameEvent}`);
  },
  findByCity: function (add) {
    return instance.get(`${endpoint}/${add}`);
  },
};
export { events };
