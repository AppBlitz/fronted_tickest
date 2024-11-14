import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
const Cart = (props) => {
  return (
    <Card>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={props.imageEvent}
      />
      <CardContent>
        <Typography >{`cantidad ${""}`}</Typography>
        <Divider />
      </CardContent>
      <CardActions>
        <IconButton onCLick={() => console.log("")}>
          <RemoveShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
export { Cart }
