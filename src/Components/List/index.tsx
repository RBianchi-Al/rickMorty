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
} from '@material-ui/core'


export function Cards() {

    const { components } = useCards()
    const classes = useStyles();


    return (
        <>

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
                                            <ListItemText> {`Espécie: ${card.species}`} </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText>{card.type}</ListItemText>
                                        </ListItem>

                                        {/* <Button variant="contained" color="secondary" className={classes.button}>Excluir</Button> */}
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
