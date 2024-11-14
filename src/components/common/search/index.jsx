
import { Input, Button } from "@nextui-org/react";

const Search = () => {
  return (
    <div className="flex items-center space-x-2">
      <Input
        type="text"
        placeholder="Buscar ubicación"
        className="w-48"
      />
      <Button onClick={() => alert("Click desde el boton")}>
        Algo
      </Button>
    </div>
  );
};

export { Search };
