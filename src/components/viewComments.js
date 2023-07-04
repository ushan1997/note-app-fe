import React, { useState, useEffect } from "react";
import {
  Paper,
  List,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import axios from "../common/axiosRoute";

function ViewComments(props) {
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    console.log("start");
    axios
      .get(`/comment/all`)
      .then((res) => {
        console.log(res.data.data);
        let data = [];
        res.data.data.map((value, index) => {
          let note = {
            comment: value.comment,
            date: value.date,
            user: value.user.userName,
          };
          data.push(note);
          console.log(data);
        });
        setNoteList(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <Paper
        style={{ height: "80vh", overflowX: "hidden", overflowY: "scroll" }}
      >
        <h2>Notes</h2>
        <p>Dispalyng 1-10 of 21 Notes</p>
        <p>Dispalyng 1-10 of 21 Notes</p>
        <List>
          <Grid container>
            {noteList.map((value, index) => (
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs={12} spacing={2}>
                  <Link
                    underline="none"
                    component={RouterLink}
                    to="/clickedNote"
                  >
                    <Card>
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h4" component="h2">
                            {value.comment}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="black"
                            component="p"
                          >
                            <h3>{value.user}</h3>
                          </Typography>
                          <Typography
                            variant="body2"
                            color="black"
                            component="p"
                          >
                            <h3>{value.date}</h3>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              </Grid>
            ))}
            <br />
          </Grid>
        </List>
        <button
          color="primary"
          variant="contained"
          onClick={() => {
            window.location = `/addComment`;
          }}
        >
          Click
        </button>
      </Paper>
    </div>
  );
}

export default ViewComments;
