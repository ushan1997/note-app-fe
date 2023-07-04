import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Grid,
  CssBaseline,
  Container,
  Button,
  Card,
  Avatar,
  Box,
} from "@mui/material";
import axios from "../common/axiosRoute";

function AddComment(props) {
  var note = props.note;
  const [comment, setComment] = useState("");
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  const user = JSON.parse(localStorage.getItem("user"));
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      date: `${day}-${month}-${year}`,
      comment: comment,
      user: user.user._id,
      note: note.note._id,
    };
    console.log("data", data);
    axios
      .post("/comment/add", data)
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
          <h1>Add Comment</h1>
          <form onSubmit={onSubmit}>
            <br />
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Comment"
                type="comment"
                fullWidth
                name="comment"
                onChange={(e) => setComment(e.target.value)}
              />
            </Grid>
            <br />
            <Button type="submit" variant="contained" color="primary">
              Add Comment
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default AddComment;
