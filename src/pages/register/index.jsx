import { Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { users } from "../../utils/api/user.js";
const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const registerUser = (user) => {
    users
      .addUser("/user/add", user)
      .then((answer) => {
        console.log(answer);
        navigate("/code/validator");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-300 to-blue-500">
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg max-w-sm -w-full">
          <h1 className="text-xl">Registro</h1>
          <form className="space-y-6" onSubmit={handleSubmit(registerUser)}>
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Nombre completo
              </label>
              <Input
                className="border border-gray-500"
                placeholder="Nombre completo"
                {...register("fullName", { required: true })}
              />
            </div>
            <div>
              <label>Correo eléctronico</label>
              <Input
                className="border border-gray-500"
                isRequired
                type="email"
                placeholder="Correo eléctronico"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label>Dirección de residencia</label>
              <Input
                className="border border-gray-500"
                placeholder="Dirección de residencia"
                {...register("address", { required: true })}
              />
            </div>
            <div>
              <label>Numero telefonico</label>
              <Input
                className="border border-gray-500"
                placeholder="Número de telefono"
                {...register("phoneNumber", { require: true })}
              />
            </div>
            <div>
              <label>Numero de identificación</label>
              <Input
                className="border border-gray-500"
                placeholder="Número de identificación"
                {...register("identificationNumber")}
              />
            </div>
            <div>
              <label>Contraseña</label>
              <Input
                className="border border-gray-500"
                type="password"
                placeholder="Contraseña"
                size="sm"
                {...register("password", { required: true })}
              />
            </div>
            <Button className="bg-sky-500 rounded-full w-full hover:bg-emerald-400">
              Registrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export { Register };
