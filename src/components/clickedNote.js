import React, { useState, useEffect } from "react";
import {
  Paper,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import axios from "../common/axiosRoute";

function ClickedNote(props) {
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
      <Paper
        style={{ height: "80vh", overflowX: "hidden", overflowY: "scroll" }}
      >
        <Grid container>
          <Grid container wrap="nowrap" spacing={2}>
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
      </Paper>
    </div>
  );
}

export default ClickedNote;
