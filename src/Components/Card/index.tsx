import React from 'react';
import clsx from 'clsx';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Container,
    IconButton,
    Typography,
    Grid

} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './styles'
import { useCards } from '../../hooks/useCards';
import Search from '../Search';
import { useFavorites } from '../../hooks/useFavorites';

export default function CardViews() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const { components,search, setSearch } = useCards()
    const {favorites, handleUpdateFavorites} = useFavorites()
   

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                                            subheader={new Intl.DateTimeFormat('pt-BR').format(
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
                                            
                                            <IconButton onClick={() => handleUpdateFavorites(card)}
                                            aria-label="add to favorites">
                                                <FavoriteIcon 
                                                 //fill={`${favorites.find(favoriteId => favoriteId.id === card.id) ? '#c10000' : 'none'}`}
                                                />
                                            </IconButton>
                                            <IconButton aria-label="share">
                                                <ShareIcon />
                                            </IconButton>
                                            <IconButton
                                                className={clsx(classes.expand, {
                                                    [classes.expandOpen]: expanded,
                                                })}
                                                onClick={handleExpandClick}
                                                aria-expanded={expanded}
                                                aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </IconButton>
                                        </CardActions>
                                        <Collapse in={expanded} timeout="auto" unmountOnExit>
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
                                        </Collapse>

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
