/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line no-use-before-define
import React, { useContext } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import clsx from "clsx";
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Container,
    IconButton,
    Typography,
    Grid,

} from "@material-ui/core";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SvgIcon from "@material-ui/core/SvgIcon";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStyles } from "./styles";

import { FavoritesContext } from "../../Context/favoritesContext";

type Components = {
    id: number;
    image: string;
    name: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
    },
    created: Date;

}
type ComponentProps= {
    components: Array<Components> | undefined;
  }

export default function CardViews({ components }: ComponentProps) {
    const [expanded, setExpanded] = React.useState(false);

    //const { components, list } = useCards()
    const { favorites, updateFavorites } = useContext(FavoritesContext);
    const classes = useStyles();

    function handleUpdateFavorites(components: Components) {
        console.log("fazer update");
        updateFavorites(components);
    }

    return (
        <>
            {components !== undefined ? (
                <div>

                    <Container className={classes.cardGrid} maxWidth="md" >
                        <Grid container spacing={3}>
                            {components.map((card) => (

                                <Grid item key={card.id} className={classes.gridCard} xs={12} md={4} >

                                    <Card key={card.id} className={classes.root}>
                                        <CardHeader
                                            title={card.name}
                                            subheader={new Intl.DateTimeFormat("pt-BR").format(
                                                new Date(card.created))}
                                        />
                                        <CardMedia
                                            className={classes.media}
                                            image={card.image}
                                            title={card.name}
                                        />
                                        <CardContent>
                                        </CardContent>
                                        <CardActions disableSpacing>

                                            <IconButton
                                                onClick={() => handleUpdateFavorites(card)}
                                                aria-label="add to favorites">

                                                 <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="32" height="32"
                                                    viewBox="0 0 24 24"
                                                    fill={`${favorites.find(components => components.id === card.id) ? "#ff2400" : "none"}`}
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-heart"
                                                >
                                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                                </svg>
                                                {/* <FavoriteIcon
                                                    fill={`${favorites.find((components) => components.id === card.id) ? '#ff2400' : 'none'}`}

                                                /> */}

                                            </IconButton>

                                        </CardActions>
                                        <CardContent>
                                                <Typography paragraph>Description:</Typography>
                                                <Typography paragraph>
                                                    {`Name: ${card.name}`}
                                                </Typography>
                                                <Typography paragraph>
                                                    {`Sexo: ${card.gender}`}
                                                </Typography>
                                                <Typography paragraph>
                                                    {`Espécie: ${card.species}`}
                                                </Typography>
                                                <Typography>
                                                    {`Origem: ${card.origin.name}
                                                  ${card.type}`}
                                                </Typography>
                                            </CardContent>

                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>
            ) : (<h1>Tivemos um problema....</h1>)}
        </>
    );
}
