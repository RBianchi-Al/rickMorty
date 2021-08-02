import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {

    marginBottom: theme.spacing(1),
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),

  },
  gridCard: {
    marginLeft: "0px",

  },
  ativo: {
    color: "#c10000",

    transition: theme.transitions.create("color", {
      duration: theme.transitions.duration.shortest,
    }),

  },

  inativo: {
    color: "#8d8d8d",
  },

}),
);
