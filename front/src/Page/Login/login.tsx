import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
// import LockIcon from "@mui/icons-material/Lock";

import LockIcon from "../../assets/lock.png";

import "./styles.css";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="container-title-login">
          <div className="container-iconLock">
            <img src={LockIcon} alt="lockIcon"></img>
          </div>
          <div>
            <p>acesso restrito</p>
          </div>
        </div>

        <div className="form-container">
          <form>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <Typography variant="h4" align="center" gutterBottom>
                  LOGIN
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Nome de Usuário"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type={showPassword ? "text" : "password"}
                  label="Senha"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button onClick={handleTogglePassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  style={{marginTop : "20px"}}
                >
                  Entrar
                </Button>
              </Grid>
            </Grid>
          </form>
          <Link to="" className="esqueceu-senha">Esqueceu a senha?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
