import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { users } from "../../utils/api/user.js";
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
      <div>
        <Profiles />
      </div>
      <div>
        <div>
          <form onSubmit={handleSubmit(updateUser)}>
            <div>
              <label>Nombre completo</label>
              <Input defaultValue={`${user.fullName}`} />
            </div>
            <div>
              <label>Correo eléctronico</label>
              <Input defaultValue={`${user.email}`} />
            </div>
            <div>
              <label>Dirección de residencia</label>
              <Input defaultValue={`${user.address}`} />
            </div>
            <div>
              <label>Telefono</label>
              <Input defaultValue={`${user.phoneNumber}`} />
            </div>
            <div>
              <label>Contraseña</label>
              <Input defaultValue={`${"No se"}`} />
            </div>
            <div>
              <label>Rol</label>
              <Input defaultValue={`${user.rol === "USER" && "Usuario"}`} />
            </div>
            <Button type="submit">Actualizar</Button>
            <Button type="submit">Eliminar</Button>
          </form>
        </div>
      </div>
    </>
  );
};
export { Profile };
