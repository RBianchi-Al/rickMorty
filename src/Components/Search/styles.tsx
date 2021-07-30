import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>({
  option: {
    fontSize: 15,
    '& > span': {
      fontSize: 18,
    },
  },
  box:{
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    margin: theme.spacing(1)
  }
}))
