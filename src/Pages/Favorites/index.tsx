
import Header from "../../Components/Header";
import CardViews from '../../Components/Card'
import { useFavorites } from "../../hooks/useFavorites";
import Loading from "../../Components/Loading";
import {Typography} from '@material-ui/core'





export function Favorites(){
    const {favorites, notFavorite, loading} = useFavorites()
   


    return(
        <>
            <Header/>           
           
            {loading ? 
               <Loading/>      
            : 
          (
            notFavorite ? (
              <>
                <Typography>Você não tem personagens favoritos</Typography>
           
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