import React from "react";
import { Header, Cards } from "../../components";
import { events } from "../../utils";
import Grid from "@mui/material/Grid2";

const Events = () => {
  const [event, setEvent] = React.useState([]);
  React.useEffect(() => {
    events.getAll("/findAllEvents").then((answer) => {
      if (answer.status == 200) {
        console.log(answer);
        setEvent(answer.data);
      }
    });
  }, []);
  return (
    <>
      <div>
        <Header />
        <Grid container spacing={4} direction="row">
          {event.map((event, index) => (
            <Grid key={index} xs={2}>
              <Cards
                key={index}
                nameEvent={event.nameEvent}
                price={1000}
                stock={100}
                ubication={event.location}
                comments={event.comments}
                description={event.description}
                id={event.id}
                image={event.imageEvent[0]}
              ></Cards>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};
export { Events };
