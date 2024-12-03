import { Button, Grid, TextField, Typography } from "@mui/material";
import RecoveryIcon from '../../../assets/recovery.png';
import './styles.css';
import { Link } from "react-router-dom";

function Recovery() {
  return (

    
    <div className="recovery-container">
      <div className="recovery-card">
        <div className="container-title-recovery">
          <div className="container-iconLock">
            <img src={RecoveryIcon} alt="lockIcon"></img>
          </div>
          <div>
            <p>Recuperação de senha</p>
          </div>
        </div>
        <div className="form-container">
          <form>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <Typography variant="h4" align="center" gutterBottom>
                  <p className="title-recovery-password">
                   Informe seu email de cadastro do sistema para receber as instruções por email de como mudar a senha
                  </p>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="email"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  style={{ marginTop: "20px" }}
                >
                  Recuperar
                </Button>
                <Link to='/auth'>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  style={{ marginTop: "20px" }}
                  
                >
                  Voltar
                </Button>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>


      </div>
    </div>
  );
}

export default Recovery;
