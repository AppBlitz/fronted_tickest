import { useForm } from "react-hook-form";
import { Button, Input, Textarea } from "@nextui-org/react";
import { DateInput } from "@nextui-org/react";
import { CalendarDate } from "@internationalized/date";
import React from "react";
import { now, parseAbsoluteToLocal } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";

const CreateEvent = () => {
  const createEvent = (event) => { };
  const { handleSubmit } = useForm();
  const [date, setDate] = React.useState(
    parseAbsoluteToLocal("2021-04-07T18:45:22Z"),
  );
  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit(createEvent)}>
            <div>
              <Input placeholder="Nombre evento" />
            </div>
            <div>
              <Input placeholder="Dirección del evento" />
            </div>
            <div>
              <Input placeholder="Ciudad" />
            </div>
            <div>
              <Textarea placeholder="Ingresar la descipción" />
            </div>
            <div>
              <Input type="number" placeholder="Capacidad máxima" />
            </div>
            <div>
              <Input type="number" placeholder="Capacidad" />
            </div>
            <div>
              <Input type="text" placeholder="Imagen del evento" />
            </div>
            <div>
              <DateInput
                granularity="day"
                label="Date"
                value={date}
                onChange={setDate}
              />
              <DateInput granularity="second" label="Event date" />
            </div>
            <Button type="submit" className="">
              Crear
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export { CreateEvent };
