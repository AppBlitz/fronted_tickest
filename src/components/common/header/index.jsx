import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useMatches } from "react-router-dom";
import { useSelector } from "react-redux";
import { Profiles, Search } from "../index.js";
import { Buttons } from "../../buttons";


const Header = () => {
  const events = useSelector((state) => state.cart)
  const user = useSelector((state) => state.user);
  const matches = useMatches().at();
  const { pathname } = matches;

  return (
    <div className="w-full pt-6 mt-0 flex justify-between items-center">
      {/* Sección de búsqueda centrada */}
      <div className="flex-grow flex justify-center">
        <div className="border border-orange-600 w-80">
          <Search className="flex justify-center" />
        </div>
      </div>

      {/* Carrito de compras y botones de registro o perfil */}
      <div className="flex items-center space-x-4">
        {/* Carrito de compras */}
        <div>
          <Badge color="error" badgeContent={events.length}>
            <ShoppingCartOutlinedIcon />
          </Badge>
        </div>

        {/* Condición para mostrar los botones de registro o el perfil */}
        {user.fullName === null && pathname === "/" ? (
          <Buttons />
        ) : (
          <Profiles />
        )}
      </div>
    </div>
  );
};

export { Header };
