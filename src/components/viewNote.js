import React, { useState, useEffect } from "react";
import {
  Paper,
  List,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Link
} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'
import axios from "../common/axiosRoute";

function ViewNote(props) {

  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    console.log("start")
    axios.get(`/note/all`)
        .then((res) => {
            console.log(res.data.data)
            let data = [];
            res.data.data.map((value, index) => {
                let note = {
                    title: value.title,
                    note: value.note,
                }
                data.push(note);
                console.log(data)
            })
            setNoteList(data);
        })
        .catch(err => console.log(err.message))
}, []);
  
  return (
    <div>
      <Paper
        style={{ height: "80vh", overflowX: "hidden", overflowY: "scroll" }}
      >
        <h2>Notes</h2>
        <p>Dispalyng 1-10 of 21 Notes</p>
        <p>Dispalyng 1-10 of 21 Notes</p>
        <button
                    // type="button"
                    color="primary"
                    variant="contained" 
                    onClick={() =>  {window.location = `/createNote`}}
                  >
                    Click
                  </button>
        <List>
          <Grid container>
            {noteList.map((value, index) => (
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs={12} spacing={2}>
                <Link underline='none' component={RouterLink} to='/clickedNote'>
                  <Card>
                    <CardActionArea >
                      <CardContent >
                        <Typography gutterBottom variant="h4" component="h2">
                          {value.title}
                        </Typography>
                        <Typography variant="body2" color="black" component="p">
                          <h3>
                            {value.note}
                          </h3>
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
      </Paper>
    </div>
  );
}

export default ViewNote;
