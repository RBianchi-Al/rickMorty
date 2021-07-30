import {useCards} from '../../hooks/useCards'

import { useStyles } from './styles';
import {
    Card,
    CardContent,
    CardMedia,
    Container,
    ListItemText,
    Grid,
    ListItem,
    Typography,
    Button
} from '@material-ui/core'

import CardViews from '../Card'

export function Cards() {

    const { components } = useCards()
    const classes = useStyles();


    return (
        <>
            
            <CardViews/>
            <Container className={classes.cardGrid} maxWidth="md" >
                <div>
                    <Grid container spacing={1}>
                        {components.map((card) => (
                            <Grid item key={card.id} xs={12} md={4} >
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={card.image}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.name}
                                        </Typography>
                                        <ListItem>
                                            <ListItemText>{`Sexo: ${card.gender}`}</ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText> {`Espécie: ${card.species} ${card.type}`} </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText>{card.origin.name}</ListItemText>
                                        </ListItem>

                                        <Button variant="contained" color="secondary" className={classes.button}>Favoritos</Button>
                                    </CardContent>
                                </Card>
                            </Grid>

                        ))}
                    </Grid>

                </div>

            </Container>


        </>
    )
}
