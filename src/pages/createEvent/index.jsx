import { useForm } from "react-hook-form";
import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";

const CreateEvent = () => {
  const createEvent = (event) => {};
  const { handleSubmit } = useForm();
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
            <div></div>
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
