import { CheckBox } from "@mui/icons-material";
import {
  Alert,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { authWithGoogle, register } = useAuthContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
    navigate("/login");
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginTop="200px"
      >
        {error && <Alert severity="error">{error}</Alert>}
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            letterSpacing: "2px",
            fontSize: "32px",
          }}
        >
          Sign up to Store
        </Typography>
        <TextField
          sx={{ marginTop: "30px", width: "40%" }}
          label="email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ marginTop: "30px", width: "40%" }}
          label="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSubmit} sx={{ marginTop: "30px", width: "40%" }}>
          Sign Up
        </Button>
        <Button
          onClick={() => authWithGoogle()}
          sx={{ marginTop: "30px", width: "40%" }}
          variant="contained"
        >
          Continue with Google
        </Button>
        <FormControl>
          <FormControlLabel control={<CheckBox />} label="Remember me" />
        </FormControl>
      </Grid>
    </>
  );
};

export default Register;
