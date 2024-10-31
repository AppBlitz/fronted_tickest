import { Input } from "@nextui-org/react"
import { instance } from "../../utils/api/instance/instance.js"
import { useForm } from "react-hook-form"
const Register = () => {
  const { register, handleSubmit } = useForm();
  const registerUser = (user) => {
    instance({
      method: "POST",
      url: "/users/user/add",
      data: {
        user
      }
    })
  }

  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit(registerUser)}>
            <div>
              <label>Nombre completo</label>
              <Input {...register("fullName", { required: true })} />
            </div>
            <div>
              <label>Correo eléctronico</label>
              <Input {...register("email", { required: true })} />
            </div>
            <div>
              <label>Dirección de residencia</label>
              <Input {...register("address", { required: true })} />
            </div>
            <div>
              <label>Numero telefonico</label>
              <Input {...register("phoneNumber", { require: true })} />
            </div>
            <div>
              <label>Numero de identificación</label>
              <Input {...register("identificationNumber")} />
            </div>
            <div>
              <label>Contraseña</label>
              <Input {...register("password", { required: true })} />
            </div>
            <button>Registrar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export { Register }
