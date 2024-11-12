import { jwtDecode } from "jwt-decode";
import { Input, Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { /* useSelector, */ useDispatch } from "react-redux";
import { addUser } from "../../redux/slice/userSlice.js";
import { users } from "../../utils";
import { useNavigate } from "react-router-dom";
import { setItem } from "../../utils";
import React from "react";

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const example = (user) => {
    console.log(user);
    const users = {
      fullName: user.nombre,
      address: user.address,
      rol: user.rol,
      email: user.sub,
      phoneNumber: user.phone,
      id: user.id,
      password: user.password,
    };
    setItem("user", users);
    dispatch(addUser(users));
  };
  // const use = useSelector((state) => state.user)
  const searchUser = (loginUser) => {
    setLoading(true);
    users
      .getLogin("/login", loginUser)
      .then((answer) => {
        const token = jwtDecode(answer.data.respuesta.Token);
        example(token);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-300 to-blue-500">
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg max-w-sm w-full">
          <form onSubmit={handleSubmit(searchUser)} className="space-y-6">
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Correo electrónico
              </label>
              <Input
                type="email"
                {...register("email", {
                  required: "El correo eléctronico es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Correo electrónico no válido",
                  },
                })}
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Contraseña
              </label>
              <Input
                type="password"
                {...register("password", { required: true })}
                className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <a
                onClick={() => navigate("/password/recovery")}
                className="text-blue-500 hover:cursor-pointer"
              >
                ¿Recuperar contraseña?
              </a>
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {loading ? "...Cargando" : "Ingresar"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Login };
