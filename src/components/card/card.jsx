import {
  Card,
  Divider,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom"
const Cards = (props) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 310 }}>
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography>{props.nameEvent}</Typography>
        <Divider />
        <Typography>{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button fullwidth="true" variant="contained" size="small" onClick={() => navigate("events/1")}>
          {" "}
          learn more
        </Button>
      </CardActions>
    </Card>
  );
};

export { Cards };
