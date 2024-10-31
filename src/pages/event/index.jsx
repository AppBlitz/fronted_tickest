import React from "react"
import { Header, Cards } from "../../components"
import Grid from "@mui/material/Grid2"

const Events = () => {

  const [event, setEvent] = React.useState([]);
  const events = [
    {
      nameEvent: "Basketball",
      imagenEvent: ["https://nextui.org/images/hero-card-complete.jpeg"],
      description: "El evento es algo",
    },

    {
      nameEvent: "Basketball",
      imagenEvent: ["https://nextui.org/images/hero-card-complete.jpeg"],
      description: "El evento es algo",
    },

    {
      nameEvent: "Basketball",
      imagenEvent: ["https://nextui.org/images/hero-card-complete.jpeg"],
      description: "El evento es algo",
    },

    {
      nameEvent: "Basketball",
      imagenEvent: ["https://nextui.org/images/hero-card-complete.jpeg"],
      description: "El evento es algo",
    },

    {
      nameEvent: "Basketball",
      imagenEvent: ["https://nextui.org/images/hero-card-complete.jpeg"],
      description: "El evento es algo",
    },
  ];
  React.useEffect(() => {
    setEvent(events);
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
                ubication={"Cordoba"}
                comments={""}
                image={event.imagenEvent[0]}
                description={event.description}
              ></Cards>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
export { Events }
