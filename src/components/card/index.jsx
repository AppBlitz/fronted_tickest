import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  Card,
  IconButton,
  Divider,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";

const Cards = (props) => {
  const navigate = useNavigate();
  const [comment, setComment] = React.useState(0);
  const { handleSubmit, register } = useForm();

  const addComment = (comment) => {
    console.log(comment);
  };
  console.log(props);
  return (
    <Card sx={{ maxWidth: 310 }} className="shadow-lg rounded-lg bg-white">
      {/* Card Image */}
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="Paella dish"
        className="object-cover rounded-t-lg"
      />
      <CardContent className="p-4">
        <Typography
          variant="h6"
          className="font-semibold text-xl text-gray-800"
        >
          {props.nameEvent}
        </Typography>
        <Divider className="my-2" />
        <Typography className="text-gray-600 text-sm">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between items-center p-4">
        {/* Button to navigate */}
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate(`/events/${props.id}`)}
          className="w-full text-white bg-blue-500 hover:bg-blue-600"
        >
          Learn more
        </Button>
        <IconButton >
          <AddShoppingCartIcon />
        </IconButton>


        {/* Comment Link */}
        <a
          className="text-blue-500 cursor-pointer hover:text-blue-700"
          onClick={() => setComment(1)}
        >
          Comentar
        </a>
      </CardActions>

      {comment === 1 && (
        <div className="p-4">
          <form onSubmit={handleSubmit(addComment)}>
            <Textarea
              placeholder="Ingrese el comentario"
              {...register("comment")}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              type="submit"
              variant="contained"
              className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Agregar comentario
            </Button>
          </form>
        </div>
      )}
    </Card>
  );
};

export { Cards };
