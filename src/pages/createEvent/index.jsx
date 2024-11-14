import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { events } from "../../utils";

const CreateEvent = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const createEvent = (event) => {
    console.log(event);
    events.addEvent("/administration/add", event);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit(createEvent)} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold">
            Nombre del evento
          </label>
          <Input
            {...register("nameEvent", {
              required: "El nombre del evento es requerido",
            })}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
          {errors.nameEvent && (
            <span className="text-red-700 text-sm">
              {errors.nameEvent.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold">
            Ciudad del evento
          </label>
          <Input
            {...register("city", { required: "La ciudad es requerida" })}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
          {errors.city && (
            <span className="text-red-700 text-sm">{errors.city.message}</span>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold">Dirección</label>
          <Input
            {...register("adressEvent", {
              required: "La dirección es requerida",
            })}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
          {errors.adressEvent && (
            <span className="text-red-700 text-sm">
              {errors.adressEvent.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold">
            Capacidad del evento
          </label>
          <Input
            {...register("capacity", { required: "La capacidad es requerida" })}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
          {errors.capacity && (
            <span className="text-red-700 text-sm">
              {errors.capacity.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold">
            Capacidad máxima
          </label>
          <Input
            {...register("capacityMax", {
              required: "La capacidad máxima es requerida",
            })}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
          {errors.capacityMax && (
            <span className="text-red-700 text-sm">
              {errors.capacityMax.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold">
            Fecha inicio de la venta
          </label>
          <Input
            type="date"
            {...register("saleStartDate", {
              required: "La fecha de inicio de la venta es requerida",
            })}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">
            Hora inicio de la venta
          </label>
          <Input
            type="time"
            {...register("saleStartTime", {
              required: "La hora de inicio de la venta es requerida",
            })}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">
            Fecha inicio del evento
          </label>
          <Input
            type="date"
            {...register("eventDate", {
              required: "La fecha de inicio del evento es requerida",
            })}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">
            Hora inicio del evento
          </label>
          <Input
            type="time"
            {...register("eventTime", {
              required: "La hora de inicio del evento es requerida",
            })}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">
            Descripción del evento
          </label>
          <Textarea
            {...register("descriptionEvent", {
              required: "La descripción es requerida",
            })}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
          {errors.descriptionEvent && (
            <span className="text-red-700 text-sm">
              {errors.descriptionEvent.message}
            </span>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold">
            Imágenes del evento
          </label>
          <Input
            type="text"
            {...register("imageEvent", {
              required: "Las imágenes son requeridas",
            })}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
          />
        </div>

        <Button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Crear
        </Button>
      </form>
    </div>
  );
};

export { CreateEvent };
