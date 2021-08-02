/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useHistory } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  ListItem,
  Button,
  Avatar,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { useAuth } from "../../hooks/useAuth";

// eslint-disable-next-line no-undef
export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const { user, logOut } = useAuth();

  function handleLogin() {
    logOut();
    history.push("/");
  }
  function handleHome() {
    history.push("/home");
  }
  function handleFavorites() {
    history.push("/favorites");
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          <ListItem>
            <Avatar className={classes.icon} src={user?.avatar} />
            <Typography className={classes.title} color="inherit" noWrap>
              Bem vind@, {user?.name} <br />
              <strong className={classes.titleuser}></strong>
            </Typography>
          </ListItem>
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleFavorites}
            className={classes.button}>
            Favoritos
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleHome}
            className={classes.button}>
            Voltar
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleLogin}
            className={classes.button}>
            Sair
          </Button>

        </Toolbar>
      </AppBar>
    </>
  );
}
