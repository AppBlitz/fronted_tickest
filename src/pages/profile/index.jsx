import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { users } from "../../utils/api/user.js";
const Profile = () => {
  const user = useDispatch((state) => state.user);
  const { handleSubmit } = useForm();
  React.useEffect(() => { }, [user]);
  const updateUser = (updateUser) => {
    users.updateUsers("", updateUser);
  };
  return (
    <>
      <div>
        <a>Perfil</a>
      </div>
      <div>
        <div>
          <form onSubmit={handleSubmit(updateUser)}>
            <div>
              <label>Nombre completo</label>
              <Input defaultValue="Carlos Fabian Corrales Zapata" />
            </div>
            <div>
              <label>Correo eléctronico</label>
              <Input defaultValue="carl@gmail.com" />
            </div>
            <div>
              <label>Dirección de residencia</label>
              <Input defaultValue="manzana I casa 13" />
            </div>
            <div>
              <label>telefonico</label>
              <Input defaultValue="3015553432" />
            </div>
            <div>
              <label>Contraseña</label>
              <Input defaultValue="Contraseña" />
            </div>
            <div>
              <label>Estado</label>
              <Input defaultValue="Activa" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export { Profile };
