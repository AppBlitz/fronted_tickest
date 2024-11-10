import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { events } from "../../utils";
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
