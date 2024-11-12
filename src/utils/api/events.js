import { instance } from "./instance/instance.js";
const endpoint = "event";

const events = {
  getAll: function (add) {
    return instance.get(endpoint + add);
  },
  getById: function (add) {
    return instance.get(endpoint + add);
  },
  addEvent: function (event, add) {
    instance({
      method: "POST",
      url: endpoint + add,
      data: {
        nameEvent: event.nameEvent,
        adressEvent: event.adressEvent,
        city: event.city,
        descriptionEvent: event.descriptionEvent,
        eventType: event.eventType,
        imageEvent: event.imageEvent,
        eventDate: event.eventDate,
        eventTime: event.eventTime,
        saleStartDate: event.saleStartDate,
        saleStartTime: event.saleStartTime,
        locality: event.locality,
        capacityMax: event.capacityMax,
        capacity: event.capacity,
        comments: event.comments,
        stateEvent: event.stateEvent,
      },
    }).catch((error) => {
      console.error(error);
    });
  },
  deleteEvent: function (add, id) {
    return instance({
      method: "DELETE",
      url: endpoint + add + id,
    });
  },
  editEvent: function (add, updateEvent) {
    return instance.put(endpoint + add, {
      nameEvent: updateEvent.nameEvent,
      adressEvent: updateEvent.adressEvent,
      city: updateEvent.city,
      descriptionEvent: updateEvent.descriptionEvent,
      eventType: updateEvent.eventType,
      imageEvent: updateEvent.imageEvent,
      eventDate: updateEvent.eventDate,
      eventTime: updateEvent.eventTime,
      saleStartDate: updateEvent.saleStartDate,
      saleStartTime: updateEvent.saleStartTime,
      locality: updateEvent.locality,
      capacityMax: updateEvent.capacityMax,
      capacity: updateEvent.capacity,
      comments: updateEvent.comments,
      stateEvent: updateEvent.stateEvent,
      id: updateEvent.id,
    });
  },
  findByName: function (add, nameEvent) {
    return instance.get(endpoint + add + "/" + nameEvent);
  },
  findByCity: function (add) {
    return instance.get(endpoint + add);
  },
};
export { events };
