import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import useStyles from "./styles";

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleShowPassword = () =>
    setShowPassword((prevShowPasword) => !prevShowPasword);

  const handleSubmit = () => {};

  const handleChange = () => {};

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  return (
    <Container component={"main"} maxWidth={"xs"}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant={"5h"}>
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name={"firstName"}
                  lable={"First Name"}
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name={"firstName"}
                  lable={"First Name"}
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name={"email"}
              lable={"Email Address"}
              type={"email"}
              handleChange={handleChange}
            />
            <Input
              name={"password"}
              lable={"Password"}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name={"confirmPassword"}
                label={"Repeat Password"}
                type={"password"}
                handleChange={handleChange}
              />
            )}
          </Grid>
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>

          <Grid container justify={"flex-end"}>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
