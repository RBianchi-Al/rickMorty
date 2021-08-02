
import Header from "../../Components/Header";
import CardViews from '../../Components/Card'
import { useFavorites } from "../../hooks/useFavorites";
import Loading from "../../Components/Loading";
import {Typography} from '@material-ui/core'
import { useStyles } from './styles';




export function Favorites(){
    const {favorites, notFavorite, loading} = useFavorites()
    const classes = useStyles();


    return(
        <>
            <Header/>           
           
            {loading ? 
               <Loading/>      
            : 
          (
            notFavorite ? (
              <>
                <h2 className={classes.title} >Você não tem personagens favoritos</h2>
           
              </>
            ): (
               
                <>
                  <CardViews components={favorites} />
                </>
            )
          )      
        }
            
        </>
    )
}