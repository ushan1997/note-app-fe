import React, { useState, useEffect } from "react";
import {
  Paper,
  Grid,
  Box, 
  Container,
  CssBaseline,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import axios from "../common/axiosRoute";
import ViewComments from '../../src/components/viewComments'

function ClickedNote(props) {
  console.log(props)
  var noteId = props.noteId;
  const [note, setNote] = useState({});

  useEffect(() => {
    console.log("start");
    axios
      .get(`/note/${noteId}`)
      .then((res) => {
        console.log(res.data.data);
        setNote(res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
        <Grid container>
          <Grid>
            <Grid item xs={12} spacing={2}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                      {note.title}
                    </Typography>
                    <Typography variant="body2" color="black" component="p">
                      <h3>{note.note}</h3>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <br />
        </Grid>
      </Box>
      </Container>
      <ViewComments
      note={note}
      />
    </div>
  );
}

export default ClickedNote;
