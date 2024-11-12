//WARNING: Falta el header
import { Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { users } from "../../utils";
import { useNavigate } from "react-router-dom";
import React from "react";
const PasswordRecovery = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [recoveryPasswords, setRecoveryPassword] = React.useState(0);
  const [user, setUser] = React.useState();
  const [erro, setError] = React.useState(0);
  //FIX: Organized function
  const passwordRecovery = (email) => {
    users.recoveryPassword("", email).then((answer) => {
      if (answer.status == 200) {
        setRecoveryPassword(1);
        setUser(answer.data);
      } else {
        setError(1);
      }
    });
  };
  const verificationCode = (code) => {
    if (user.code === code) {
      setRecoveryPassword(2);
    } else {
      //FIX: Organized alert
      alert("");
    }
  };
  const updatePassword = (passwords) => {
    if (passwords.password == passwords.verificationPassword) {
      users.updateUsers("", createUser(passwords)).then((answer) => {
        if (answer.status == 200) {
          navigate("/login");
          setUser(null);
        }
      });
    } else {
      setRecoveryPassword(2);
    }
  };
  const createUser = (passwords) => {
    const users = {
      fullName: user.fullName,
      address: user.address,
      phoneNumber: user.phoneNumber,
      identificationNumber: user.identificationNumber,
      password: passwords.password,
      id: user.id,
    };
    return users;
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-300 to-blue-500">
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg max-w-sm w-full">
          <h1 className="flex justify-center">
            {"Recuperación de contraseña"}
          </h1>
          <br />
          {recoveryPasswords == 0 ? (
            <form
              onSubmit={handleSubmit(passwordRecovery)}
              className="space-y-4"
            >
              <div>
                <label className="flex justify-center">
                  {"Correo eléctronico"}
                </label>
                <Input
                  className="flex justify-center"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-700">
                    {"El correo campo no puede estar vacio "}
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="text-red-700">{"El correo es invalido"}</p>
                )}
                {erro == 1 && (
                  <span className="text-red-700">
                    {"Verifica que el correo este correcto"}
                  </span>
                )}
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-gray-500 pt-2 items-center"
              >
                {"verificar "}
              </Button>
            </form>
          ) : recoveryPasswords == 1 ? (
            <div>
              <form onSubmit={handleSubmit(verificationCode)}>
                <div className="">
                  <label className="">Correo eléctronico</label>
                  <Input
                    type="email"
                    className=""
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="">
                  <label className="">Código</label>
                  <Input
                    className=""
                    {...register("code", { required: true })}
                  />
                </div>
                <Button
                  type="submit"
                  clasName="bg-gray-500 pt-2 rounded-full w-full items-center"
                >
                  {"Veiricar"}
                </Button>
              </form>
            </div>
          ) : (
            <div>
              <form onSubmit={handleSubmit(updatePassword)}>
                <div>
                  <label>{"Ingrese la contraseña"}</label>
                  <Input
                    type="password"
                    className=""
                    {...register("password", { required: true })}
                  />
                </div>
                <div>
                  <label>{"Vuelva a ingresar la contraseña"}</label>
                  <Input
                    type="password"
                    className=""
                    {...register("verificationPassword", { required: true })}
                  />
                </div>
                {recoveryPasswords == 2 && (
                  <span className="text-red-700">
                    {"Las contraseñas no coinciden "}
                  </span>
                )}
                <Button
                  className="bg-gray-500 w-full rounded-full pt-2 items-center"
                  type="submit"
                >
                  {"Cambiar contraseña"}
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export { PasswordRecovery };
