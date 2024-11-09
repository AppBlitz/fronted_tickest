import { useForm } from "react-hook-form";
import { Input, Button } from "@nextui-org/react";

const CodeValidator = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const validateCode = (code) => {
    console.log(code);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-300 to-blue-500">
        <div className=" bg-white text-gray-800 p-8 rounded-xl shadow-lg max-w-sm w-full space-y-4 ">
          <h1 className=" flex justify justify-center "> Activar cuenta</h1>
          <form className="space-y-4" onSubmit={handleSubmit(validateCode)}>
            <Input
              type="text"
              placeholder="Código"
              className="justify justify-start "
              {...register("code", { required: true })}
            />
            {errors.code?.type === "required" && (
              <p className="text-sm text-red-500">
                Necesario escribir el código
              </p>
            )}
            <Button
              type="submit"
              className="bg-sky-300 rounded-full w-full hover:bg-purple-500"
            >
              Activar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export { CodeValidator };
