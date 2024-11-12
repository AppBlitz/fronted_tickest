import {
  Box,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { events } from "../../utils";
import React from "react";
const DescriptionEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState();
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    events.getById("" + id).then((answer) => {
      setEvent(answer.data);
      setLoading(false);
    });
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
      <Container maxWidth="xl">
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid sx={{ mt: 2 }} container columnSpacing={2}>
            <Grid item xs={6}>
              <Typography variant="h1">{event.name}</Typography>
              <Divider />
              <Typography variant="h6">{event.origin.name}</Typography>
              <Box sx={{ mt: 2 }}>
                <Chip color="primary" variant="outlined" label={event.status} />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <img
                src={event.image}
                style={{ width: "100%", borderRadius: "0.5em" }}
              />
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};
export { DescriptionEvent };
