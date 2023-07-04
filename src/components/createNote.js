import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "../common/axiosRoute";
import Paper from "@mui/material/Paper";
import {
  Grid,Typography,
  CssBaseline,
  Container,
  Button,
  Card,
  Avatar,
  Box,
} from "@mui/material";

function CreateNote(props) {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  const user = JSON.parse(localStorage.getItem("user"));
  const onSubmit = (e) => {
    e.preventDefault();
console.log(user)
    const data = {
      title: title,
      note: note,
      user: user.user._id,
    };
    console.log("data", data);
    axios
      .post("/note/add", data)
      .then((res) => {
        console.log(res.data);
        alert("Comment Added");
      })
      .catch((err) => {
        console.log(err.message);
        alert("Comment Added Failed");
      });
  };

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
          <div>
            <Typography component="h1" variant="h5">
            Add Note
            </Typography>
            <form onSubmit={onSubmit}>
            <br />
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Title"
                  type="title"
                  fullWidth
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <br />
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  label="Note"
                  type="note"
                  fullWidth
                  name="note"
                  onChange={(e) => setNote(e.target.value)}
                />
              </Grid>
              <br />
              <Button type="submit" variant="contained" color="primary">
                Add Note
              </Button>
            </form>
          </div>
          </Box>
      </Container>
    </div>
  );
}

export default CreateNote;
