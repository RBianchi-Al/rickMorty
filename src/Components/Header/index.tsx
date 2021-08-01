import { useHistory } from 'react-router-dom';


import {
  AppBar,  
  Toolbar,
  Typography,
  CssBaseline,
  ListItem,
  Button,
  Avatar,
} from '@material-ui/core';
import { useStyles } from './styles';



export default function Header() {
  const classes = useStyles();
  const history = useHistory();

 
  function handleLogin() {
    history.push('/')
  }
  function handleFavorites(){
    history.push('/favorites')
  }
  

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
        <ListItem>
        <Avatar className={classes.icon} />
          <Typography className={classes.title} color="inherit" noWrap>
            Bem vind@, <br/>
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
            onClick={handleLogin}
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