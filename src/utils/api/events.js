import { instance } from "./instance/instance.js";
import { getItem } from "../localStorage";
const endpoint = "event";
const images = [];
const events = {
  getAll: function (add) {
    return instance.get(endpoint + add);
  },
  getById: function (add, id) {
    return instance.post(
      endpoint + add,
      {
        id: id,
      },
      {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      },
    );
  },
  addEvent: function (add, event) {
    images.push(event.imageEvent)
    return instance.post(
      endpoint + add,
      {
        nameEvent: event.nameEvent,
        adressEvent: event.adressEvent,
        city: event.city,
        descriptionEvent: event.descriptionEvent,
        eventType: "SPORT",
        imageEvent: images,
        eventDate: event.eventDate,
        eventTime: event.eventTime,
        saleStartDate: event.saleStartDate,
        saleStartTime: event.saleStartTime,
        locality: null,
        capacityMax: Number(event.capacityMax),
        capacity: Number(event.capacity),
        comments: [],
        stateEvent: "ASSET",
      },
      {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      },
    );
  },
  deleteEvent: function (add, id) {
    return instance({
      method: "DELETE",
      url: endpoint + add + id,
    });
  },
  editEvent: function (add, updateEvent) {
    return instance.put(
      endpoint + add,
      {
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
      },
      {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      },
    );
  },
  findByName: function (add, nameEvent) {
    return instance.get(endpoint + add + "/" + nameEvent);
  },
  findByCity: function (add) {
    return instance.get(endpoint + add);
  },
  addComment: function (add, idEvent, comment) {
    return instance.post(
      endpoint + add,
      {
        idEvent: idEvent,
        comment: comment,
      },
      {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      },
    );
  },
};

export { events };
