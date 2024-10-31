import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { events } from "../../utils/api";
// import Grid from "@mui/material/Gridv2"
import { Container, Box, } from "@mui/material"
const DescriptionEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState();
  useEffect(() => {
    events.getById("" + id).then((answer) => {
      setEvent(answer.data);
    });
  }, []);
  return <>
    <Box>
      <Container>

      </Container>

    </Box>

  </>;
};
export { DescriptionEvent };
