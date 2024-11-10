import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { users } from "../../utils";
import { Profiles } from "../../components";
const Profile = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const { handleSubmit } = useForm();
  React.useEffect(() => { }, [user]);
  const updateUser = (updateUser) => {
    users.updateUsers("/", updateUser);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-300 to-blue-500">
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg max-w-sm w-full ">
          <div className="flex justify-center ">
            <Profiles />
          </div>
          <form className="space-y-5" onSubmit={handleSubmit(updateUser)}>
            <div>
              <label className="flex justify-center">Nombre completo</label>
              <Input defaultValue={`${user.fullName}`} className="flex justify-center border border-purple-800 rounded-full" />
            </div>
            <div >
              <label className="flex justify-center">Correo eléctronico</label>
              <Input defaultValue={`${user.email}`} className="flex justify-center border border-purple-800 rounded-full" />
            </div>
            <div >
              <label className="flex justify-center">Dirección de residencia</label>
              <Input defaultValue={`${user.address}`} className="flex justify-center border border-purple-800 rounded-full" />
            </div>
            <div >
              <label className="flex justify-center">Telefono</label>
              <Input defaultValue={`${user.phoneNumber}`} className="flex justify-center border border-purple-800 rounded-full" />
            </div>
            <div >
              <label className="flex justify-center">Contraseña</label>
              <Input defaultValue={`${"No se"}`} className="flex justify-center border border-purple-800 rounded-full" />
            </div>
            <div >
              <label className="flex justify-center">Rol</label>
              <Input defaultValue={`${user.rol === "USER" && "Usuario"}`} className="flex justify-center border border-purple-800 rounded-full" />
            </div>
            <Button type="submit" className="w-full bg-gray-300 rounded-full hover:bg-purple-600">Actualizar</Button>
            <Button type="submit" className=" w-full bg-gray-300 rounded-full hover:bg-purple-600">Eliminar</Button>
          </form>
        </div>
      </div>
    </>
  );
};
export { Profile };
