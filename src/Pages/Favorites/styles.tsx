import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: { spacing: (arg0: number, arg1: number) => any; }) => ({
    title: {
      fontSize: "36px",
      marginLeft: "25%",
      padding: theme.spacing(0, 1),
    },
  }));
