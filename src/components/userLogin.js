import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Grid,
  CssBaseline,
  Container,
  Button,
  Card,
  Avatar,
  Box,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "../common/axiosRoute";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function UserLogin(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: userName,
      password: password,
    };
    console.log("data", data);
    axios
      .post("/user/login", data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        alert("Login Successfully");
        window.location = `/viewNote`;
      })
      .catch((err) => {
        console.log(err.message);
        alert("Login Failed");
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
          <h1>Member Login</h1>
          <p>Hi Please Login to</p>
          <form onSubmit={onSubmit}>
            <br />
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                type="username"
                name="username"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <br />
            <Grid item xs={12}>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                fullWidth
                name="password"
                onChange={(e) => setUserName(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
            <br />
            <FormControlLabel
              label="Remeber ME"
              control={
                <Checkbox
                // checked={checked[0] && checked[1]}
                // indeterminate={checked[0] !== checked[1]}
                // onChange={handleChange1}
                />
              }
            />
            <br />
            <Button type="submit" variant="contained" color="primary">
              save
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default UserLogin;
