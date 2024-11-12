import { Input, Button } from "@nextui-org/react"
import { useForm } from "react-hook-form"
import { users } from "../../utils"
import { useNavigate } from "react-router-dom"
import React from "react"
const PasswordRecovery = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const [recoveryPasswords, setRecoveryPassword] = React.useState(0)
  const [user, setUser] = React.useState()
  //FIX: Organized function 
  const passwordRecovery = (email) => {
    users.recoveryPassword("", email)
      .then((answer) => {
        if (answer.status == 200) {
          setRecoveryPassword(1);
          setUser(answer.data)
        }
      })
  }
  const verificationCode = (code) => {
    if (user.code === code) {
      setRecoveryPassword(2);
    }
    else {
      //FIX: Organized alert
      alert("")
    }
  }
  const updatePassword = (passwords) => {
    if (passwords.password == passwords.verificationPassword) {
      users.updateUsers("", createUser(passwords))
        .then((answer) => {
          if (answer.status == 200) {
            navigate("/login");
            setUser(null);
          }
        })
    }
  }
  const createUser = (passwords) => {
    const users = {
      fullName: user.fullName,
      address: user.address,
      phoneNumber: user.phoneNumber,
      identificationNumber: user.identificationNumber,
      password: passwords.password,
      id: user.id
    }
    return users;
  }

  return <>
    <div className="">
      <div className="">
        {
          recoveryPasswords == 0 ?
            <form onSubmit={handleSubmit(passwordRecovery)}>
              <div>
                <label>Correo eléctronic</label>
                <Input className="" {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
                {errors.email?.type === "required" && <p className="text-red-700"> El correo campo no puede estar vacio</p>}
                {errors.email?.type === "pattern" && <p className="text-red-700">El correo es invalido</p>}
              </div>
              <Button type="submit" > verificar</Button>
            </form>
            : recoveryPasswords == 1 ? <div>
              <form onSubmit={handleSubmit(verificationCode)}>
                <div className="">
                  <label className="">Correo eléctronico</label>
                  <Input className="" {...register("email", { required: true })} />
                </div>
                <div className="">
                  <label className="">Código</label>
                  <Input className="" {...register("code", { required: true })} />
                </div>
                <Button type="submit">veritificar</Button>
              </form>
            </div>
              : <div>
                <form onSubmit={handleSubmit(updatePassword)}>
                  <div>
                    <label>Ingrese la contraseña</label>
                    <Input className="" {...register("password", { required: true })} />
                  </div>
                  <div>
                    <label>Vuelva a ingresar la contraseña</label>
                    <Input className="" {...register("verificationPassword", { required: true })} />
                  </div>
                  <Button className="" type="submit">Cambiar contraseña</Button>
                </form>
              </div>
        }
      </div>
    </div>
  </>;
};
export { PasswordRecovery };
