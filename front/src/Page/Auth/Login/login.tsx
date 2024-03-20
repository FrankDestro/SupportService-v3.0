import "./styles.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import { useState } from "react";
import LockIcon from "../../../assets/lock.png";
import { Link, useNavigate } from "react-router-dom";
import { CredentialsDTO } from "../../../models/auth";
import * as authService from '../../../services/auth-service';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const [formData, setformData] = useState<CredentialsDTO> ({
    username : '',
    password : ''
  })

  function handleInputChange(event : any) {
    const value = event.target.value;
    const name = event.target.name;
    setformData({...formData, [name] : value})
  }

  function handleSubmit (event : any) {
    event.preventDefault();
    authService.LoginRequest(formData)
    .then(response => {
      authService.saveAccessToken(response.data.access_token);
      navigate("/");
    }).catch(error => {
      console.log("Erro no login", error)
    })
  }

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
          <form onSubmit={handleSubmit}>
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
                  name="username"
                  value = {formData.username}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type={showPassword ? "text" : "password"}
                  label="Senha"
                  variant="outlined"
                  fullWidth
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
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
          <Link to="recovery" className="esqueceu-senha">Esqueceu a senha?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
