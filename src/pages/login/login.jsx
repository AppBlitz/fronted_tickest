import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { instance } from "../../utils/api/instance/instance.js";
import { useDispatch } from "react-redux";
import { userSlice } from "../../redux";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { addUser } = userSlice;
  const searchUser = (loginUser) => {
    instance({
      method: "POST",
      url: "/users/login",
      data: {
        loginUser,
      },
    }).then((answer) => {
      if (answer.data) {
        dispatch(addUser(answer.data));
      }
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(searchUser)}>
          <div>
            <label>Correo eléctronico</label>
            <Input type="email" {...register("email", { required: true })} />
          </div>
          <div>
            <label>Contraseña</label>
            <Input
              type="password"
              {...register("password", { required: true })}
            />
          </div>
          <button>Ingresar</button>
        </form>
      </div>
    </>
  );
};
export { Login };
