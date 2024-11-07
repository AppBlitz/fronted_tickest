import { Input, Button } from "@nextui-org/react"
const Search = () => {
  return <>
    <Input
      type="text"
      placeholder="Buscar ubication"
      className="w-48"
    />
    <Button className="" onClick={() => alert("Click desde el boton ")}>Ingresar algo</Button>
  </>

};

export { Search };
