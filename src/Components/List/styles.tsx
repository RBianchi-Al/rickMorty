import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      
    },
    root: {
      flexGrow: 1,
      margin: theme.spacing(5)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(6),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      margin: '0'
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
      margin: 0,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    button: {
      width: '100%',
    }
  }));
  