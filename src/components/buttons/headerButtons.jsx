import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
import Grid from "@mui/material/Grid2"
const Buttons = () => {
  const navigate = useNavigate();
  return (<>
    <Grid container spacing={2} className=" w-48 ">
      <Button className="" variant="outlined" size="small" onClick={() => navigate("/login")}>sesión</Button>
      <Button className="" variant="outlined" size="small" className="" onClick={() => navigate("/register")}>Registro</Button>
    </Grid>
  </>);
}
export { Buttons }
